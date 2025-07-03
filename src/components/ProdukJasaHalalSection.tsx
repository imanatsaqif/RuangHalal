// src/components/ProdukJasaHalalSection.tsx
import { useState } from "react";

const ProdukJasaHalalSection = () => {
  const [showList, setShowList] = useState(false);

  const items = [
    { src: "/img/produk/makanan-siap-saji.webp", label: "Makanan Siap Saji" },
    { src: "/img/produk/obat.webp", label: "Obat-obatan" },
    { src: "/img/produk/suplemen.webp", label: "Suplemen" },
    { src: "/img/produk/pembersih.webp", label: "Produk Pembersih" },
    { src: "/img/produk/minuman.webp", label: "Minuman" },
    { src: "/img/produk/kosmetik.webp", label: "Kosmetik" },
    { src: "/img/produk/daging.webp", label: "Daging" },
    { src: "/img/produk/buah.webp", label: "Buah" },
    { src: "/img/produk/penyembelihan.webp", label: "Jasa Penyembelihan" },
    { src: "/img/produk/kurir.webp", label: "Jasa Kurir" },
  ];

  const ProdukJasaHalalList
   = [
    "Makanan & minuman",
    "Obat-obatan & suplemen",
    "Kosmetik",
    "Produk kimia & biologis",
    "Produk rekayasa genetika",
    "Textile, leather & alas kaki",
    "Pengolahan, penyimpanan, pengepakan, distribusi",
    "Penyembelihan hewan",
    "Jasa penjualan & penyajian",
    "Jasa kurir",
  ];

  return (
    <section className="bg-white w-full">
      {/* Subsection Heading */}
      <div className="py-12 text-center px-4">
        <h2 className="text-[#128C7E] font-bold text-4xl">
          PRODUK DAN JASA APA SAJA YANG WAJIB<br className="hidden md:block"/>
          BERSERTIFIKASI HALAL?
        </h2>
      </div>

      {/* Subsection Galeri: Masonry Layout */}
      <div
        className="columns-3 gap-4 px-6 lg:px-24 overflow-y-auto"
        style={{ height: "calc(100vh - 80px)", columnGap: "1.5rem" }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-md relative group"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-auto object-cover transition duration-300 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-xl font-semibold text-center px-2">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Collapse */}
      <div className="text-center py-4">
        <button
          onClick={() => setShowList(!showList)}
          className="text-[#128C7E] hover:underline font-medium"
        >
          {showList ? "Tutup daftar lengkap" : "Klik di sini untuk lihat daftar lengkap produk & jasa"}
        </button>
      </div>

      {/* List Produk dan Jasa */}
      {showList && (
        <div className="max-w-xl mx-auto text-gray-700 text-base py-4 px-6">
          <p className="mb-2">
            Berdasarkan GR 39/2021 dan GR 42/2024, produk dan jasa yang wajib memiliki sertifikasi halal meliputi:
          </p>
          <ul className="list-disc list-inside space-y-1">
            {ProdukJasaHalalList
            .map((it, i) => (<li key={i}>{it}</li>))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default ProdukJasaHalalSection;