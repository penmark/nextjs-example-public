import convert from 'htmr'
import React, { FC } from 'react'
import { attributes, html } from '@/content/order.md'

const Order: FC = () => {
  const order = attributes

  return (
    <section className="about">
      <div className="order-splash hero">
        <h1>Beställ</h1>
        <div className="bg-overlay"></div>
      </div>
      <div className="description">
        <div className="text-center">
          <h3>{order.subheader}</h3>
        </div>
        {convert(html)}
      </div>
    </section>
  )
}

export default Order
