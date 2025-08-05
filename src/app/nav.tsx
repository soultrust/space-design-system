'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NavLink = ({ href, children }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li className={`${isActive ? 'active' : ''}`}>
      <Link
        href={href}
        className="ff-sans-cond uppercase text-white letter-spacing-2"
      >
        {children}
      </Link>
    </li>
  )
}

const Nav = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false)
  const handleMenuClick = () => setMobileNavVisible((prev) => !prev)
  return (
    <>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        onClick={handleMenuClick}
        aria-expanded={mobileNavVisible}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          data-visible={mobileNavVisible}
          className="primary-navigation underline-indicators flex"
        >
          <NavLink href="/">
            <span aria-hidden="true">00</span>Home
          </NavLink>
          <NavLink href="/destination">
            <span aria-hidden="true">01</span>Destination
          </NavLink>
          <NavLink href="/crew">
            <span aria-hidden="true">02</span>Crew
          </NavLink>
          <NavLink href="/technology">
            <span aria-hidden="true">03</span>Technology
          </NavLink>
        </ul>
      </nav>
    </>
  )
}

export default Nav
