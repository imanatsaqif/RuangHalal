import { useTranslation } from 'react-i18next'

const CTASection = () => {
  const { t } = useTranslation()

  const scrollToForm = () => {
    const target = document.getElementById('formulir')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-[#128C7E] text-white text-center px-6 py-16 animate-fade-in">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-8 whitespace-pre-line">
        {t('cta.title')}
      </h2>
      <button
        onClick={scrollToForm}
        className="inline-block bg-white text-[#128C7E] text-lg font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition transform hover:scale-105 active:scale-95"
      >
        {t('cta.button')}
      </button>
    </section>
  )
}

export default CTASection