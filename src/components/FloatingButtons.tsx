// src/components/FloatingButtons.tsx
import { useEffect, useState } from 'react'
import { FaWhatsapp, FaComments, FaArrowUp } from 'react-icons/fa'

const FloatingButtons = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // Tampilkan tombol scroll to top setelah scroll > 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Tampilkan tooltip live chat sementara
  const handleLiveChatClick = () => {
    setShowTooltip(true)
    setTimeout(() => setShowTooltip(false), 2500)
  }

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-5 sm:right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        showTopBtn ? 'translate-y-[-1.5rem]' : 'translate-y-0'
      }`}
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/6281290027889"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi via WhatsApp"
        className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg text-white text-xl transition duration-300"
      >
        <FaWhatsapp />
      </a>

      {/* Live Chat */}
      <div className="relative">
        <button
          onClick={handleLiveChatClick}
          aria-label="Live Chat"
          className="bg-teal-600 hover:bg-teal-700 p-3 rounded-full shadow-lg text-white text-xl transition duration-300"
        >
          <FaComments />
        </button>

        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap animate-fade-in">
            Live Chat belum tersedia
          </div>
        )}
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll ke atas"
        className={`bg-gray-700 hover:bg-gray-800 p-3 rounded-full shadow-lg text-white text-xl transition-all duration-500 ${
          showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
        }`}
      >
        <FaArrowUp />
      </button>
    </div>
  )
}

export default FloatingButtons