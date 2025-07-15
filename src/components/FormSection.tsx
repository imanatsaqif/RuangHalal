import Formulir from './Formulir'
import { useTranslation } from 'react-i18next'
import { useHeaderHeight } from '../hooks/useHeaderHeight'

const FormSection = () => {
  const { t } = useTranslation()
  const headerHeight = useHeaderHeight()

  return (
    <section
      id="formulir"
      className="flex flex-col md:flex-row bg-white"
      style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
    >
      {/* Kolom Kiri - Judul */}
      <div className="w-full md:w-1/2 text-[#128C7E] items-center justify-center p-10 hidden md:flex">
        <h2 className="text-4xl lg:text-5xl font-bold leading-snug max-w-xl text-center whitespace-pre-line">
          {t('formulir.title')}
        </h2>
      </div>

      {/* Kolom Kanan - Formulir */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-10">
        <Formulir />
      </div>
    </section>
  )
}

export default FormSection