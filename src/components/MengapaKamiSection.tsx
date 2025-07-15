// src/components/MengapaKami.tsx
import { useTranslation } from 'react-i18next'

const MengapaKami = () => {
    const { t } = useTranslation()
    const logos = [
        'bananania.jpeg',
        'bebektepisawah.jpeg',
        'belimo.png',
        'bepahkupi.png',
        'citrus.png',
        'fablab.png',
        'gsn.png',
        'lifegroups.png',
        'lilly.png',
        'myob.png',
        'petadunia.png',
        'petaku.png',
        'riseback.png',
        'trustly.png'
    ]

    return (
        <section className="bg-[#ffffff] py-16 px-6 lg:px-24 text-center">
            {/* Judul + Video */}
            <h2 className="text-[#128C7E] text-3xl md:text-4xl font-bold mb-8 leading-snug">
                {t('mengapaKami.judul')}
            </h2>
            <div className="max-w-4xl mx-auto mb-12 aspect-video">
                <iframe
                    src="https://www.youtube.com/embed/a7CIPI67nBk"
                    title="Kegiatan Sertifikasi Halal"
                    className="w-full h-full rounded-xl shadow-lg"
                    allowFullScreen
                />
            </div>

            {/* Kepercayaan Klien */}
            <div className="mb-6">
                <h3 className="text-2xl text-[#128C7E] font-semibold">
                    {t('mengapaKami.trustedTitle')}
                </h3>
                <p className="text-gray-600 mt-2 mb-6">
                    {t('mengapaKami.trustedSubtitle')}
                </p>
            </div>
            {/* Logo klien berjalan otomatis */}
            <div className="overflow-hidden py-4 mt-4 max-w-6xl mx-auto">
                <div className="flex gap-4 sm:gap-6 md:gap-10 animate-marquee whitespace-nowrap">
                    {logos.concat(logos).map((logo, idx) => (
                        <img
                            key={idx}
                            src={`/img/clients/${logo}`}
                            alt={`Klien ${idx + 1}`}
                            className="h-16 md:h-20 w-auto object-contain transition duration-300 hover:scale-105"
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default MengapaKami