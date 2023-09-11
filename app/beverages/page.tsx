import Link from 'next/link'
import Image from 'next/image'
import { Beverage } from '@/content/beverages/beverage'
import { parseDir } from '@/lib/md'
import { Drycker } from '@/app/beverages/beverages'

const beverages = parseDir<Beverage>('content/beverages')

const Beverages = () => {
  return (
    <div>
      <div className="hero beer-hero">
        <video autoPlay={true} playsInline={true} muted={true} loop={true}>
          <source src="https://bryggverket.s3.eu-north-1.amazonaws.com/web/burk-to-render.mp4" type="video/mp4" />
          <source src="https://bryggverket.s3.eu-north-1.amazonaws.com/web/burk-to-render.ogg" type="video/ogg" />
          <source src="https://bryggverket.s3.eu-north-1.amazonaws.com/web/burk-to-render.webm" type="video/webm" />
        </video>
        <div className="bg-overlay" />
        <div className="hero-txt">
          <div className="content-wrap">
            <h1>Våra drycker</h1>
            <br />
            <div className="heroIngress">
              Städat eller stökigt?
              <br /> Vi har dryck för varje tillfälle.
            </div>
          </div>
        </div>
      </div>
      <Drycker beverages={beverages} />
      <div className="block dark">
        <div className="content-wrap">
          <div className="col-grid">
            <div className="col col-6">
              <h2>Collaboration across the nation</h2>
              <div className="ingress">
                Har du idéer för ett välsmakande samarbete?
                <br /> Skicka ett mail så snackar vi vidare.
              </div>
              <a className="btn white" href="mailto:hej@bryggverket.se">
                hej(a)bryggverket.se
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content-wrap">
        <div className="col-grid">
          <div className="col col-6">
            <h3>Limiterade drycker</h3>
            <p className="ingress">Bus i mindre batcher eller till olika tillställningar i begränsad upplaga.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Beverages
