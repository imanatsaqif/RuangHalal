import Formulir from '../components/Formulir'
import FloatingButtons from '../components/FloatingButtons'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useHeaderHeight } from '../hooks/useHeaderHeight'

function Intro() {
  const headerHeight = useHeaderHeight()

  return (
    <div
      className="flex flex-col md:flex-row bg-white relative"
      style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
    >
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Kolom kiri - Poster */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 ">
        <img
          src="/gambar-poster-halal.webp"
          alt="Poster Sertifikasi Halal"
          className="max-h-[80vh] w-auto object-contain rounded-xl mx-auto"
        />
      </div>


      {/* Kolom kanan - Formulir */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-10">
        <div className="w-full">
          <Formulir showSkip />
        </div>
      </div>

      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  )
}

export default Intro