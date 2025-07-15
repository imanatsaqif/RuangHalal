// src/components/MengapaHalalSection.tsx
import { useTranslation } from 'react-i18next'
import { useHeaderHeight } from '../hooks/useHeaderHeight'

const MengapaHalalSection = () => {
  const { t } = useTranslation()
  const headerHeight = useHeaderHeight()

  return (
    <section
      className="bg-[#F7F7F7] px-6 lg:px-24 flex flex-col justify-center py-10 sm:py-12"
      style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
    >
      <h2 className="text-center text-[#128C7E] font-bold text-[clamp(1.75rem,5vw,3.75rem)] mb-8 leading-snug">
        {t('mengapa.title')} <br className="hidden md:block" />
        {t('mengapa.subtitle')}
      </h2>

      {/* Box UU JPH */}
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-3 mb-10 max-w-5xl mx-auto">
        <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
          <img
            src="/icon/logo-halal.svg"
            alt="Logo Halal"
            className="w-full h-full object-contain"
          />
        </div>

        <div>
          <p className="text-[#128C7E] font-bold text-3xl mb-1">
            {t('mengapa.law.title')}
          </p>
          <p className="text-gray-600 text-sm sm:text-base lg:text-xl text-justify">
            {t('mengapa.law.description')}</p>
        </div>
      </div>

      {/* Benefit Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 max-w-6xl mx-auto px-4 text-center text-[#128C7E] font-semibold text-lg">
        <div className="flex flex-col items-center max-w-[800px]">
          <div className="bg-[#128C7E] rounded-xl p-4 mb-4 w-20 h-20 flex items-center justify-center">
            <img
              src="/icon/icon-kepercayaan.svg"
              alt="Kepercayaan"
              className="h-full object-contain"
            />
          </div>
          <p className="text-2xl whitespace-pre-line">{t('mengapa.benefit1')}</p>
        </div>

        <div className="flex flex-col items-center mx-auto max-w-xs">
          <div className="bg-[#128C7E] rounded-xl p-4 mb-4 w-20 h-20 flex items-center justify-center">
            <img
              src="/icon/icon-nilai-jual1.svg"
              alt="Nilai Jual"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-2xl whitespace-pre-line">{t('mengapa.benefit2')}</p>
        </div>

        <div className="flex flex-col items-center mx-auto max-w-xs">
          <div className="bg-[#128C7E] rounded-xl p-4 mb-4 w-20 h-20 flex items-center justify-center">
            <img
              src="/icon/icon-pasar-global.svg"
              alt="Pasar Internasional"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-2xl whitespace-pre-line">{t('mengapa.benefit3')}</p>
        </div>
      </div>
    </section>
  )
}

export default MengapaHalalSection