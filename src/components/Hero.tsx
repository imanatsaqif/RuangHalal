// src/components/Hero.tsx
import { useEffect, useRef, useState } from 'react'

const questions = [
  'SUDAH HALAL KAH \nPRODUKMU SAAT INI?',
  'KENAPA PRODUK SAYA \nHARUS HALAL?',
  'APAKAH JASA PERLU \nSERTIFIKAT HALAL?',
]

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ganti pertanyaan tiap 1200ms
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % questions.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Scroll ke pertanyaan aktif
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const height = container.clientHeight;
      container.scrollTo({
        top: currentIndex * height,
        behavior: "smooth"
      });
    }
  }, [currentIndex]);

  return (
    <section className="min-h-[600px] h-[calc(100vh-80px)] relative flex overflow-hidden">
      {/* Background Columns */}
      <div className="w-1/3 h-full overflow-hidden flex justify-center">
        <div className="animate-scroll-down">
          <img src="/bg/kolom1-2.webp" className="w-full object-cover" />
          <img src="/bg/kolom1-1.webp" className="w-full object-cover" />
          <img src="/bg/kolom1-2.webp" className="w-full object-cover" />
          <img src="/bg/kolom1-1.webp" className="w-full object-cover" />
        </div>
      </div>
      <div className="w-1/3 h-full overflow-hidden flex justify-center">
        <div className="animate-scroll-up">
          <img src="/bg/kolom2-2.webp" className="w-full object-cover" />
          <img src="/bg/kolom2-1.webp" className="w-full object-cover" />
          <img src="/bg/kolom2-2.webp" className="w-full object-cover" />
          <img src="/bg/kolom2-1.webp" className="w-full object-cover" />
        </div>
      </div>
      <div className="w-1/3 h-full overflow-hidden flex justify-center">
        <div className="animate-scroll-down">
          <img src="/bg/kolom3-2.webp" className="w-full object-cover" />
          <img src="/bg/kolom3-1.webp" className="w-full object-cover" />
          <img src="/bg/kolom3-2.webp" className="w-full object-cover" />
          <img src="/bg/kolom3-1.webp" className="w-full object-cover" />
        </div>
      </div>

      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-[#128C7E] bg-opacity-60 z-10" />

      {/* Tulisan */}
      <div className="text-white absolute left-10 top-1/2 transform -translate-y-1/2 max-w-4xl z-20">
        <div
          ref={containerRef}
          className="h-[14rem] overflow-hidden relative"
        >
          <div className="flex flex-col transition-all duration-500 ease-in-out">
            {questions.map((question, i) => (
              <div
                key={i}
                className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold"
              >
                {question}
              </div>
            ))}
          </div>
        </div>
        <p className="text-white mt-4 text-xl">Scroll ke bawah untuk dapatkan solusinya!</p>
      </div>
    </section>
  )
}

export default Hero