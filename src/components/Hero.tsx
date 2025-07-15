// src/components/Hero.tsx
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHeaderHeight } from '../hooks/useHeaderHeight'

const Hero = () => {
  const { t } = useTranslation()
  const headerHeight = useHeaderHeight()
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const questions = t('hero.questions', { returnObjects: true }) as string[]
  if (!questions || questions.length === 0) return null

  // Pergantian pertanyaan
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % questions.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [questions.length])

  // Scroll teks pertanyaan (desktop)
  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const height = container.clientHeight
      container.scrollTo({
        top: currentIndex * height,
        behavior: 'smooth',
      })
    }
  }, [currentIndex])

  return (
    <section
      style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
      className="relative overflow-hidden"
    >
      {/* Background Animasi */}
      <div className="absolute inset-0 flex">
        {/* Desktop: 3 kolom */}
        <div className="absolute inset-0 hidden md:flex z-0">
          {['kolom1', 'kolom2', 'kolom3'].map((kolom, i) => (
            <div key={i} className="w-1/3 h-full overflow-hidden flex justify-center">
              <div className={i % 2 === 0 ? 'animate-scroll-down-loop' : 'animate-scroll-up-loop'}>
                <img src={`/bg/${kolom}-1.webp`} className="w-full h-screen object-cover" />
                <img src={`/bg/${kolom}-2.webp`} className="w-full h-screen object-cover" />
                <img src={`/bg/${kolom}-1.webp`} className="w-full h-screen object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: hanya 1 kolom */}
        <div className="md:hidden w-full h-full overflow-hidden flex justify-center">
          <div className="animate-scroll-down-loop">
            <img src="/bg/kolom1-1.webp" className="w-full h-screen object-cover" />
            <img src="/bg/kolom1-2.webp" className="w-full h-screen object-cover" />
            <img src="/bg/kolom1-1.webp" className="w-full h-screen object-cover" />
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#128C7E] bg-opacity-60 z-10" />

      {/* TEXT LAYER */}
      <div className="absolute inset-0 z-20 flex items-center justify-start md:justify-start px-6 md:px-10">
        {/* MOBILE: Fade Slide */}
        <div className="block md:hidden w-full text-center">
          <div className="relative h-40">
            {questions.map((q, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out
                  ${i === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white whitespace-pre-line leading-tight">
                  {q}
                </h1>
              </div>
            ))}
          </div>
          <p className="text-white mt-4 text-base">{t('hero.scrollMessage')}</p>
        </div>

        {/* DESKTOP: Scroll Vertical */}
        <div className="hidden md:block text-white max-w-6xl">
          <div ref={containerRef} className="h-56 overflow-hidden relative">
            <div className="flex flex-col transition-all duration-500 ease-in-out">
              {questions.map((question, i) => (
                <div
                  key={i}
                  className="h-56 flex items-center text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold whitespace-pre-line leading-tight px-2 flex-none"
                >
                  {question}
                </div>
              ))}
            </div>
          </div>
          <p className="text-white mt-4 text-xl">{t('hero.scrollMessage')}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero