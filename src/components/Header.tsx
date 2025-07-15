// src/components/Header.tsx
import { useState } from 'react'
import { Link } from 'react-scroll'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { HiOutlineMenu } from 'react-icons/hi'

const navLinks = [
  { to: 'tentang', labelKey: 'header.tentang', type: 'scroll' },
  { to: 'produk', labelKey: 'header.produk', type: 'scroll' },
  { to: 'formulir', labelKey: 'header.kontak', type: 'scroll' },
  { to: 'https://ruanghalal.com', labelKey: 'header.marketplace', type: 'external' }
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <header className="bg-white border-b px-8 py-3 flex justify-between items-center sticky top-0 z-50 text-sm font-medium text-[#128C7E]">
      {/* Logo */}
      <a href="/" className="flex items-center space-x-2">
        <img src="/logo-ruanghalal3.svg" alt="Logo RuangHalal" className="className= h-6 sm:h-8 " />
        <span className="text-lg font-bold text-[#128C7E] hidden sm:inline">{t('header.brand')}</span>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) =>
          link.type === 'external' ? (
            <a
              key={link.to}
              href={link.to}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-800 transition"
            >
              {t(link.labelKey)}
            </a>
          ) : (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-50}
              className="cursor-pointer hover:text-teal-800 transition"
            >
              {t(link.labelKey)}
            </Link>
          )
        )}
        <LanguageSwitcher />
        <Link
          to="formulir"
          smooth
          duration={500}
          offset={-50}
          className="cursor-pointer ml-4 border border-[#128C7E] text-[#128C7E] px-4 py-1 rounded-full hover:bg-[#128C7E] hover:text-white transition"
        >
          {t('header.cta')}
        </Link>
      </nav>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-[#128C7E] text-2xl focus:outline-none"
      >
        <HiOutlineMenu size={24} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute mt-[4rem] left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-[#128C7E] md:hidden">
          {navLinks.map((link) =>
            link.type === 'external' ? (
              <a
                key={link.to}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-800 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t(link.labelKey)}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-50}
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {t(link.labelKey)}
              </Link>
            )
          )}
          <LanguageSwitcher />
          <Link
            to="formulir"
            smooth
            duration={500}
            offset={-80}
            className="border border-[#128C7E] text-[#128C7E] px-4 py-2 rounded-full font-semibold text-center hover:bg-[#128C7E] hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            {t('header.cta')}
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header