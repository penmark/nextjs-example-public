import React, { FC } from 'react'
import Image from 'next/image'
import type { Beverage } from '@/content/beverages/beverage'
import { Markdown, parseFile } from '@/lib/md'

const Systembolaget: FC<{ beverage: Beverage }> = ({ beverage }) => {
  return beverage.systembolagetUrl ? (
    <p className="systembolagetUrl">
      <a href={beverage.systembolagetUrl}>
        <span className="link">Systembolaget</span>
        <span className="btn-splash" />
      </a>
    </p>
  ) : null
}

const Abv: FC<{ beverage: Beverage }> = ({ beverage }) => {
  return beverage.abv ? <span className="abv">Alk {beverage.abv}% vol</span> : null
}

const Beverage: FC<{ params: { slug: string } }> = ({ params: { slug } }) => {
  const beverage = parseFile<Beverage>(`content/beverages/${decodeURIComponent(slug)}.md`)

  return (
    <article className="beverage media" style={{ backgroundColor: beverage.bgColor }}>
      <figure className="media-left">
        <div className="beverage-bg" style={{ backgroundImage: `url(${beverage.bgImage})` }} />
        <div className="bg-overlay" />
        <p className="image is-128x128">
          <Image src={beverage.image} alt={beverage.name} width={894} height={900} />
        </p>
      </figure>
      <figcaption className="media-content">
        <div className="content">
          <p className="subtitle">
            {beverage.style} | <Abv beverage={beverage} />
          </p>
          <div className="border" />
          <h2 className="title">{beverage.name}</h2>
          <Markdown text={beverage.body} />
          <Systembolaget beverage={beverage} />
        </div>
      </figcaption>
    </article>
  )
}
export default Beverage
