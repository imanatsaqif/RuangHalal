// src/components/ProdukJasaHalalSection.tsx
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHeaderHeight } from '../hooks/useHeaderHeight'

const ProdukJasaHalalSection = () => {
  const { t } = useTranslation()
  const headerHeight = useHeaderHeight()
  const [showList, setShowList] = useState(false)

  const items = t('produkHalal.items', { returnObjects: true }) as {
    src: string
    label: string
  }[]

  const list = t('produkHalal.list', { returnObjects: true }) as string[]

  return (
    <section className="bg-white w-full">
      {/* Judul */}
      <div className="py-10 text-center px-4">
        <h2 className="text-[#128C7E] font-bold text-3xl sm:text-4xl whitespace-pre-line">
          {t('produkHalal.title')}
        </h2>
      </div>

      {/* Galeri Marquee Masonry */}
      <div
        className="columns-1 sm:columns-2 md:columns-3 gap-4 px-6 lg:px-24 overflow-hidden"
        style={{ height: `calc(100vh - ${headerHeight}px)`, columnGap: "1.5rem" }}
      >
        <div className="animate-marquee-x will-change-transform">
          {[...items, ...items].map((item, idx) => (
            <div
              key={idx}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-md relative group"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-auto object-cover transition duration-300 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/30">
                <span className="text-white text-xl font-semibold text-center px-2">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toggle List Button */}
      <div className="text-center py-6">
        <button
          onClick={() => setShowList(!showList)}
          className="text-[#128C7E] hover:underline font-medium"
        >
          {showList ? t('produkHalal.hide') : t('produkHalal.show')}
        </button>
      </div>

      {/* Daftar lengkap */}
      {showList && (
        <div className="max-w-xl mx-auto text-gray-700 text-base py-4 px-6">
          <p className="mb-2">{t('produkHalal.desc')}</p>
          <ul className="list-disc list-inside space-y-1">
            {list.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

export default ProdukJasaHalalSection