// src/components/Header.tsx
import { useState } from 'react'
import { Link } from 'react-scroll'

const navLinks = [
  { to: 'tentang', label: 'Tentang' },
  { to: 'produk', label: 'Produk & Jasa' },
  { to: 'formulir', label: 'Kontak' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <a href="/" className="flex items-center">
        <img src="/logo-ruanghalal3.svg" alt="Logo RuangHalal" className="h-10" />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-[#128C7E] font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth
            duration={500}
            offset={-70}
            className="cursor-pointer hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* CTA Button Desktop */}
      <Link
        to="formulir"
        smooth
        duration={500}
        offset={-80}
        className="hidden md:block bg-[#128C7E] text-white px-4 py-2 rounded-xl font-semibold hover:bg-teal-800 cursor-pointer transition"
      >
        Ajukan Sertifikasi
      </Link>

      {/* Mobile menu toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-[#128C7E] focus:outline-none"
      >
        ☰
      </button>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-[#128C7E] font-medium md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="formulir"
            smooth
            duration={500}
            offset={-80}
            className="bg-[#128C7E] text-white px-4 py-2 rounded-xl font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Ajukan Sertifikasi
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header