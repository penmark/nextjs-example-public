import convert from 'htmr'
import React, { FC } from 'react'
import { attributes, html } from '@/content/about.md'
import Image from 'next/image'

type Brewer = {
  name: string
  photo: string
  position: string
}
const Brewer: FC<{ brewer: Brewer }> = ({ brewer }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-square">
        <Image src={brewer.photo} alt={brewer.name} width={544} height={544} />
      </figure>
    </div>
    <div className="card-content">
      <p className="title is-4">{brewer.name}</p>
      <p className="subtitle is-6">{brewer.position}</p>
    </div>
  </div>
)

const About: FC = () => {
  const about = attributes
  return (
    <section className="about">
      <div className="about-splash hero">
        <h1>{about.title}</h1>
        <div className="bg-overlay"></div>
      </div>
      <div className="description">{convert(html)}</div>
      <div className="team-wrap">
        <div className="team">
          {(about.team as unknown as Brewer[]).map((b) => (
            <Brewer brewer={b} key={b.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default About
