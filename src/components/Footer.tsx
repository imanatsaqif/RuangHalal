// src/components/Footer.tsx
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-100 pt-16 text-[#128C7E] text-sm scroll-smooth">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 sm:gap-y-6 gap-x-10">
        {/* Alamat */}
        <div>
          <h3 className="text-lg font-bold mb-2">RUANG HALAL</h3>
          <p>{t('footer.address.line1')}</p>
          <p className="mt-2 font-semibold">
            {t('footer.address.phone')}{' '}
            <span className="font-normal">+62-81290027889</span>
          </p>
          <p className="font-semibold">
            Email: <span className="font-normal">info@ruanghalal.id</span>
          </p>
        </div>

        {/* Tautan Penting */}
        <div>
          <h3 className="text-base font-bold mb-2">{t('footer.links.title')}</h3>
          <ul className="space-y-1">
            <li>
              <a href="#hero" className="hover:underline scroll-smooth">
                › {t('footer.links.home')}
              </a>
            </li>
            <li>
              <a href="#tentang" className="hover:underline scroll-smooth">
                › {t('footer.links.about')}
              </a>
            </li>
            <li>
              <a href="#produk" className="hover:underline scroll-smooth">
                › {t('footer.links.services')}
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                onClick={(e) => e.preventDefault()}
                className="hover:underline"
              >
                › {t('footer.links.terms')}
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                onClick={(e) => e.preventDefault()}
                className="hover:underline"
              >
                › {t('footer.links.privacy')}
              </a>
            </li>
          </ul>
        </div>

        {/* Layanan */}
        <div>
          <h3 className="text-base font-bold mb-2">{t('footer.services.title')}</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="javascript:void(0)"
                onClick={(e) => e.preventDefault()}
                className="hover:underline"
              >
                › {t('footer.services.certification')}
              </a>
            </li>
            <li>
              <a
                href="https://ruanghalal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                › {t('footer.services.marketplace')}
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                onClick={(e) => e.preventDefault()}
                className="hover:underline"
              >
                › {t('footer.services.export')}
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                onClick={(e) => e.preventDefault()}
                className="hover:underline"
              >
                › {t('footer.services.tourism')}
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                onClick={(e) => e.preventDefault()}
                className="hover:underline"
              >
                › {t('footer.services.industry')}
              </a>
            </li>
          </ul>
        </div>

        {/* Media Sosial */}
        <div>
          <h3 className="text-base font-bold mb-2">{t('footer.social.title')}</h3>
          <p className="text-gray-600 mb-4">{t('footer.social.desc')}</p>
          <div className="flex space-x-3">
            <a
              href="https://twitter.com/@ruanghalal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Ruang Halal"
            >
              <img src="/icon/x.svg" alt="Twitter / X" className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/ruanghalalindonesia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Ruang Halal"
            >
              <img src="/icon/facebook.svg" alt="Facebook" className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/ruanghalal_official/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Ruang Halal"
            >
              <img src="/icon/instagram.svg" alt="Instagram" className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/ruanghalal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Ruang Halal"
            >
              <img src="/icon/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#128C7E] text-white text-center mt-12 py-4 text-sm">
        <p>&copy; {t('footer.copyright')}</p>
        <p className="mt-1">
          {t('footer.madeBy')}{' '}
          <a href="https://ruanghalal.id/" className="underline">
            RHI
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer