// src/components/LanguageSwitcher.tsx
import { useState, useRef, useEffect } from 'react'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

const languages = [
  {
    code: 'id',
    label: 'Bahasa Indonesia',
    icon: 'https://flagcdn.com/w40/id.png'
  },
  {
    code: 'en',
    label: 'English',
    icon: 'https://flagcdn.com/w40/gb.png'
  },
  {
    code: 'ja',
    label: '日本語',
    icon: 'https://flagcdn.com/w40/jp.png'
  }
]

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const currentLang = i18n.language || 'id'
  const { t } = useTranslation()

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleChange = (code: string) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-1 hover:text-teal-800 transition"
      >
        <span>{t('language.label')}</span>
        <span className="text-xs">▾</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-48 bg-white border rounded shadow-md text-sm z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100 ${
                lang.code === currentLang ? 'bg-gray-100 font-semibold' : ''
              }`}
            >
              <img
                src={lang.icon}
                alt={lang.code}
                className="w-5 h-3 rounded-sm object-cover"
              />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher