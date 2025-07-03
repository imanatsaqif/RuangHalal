import Formulir from '../components/Formulir'
import FloatingButtons from '../components/FloatingButtons'

function Intro() {
  return (
    <div className="min-h-screen flex bg-white relative">
      {/* Kolom kiri - Poster */}
      <div className="w-1/2 h-screen bg-white flex items-center justify-end p-6 shadow-2xl">
        <img
          src="/gambar-poster-halal.webp"
          alt="Poster Sertifikasi Halal"
          className="h-full w-auto object-contain rounded-xl"
        />
      </div>

      {/* Kolom kanan - Formulir */}
      <div className="w-1/2 bg-white flex items-center justify-start p-10">
        <Formulir />
      </div>

      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  )
}

export default Intro