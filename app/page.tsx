import React, { FC } from 'react'
import Image from 'next/image'
import { attributes as landing } from '@/content/landing.md'
import hangloose from '../public/image/bv-pink-splash.png'
import event from '../public/image/event.svg'
import can from '../public/image/drinks.svg'
import order from '../public/image/order.svg'
import crew from '../public/image/crew.svg'
import Link from 'next/link'
import convert from 'htmr'

const Home: FC<any> = () => {
  return (
    <div>
      <div className="hero intro-hero">
        <video autoPlay={true} playsInline={true} muted={true} loop={true}>
          <source src="https://bryggverket.s3.eu-north-1.amazonaws.com/web/bv-intro.mp4" type="video/mp4" />
        </video>
        <div className="bg-overlay" />
        <div className="hero-txt">
          <h1>Bryggverket</h1>
          <h2>
            How can less
            <br /> be<span>More?</span>
          </h2>
        </div>
      </div>
      <div className="short-desc">
        <div className="content-wrap center narrow">
          <Image className="hangloose" src={hangloose} alt="Hang loose" />
          <h2>Hur kan mindre vara mer?</h2>
          <p>{convert(landing.text1)}</p>
        </div>
      </div>

      <div className="beer-overview">
        <div className="beer-grid-txt-overlay">
          <div className="content-wrap center">
            <div className="grid">
              <div className="item">
                <Image src={can} alt="Yes, we can" />
                <div>
                  <h3>Våra öl & Drycker can</h3>
                  <div className="border" />
                  <p>{convert(landing.text2)}</p>
                  <p className="systembolagetUrl no-ext">
                    <Link href="/beverages">
                      <span className="link">Kolla in bärsen</span>
                      <span className="btn-splash" />
                    </Link>
                  </p>
                </div>
              </div>
              <div className="item">
                <Image src={event} alt="Norrland" />
                <div>
                  <h3>Event & Bokningar</h3>
                  <div className="border" />
                  <p>{convert(landing.text3)}</p>
                  <p className="systembolagetUrl no-ext">
                    <Link href="/book">
                      <span className="link">Ja! Jag vill ha kul</span>
                      <span className="btn-splash" />
                    </Link>
                  </p>
                </div>
              </div>
              <div className="item">
                <Image src={order} alt="Hinkability" />
                <div>
                  <h3>Hemkörning & Försäljning</h3>
                  <div className="border" />
                  <p>{convert(landing.text4)}</p>
                  <p className="systembolagetUrl no-ext">
                    <Link href="/order">
                      <span className="link">Skynda fynda!</span>
                      <span className="btn-splash" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block-wrap short-about">
        <div className="content-wrap center narrow">
          <Image className="crew" src={crew} alt="Crew" />
          <h2>Om oss</h2>
          <p>
            I Stöcksjö, strax utanför Umeå ligger Bryggverket. Ett litet bryggeri startat av fyra killar som gillar öl.
            Förmodligen gillar de öl lite mer än de flesta eftersom de flesta inte startar ett litet bryggeri. Men det
            gjorde alltså Pontus, Albin, Peter och Patrik. De ville vara en del av den ölrenässans som pågår för fullt
            och bidra med det slags öl de själva gillar att dricka.
          </p>
          <p className="systembolagetUrl no-ext">
            <Link href="beers">
              <span className="link">Läs mer om oss</span>
              <span className="btn-splash" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Home
