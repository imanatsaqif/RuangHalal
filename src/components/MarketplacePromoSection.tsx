// src/components/MarketplacePromoSection.tsx
import { useTranslation } from 'react-i18next'

const MarketplacePromoSection = () => {
  const { t } = useTranslation()

  return (
    <section className="relative group overflow-hidden text-center text-white">
      {/* Background image zoom on hover */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
        style={{ backgroundImage: "url('/img/ss_marketplace.webp')" }}
      />

      {/* Overlay hijau */}
      <div className="absolute inset-0 bg-[#128C7E] bg-opacity-90 z-0" />

      {/* Konten */}
      <div className="relative z-10 py-16 px-6 lg:px-24 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-6 whitespace-pre-line">
          {t('marketplace.title')}
        </h2>
        <p className="text-lg text-white mb-8">
          {t('marketplace.description')}
        </p>
        <a
          href="https://ruanghalal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#128C7E] text-lg font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          {t('marketplace.button')}
        </a>
      </div>
    </section>
  )
}

export default MarketplacePromoSection