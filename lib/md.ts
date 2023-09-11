import fs from 'node:fs'
import fm, { FrontMatterResult } from 'front-matter'
import path from 'node:path'
import { marked } from 'marked'
import { FC } from 'react'
import convert from 'htmr'

export const parseFile = <T>(fileName: string) => {
  const f = fs.readFileSync(fileName, { encoding: 'utf-8' })
  const { attributes, body }: FrontMatterResult<T> = fm(f)
  const slug = path.basename(fileName).replace(/\.md$/, '')
  return { ...attributes, body: marked.parse(body), slug }
}

export const parseDir = <T>(dir: string) => {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => parseFile<T>(path.join(dir, file)))
    .sort((a, b) => a.slug.localeCompare(b.slug))
}

export const Markdown: FC<{ text: string }> = ({ text }) => {
  return convert(marked.parse(text))
}
