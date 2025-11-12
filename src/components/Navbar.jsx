import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLink = (href, label) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-4 py-2 text-sm md:text-base text-white/90 hover:text-white transition-colors"
    >
      {label}
    </a>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 transition-all ${scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 ring-1 ring-white/20 shadow-lg">
              <Sparkles size={18} />
            </span>
            <span className="font-semibold tracking-tight">Your Name</span>
          </a>

          <nav className="hidden md:flex items-center">
            {navLink('#work', 'Work')}
            {navLink('#about', 'About')}
            {navLink('#contact', 'Contact')}
            <a href="#contact" className="ml-4 inline-flex items-center rounded-full bg-white text-black font-semibold px-4 py-2 text-sm hover:opacity-90 transition">
              Let’s Talk
            </a>
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black/60 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col text-white">
            {navLink('#work', 'Work')}
            {navLink('#about', 'About')}
            {navLink('#contact', 'Contact')}
          </div>
          <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-white text-black font-semibold px-4 py-2 text-sm">
            Let’s Talk
          </a>
        </div>
      )}
    </header>
  )
}
