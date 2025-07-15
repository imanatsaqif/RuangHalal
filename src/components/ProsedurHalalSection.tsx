// src/components/ProsedurHalalSection.tsx
import { useTranslation } from 'react-i18next'

const ProsedurHalalSection = () => {
    const { t } = useTranslation()

    const steps = t('prosedurHalal.steps', { returnObjects: true }) as {
        title: string
        mandiri: string
        bantuan: string
    }[]

    const advantages = t('prosedurHalal.advantages', { returnObjects: true }) as string[]

    return (
        <section className="bg-gray-50 px-6 lg:px-24 py-14">
            {/* Judul */}
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#128C7E] mb-8">
                {t('prosedurHalal.judul')}
            </h2>

            {/* Tabel Prosedur */}
            <div className="overflow-x-auto text-base rounded-xl shadow-md bg-white relative">
                {/* Background Ilustrasi */}
                <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                    <div
                        className="absolute top-0 left-0 w-1/2 h-full bg-center bg-no-repeat bg-contain opacity-90"
                        style={{ backgroundImage: "url('/img/ilustrasi-mandiri.webp')" }}
                    />
                    <div
                        className="absolute top-0 right-0 w-1/2 h-full bg-center bg-no-repeat bg-contain opacity-90"
                        style={{ backgroundImage: "url('/img/ilustrasi-dibantu.webp')" }}
                    />
                </div>

                {/* Tabel */}
                <table className="min-w-full text-left border border-gray-200 relative z-10 bg-white/90">
                    <thead className="bg-[#128C7E] text-white sticky top-0 z-20">
                        <tr>
                            <th className="p-4 w-1/3">{t('prosedurHalal.tahapan')}</th>
                            <th className="p-4">{t('prosedurHalal.mandiri')}</th>
                            <th className="p-4">{t('prosedurHalal.bantuan')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {steps.map((step, i) => (
                            <tr key={i} className="border-t border-gray-200">
                                <td className="p-4 text-[#128C7E] font-bold text-[17px]">{step.title}</td>
                                <td className="p-4 text-gray-700">{step.mandiri}</td>
                                <td className="p-4 text-gray-800">{step.bantuan}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Keunggulan */}
            <div className="mt-16 text-center">
                <p className="text-3xl font-bold text-[#128C7E] mb-6">
                    {t('prosedurHalal.whyTitle')}
                </p>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl px-4 text-left text-[#128C7E]">
                        {advantages.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 bg-white p-5 rounded-xl shadow-md min-w-[180px] sm:min-w-[200px] lg:min-w-[220px]">
                                <img src="/icon/checklist.svg" aria-hidden="true" alt="Checklist" className="w-6 h-6 flex-shrink-0 mt-1" />
                                <span className="text-base text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProsedurHalalSection