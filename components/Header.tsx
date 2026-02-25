"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2">
          <Image
            src="/images/sunlike-white.png"
            alt="Sunlike South Services"
            width={100}
            height={50}
            className={scrolled ? "" : "brightness-0 invert"}
          />
          <span
            className={`hidden sm:block font-semibold transition ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            Sunlike South Services
          </span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-12">

          <NavLink href="#home" scrolled={scrolled}>Home</NavLink>

          <NavLink href="#about" scrolled={scrolled}>About</NavLink>

          <NavLink href="#projects" scrolled={scrolled}>Projects</NavLink>

          <a
            href="#quote"
            className={`px-5 py-2 rounded-full font-semibold transition ${
              scrolled
                ? "bg-[#0E1641] text-white hover:bg-[#1c2766]"
                : "bg-white/20 text-white backdrop-blur-md hover:bg-white/30"
            }`}
          >
            Get a Quote
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-slate-900" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-slate-900" : "text-white"} />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-4">
          <a href="#home" className="block text-slate-800">Home</a>
          <a href="#about" className="block text-slate-800">About</a>
          <a href="#projects" className="block text-slate-800">Projects</a>
          <a
            href="#quote"
            className="block bg-[#0E1641] text-white text-center py-2 rounded-full"
          >
            Get a Quote
          </a>
        </div>
      )}

      {/* Bottom bar */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] bg-[#2AB0FF] transition-all duration-500 ${
          scrolled ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      />
    </header>
  )
}

type NavLinkProps = {
  href: string
  children: React.ReactNode
  scrolled: boolean
}

function NavLink({ href, children, scrolled }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`relative font-medium transition group ${
        scrolled ? "text-slate-900" : "text-white"
      }`}
    >
      {children}
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#2AB0FF] transition-all duration-300 group-hover:w-full" />
    </a>
  )
}