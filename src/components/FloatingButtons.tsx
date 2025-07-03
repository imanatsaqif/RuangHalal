import { useEffect, useState } from 'react'
import { FaWhatsapp, FaComments, FaArrowUp } from 'react-icons/fa'

const FloatingButtons = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`fixed bottom-3 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        showTopBtn ? 'translate-y-[-1.5rem]' : 'translate-y-0'
      }`}
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/6281290027889"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg text-white text-xl transition duration-300"
      >
        <FaWhatsapp />
      </a>

      {/* Live Chat */}
      <button
        onClick={() => alert('Fitur Live Chat akan segera tersedia')}
        className="bg-teal-600 hover:bg-teal-700 p-3 rounded-full shadow-lg text-white text-xl transition duration-300"
      >
        <FaComments />
      </button>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
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