// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 text-[#128C7E] text-sm">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Alamat */}
        <div>
          <h3 className="text-lg font-bold mb-2">RUANG HALAL</h3>
          <p>
            Starfindo Space, Gedung PIDI4.0 Lantai 8, Jl. Raya Kebayoran Lama, Sukabumi Selatan, Kecamatan Kebon Jeruk, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, 11560
          </p>
          <p className="mt-2 font-semibold">Telpon: <span className="font-normal">+62-81290027889</span></p>
          <p className="font-semibold">Email: <span className="font-normal">info@ruanghalal.id</span></p>
        </div>

        {/* Tautan Penting */}
        <div>
          <h3 className="text-base font-bold mb-2">Tautan Penting</h3>
          <ul className="space-y-1">
            <li><a href="#hero" className="hover:underline">› Beranda</a></li>
            <li><a href="#about" className="hover:underline">› Tentang Kami</a></li>
            <li><a href="#services" className="hover:underline">› Layanan Kami</a></li>
            <li><a href="#" className="hover:underline">› Persyaratan Layanan</a></li>
            <li><a href="#" className="hover:underline">› Kebijakan Pribadi</a></li>
          </ul>
        </div>

        {/* Layanan Kami */}
        <div>
          <h3 className="text-base font-bold mb-2">Layanan Kami</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">› Sertifikasi Halal</a></li>
            <li><a href="#" className="hover:underline">› Halal Marketplace</a></li>
            <li><a href="#" className="hover:underline">› Halal Export Hub</a></li>
            <li><a href="#" className="hover:underline">› Wisata Halal</a></li>
            <li><a href="#" className="hover:underline">› Industri 4.0</a></li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-base font-bold mb-2">Sosial Media</h3>
          <p className="mb-4">
            Berikut adalah akun sosial media kami, silakan terhubung untuk mendapatkan update kegiatan kami.
          </p>
          <div className="flex space-x-3">
            <a href="https://twitter.com/@ruanghalal" target="_blank" rel="noopener noreferrer">
              <img src="/icon/x.svg" alt="Twitter / X" className="w-8 h-8" />
            </a>
            <a href="https://www.facebook.com/ruanghalalindonesia" target="_blank" rel="noopener noreferrer">
              <img src="/icon/facebook.svg" alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/ruanghalal_official/" target="_blank" rel="noopener noreferrer">
              <img src="/icon/instagram.svg" alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/company/ruanghalal" target="_blank" rel="noopener noreferrer">
              <img src="/icon/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#128C7E] text-white text-center mt-12 py-4 text-sm">
        <p>&copy; Copyright <strong>Ruang Halal Indonesia</strong>. All Rights Reserved</p>
        <p className="mt-1">Made with love by <a href="https://ruanghalal.id/" className="underline">RHI</a></p>
      </div>
    </footer>
  )
}

export default Footer