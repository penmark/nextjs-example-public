import { attributes, html } from '@/content/book.md'
import convert from 'htmr'
import React, { FC } from 'react'

const Book: FC = () => {
  const book = attributes
  return (
    <section className="about">
      <div className="book-splash hero">
        <h1>Boka</h1>
        <div className="bg-overlay"></div>
      </div>
      <div className="description">
        <div className="text-center">
          <h3>{book.subheader}</h3>
        </div>
        {convert(html)}
      </div>
    </section>
  )
}

export default Book
