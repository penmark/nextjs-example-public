'use client'
import React, { useState } from 'react'
import logo from '../public/image/bryggverket_horizontal_white.svg'
import extLink from '../public/image/ext-url.svg'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [hamburglerActive, setHamburglerActive] = useState(false)
  const active = () => (hamburglerActive ? 'active' : '')
  const toggleMenu = () => setHamburglerActive(!hamburglerActive)
  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="Bryggverket Logo" />
          </Link>
        </div>
        <div className={`menu ${active()}`} onClick={toggleMenu}>
          <Link href="/beverages">Våra drycker</Link>
          <Link href="/book">Boka</Link>
          <Link href="/order">Beställ</Link>
          <Link href="/about">Om oss</Link>
          <Link href="/contact">Kontakt</Link>
          <a target="_blank" href="https://brewmerch.se/collections/bryggverket">
            <Image src={extLink} width={16} height={16} alt="Merch" />
            Merch
          </a>
        </div>
        <div className={`hamburgler ${active()}`} onClick={toggleMenu}>
          <div className="ham-line" />
        </div>
      </nav>
    </header>
  )
}
export default Header
