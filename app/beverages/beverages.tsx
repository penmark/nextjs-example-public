'use client'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Beverage } from '@/content/beverages/beverage'

type Dryckestyp = 'beer' | 'weakbeer' | 'soda' | null

type FilterknappProps = PropsWithChildren & {
  aktiv: boolean
  vidKlick: () => void
}
const Filterknapp: FC<FilterknappProps> = ({ aktiv, children, vidKlick }) => (
  <button onClick={vidKlick} className={`filter ${aktiv}`}>
    {children}
  </button>
)

const filterknappar: [Dryckestyp, string][] = [
  [null, 'Alla'],
  ['beer', 'Starköl'],
  ['weakbeer', 'Folköl'],
  ['soda', 'Läsk'],
]

export const Drycker: FC<{ beverages: Beverage[] }> = ({ beverages }) => {
  const [drycker, setDrycker] = useState(beverages)
  const [filtreraPå, setFiltreraPå] = useState<Dryckestyp | null>(null)

  useEffect(() => {
    setDrycker(filtreraPå ? beverages.filter((b) => b.type === filtreraPå) : beverages)
  }, [beverages, filtreraPå])

  return (
    <div className="content-wrap">
      {filterknappar.map(([type, label]) => (
        <Filterknapp key={label} vidKlick={() => setFiltreraPå(type)} aktiv={filtreraPå === type}>
          {label}
        </Filterknapp>
      ))}
      <div className="col-grid beer-grid">
        {drycker.map((b) => (
          <div className="col col-3" key={b.slug} style={{ backgroundColor: b.bgColor }}>
            <div className="beerBg" style={{ backgroundImage: `url(${b.bgImage})` }}></div>
            <Link href={`/beverages/${b.slug}`}>
              <div className="beerGridItem">
                <div className="beerThumb">
                  <Image loading="lazy" src={b.image} alt={b.name} layout={'fill'} objectFit="contain" />
                </div>

                <h5>{b.name}</h5>
                <div className="readMore" style={{ color: b.bgColor }}>
                  Läs mer
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
