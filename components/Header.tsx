"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-500
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-md border-b border-slate-200"
            : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-12 py-4 flex items-center justify-between">

        {/* LEFT : LOGO + TITLE */}
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/images/sunlike-white.png"
            alt="Sunlike South Services"
            width={110}
            height={55}
            className={scrolled ? "" : "brightness-0 invert"}
          />
          <span
            className={`font-semibold tracking-wide transition ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            Sunlike South Services
          </span>
        </a>

        {/* CENTER MENU */}
        <div className="flex items-center gap-24">

          <NavLink href="#home" scrolled={scrolled}>
            Home
          </NavLink>

          <Dropdown
            label="Company"
            id="company"
            scrolled={scrolled}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            items={[
              { label: "About Us", href: "#about" },
              { label: "Vision", href: "#vision" },
            ]}
          />

          <Dropdown
            label="Expertise"
            id="expertise"
            scrolled={scrolled}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            items={[
              { label: "Projects", href: "#projects" },
              { label: "HSE & Guarantee", href: "#hse" },
            ]}
          />
        </div>

        {/* RIGHT : CTA */}
        <a
          href="#quote"
          className={`
            px-6 py-2.5 rounded-full font-semibold transition-all duration-300
            ${
              scrolled
                ? "bg-[#0E1641] text-white hover:bg-[#1c2766]"
                : "bg-white/20 text-white backdrop-blur-md hover:bg-white/30"
            }
          `}
        >
          Get a Quote
        </a>

      </nav>

      {/* Bottom animated bar */}
      <div
        className={`
          absolute bottom-0 left-0 h-[2px] bg-[#2AB0FF]
          transition-all duration-500
          ${scrolled ? "w-full opacity-100" : "w-0 opacity-0"}
        `}
      />
    </header>
  )
}

/* NAV LINK */

function NavLink({
  href,
  children,
  scrolled,
}: {
  href: string
  children: React.ReactNode
  scrolled: boolean
}) {
  return (
    <a
      href={href}
      className={`
        relative font-medium tracking-wide transition duration-300 group
        ${scrolled ? "text-slate-900" : "text-white"}
      `}
    >
      {children}
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#2AB0FF] transition-all duration-300 group-hover:w-full" />
    </a>
  )
}

/* DROPDOWN */

function Dropdown({
  label,
  items,
  scrolled,
  openMenu,
  setOpenMenu,
  id,
}: {
  label: string
  items: { label: string; href: string }[]
  scrolled: boolean
  openMenu: string | null
  setOpenMenu: (id: string | null) => void
  id: string
}) {
  const isOpen = openMenu === id

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(id)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <button
        className={`
          relative font-medium tracking-wide transition duration-300 group
          ${scrolled ? "text-slate-900" : "text-white"}
        `}
      >
        {label}
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#2AB0FF] transition-all duration-300 group-hover:w-full" />
      </button>

      <div
        className={`
          absolute left-1/2 -translate-x-1/2 top-full mt-2
          bg-white border border-slate-200 rounded-xl shadow-xl
          min-w-[220px] py-3
          transition-all duration-200
          z-50
          ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }
        `}
      >

        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block px-6 py-2 text-slate-700 hover:bg-slate-100 transition"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}
