"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
          fixed top-0 left-0 w-full z-[9999]
          transition-all duration-500
          ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-md border-b border-slate-200"
              : "bg-transparent"
          }
        `}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/images/sunlike-white.png"
              alt="Sunlike South Services"
              width={110}
              height={55}
              className={scrolled ? "" : "brightness-0 invert"}
            />
            <span
              className={`font-semibold tracking-wide transition hidden sm:block ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              Sunlike South Services
            </span>
          </a>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-24">

            <NavLink href="#home" scrolled={scrolled}>Home</NavLink>

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

          {/* DESKTOP CTA */}
          <a
            href="#quote"
            className={`
              hidden md:block
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

          {/* ================= MOBILE BURGER ================= */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden z-50 flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>
        </nav>
      </header>

      {/* ================= MOBILE FULLSCREEN MENU ================= */}
      <MobileMenu isOpen={mobileOpen} close={closeMobile} />
    </>
  )
}

/* ================= NAV LINK ================= */
function NavLink({ href, children, scrolled }: { href: string; children: React.ReactNode; scrolled: boolean }) {
  return (
    <a
      href={href}
      className={`
        relative font-medium tracking-wide text-lg transition duration-300 group
        ${scrolled ? "text-slate-900" : "text-white"}
      `}
    >
      {children}
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#2AB0FF] transition-all duration-300 group-hover:w-full" />
    </a>
  )
}

/* ================= DROPDOWN (DESKTOP ONLY) ================= */
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
    <div className="relative" onMouseEnter={() => setOpenMenu(id)} onMouseLeave={() => setOpenMenu(null)}>
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
          absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2
          bg-white border border-slate-200 rounded-xl shadow-xl
          min-w-[220px] py-3
          transition-all duration-200 z-[9999]
          ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
        `}
      >
        {items.map((item, index) => (
          <a key={index} href={item.href} className="block px-6 py-2 text-slate-700 hover:bg-slate-100 transition">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

/* ================= MOBILE MENU COMPONENT ================= */
function MobileMenu({ isOpen, close }: { isOpen: boolean; close: () => void }) {
  return (
    <div
      className={`
        fixed inset-0 z-[9998] md:hidden transition-all duration-500
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#0E1641]/95 backdrop-blur-xl" onClick={close} />

      {/* Links */}
      <div className="relative flex flex-col justify-center items-center h-full gap-10">
        {[
          { label: "Home", href: "#home" },
          { label: "About Us", href: "#about" },
          { label: "Vision", href: "#vision" },
          { label: "Projects", href: "#projects" },
          { label: "HSE & Guarantee", href: "#hse" },
        ].map((item, i) => (
          <NavLink key={i} href={item.href} scrolled={false}>
            <span onClick={close}>{item.label}</span>
          </NavLink>
        ))}

        <a
          href="#quote"
          onClick={close}
          className="mt-6 px-8 py-3 rounded-full bg-white text-[#0E1641] font-semibold transition hover:scale-105"
        >
          Get a Quote
        </a>
      </div>
    </div>
  )
}