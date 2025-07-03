// src/components/CTASection.tsx
const CTASection = () => {
  return (
    <section className="bg-[#128C7E] text-white text-center px-6 py-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-8">
        Tunggu Apa Lagi <br className="hidden sm:inline" />
        Mari Daftarkan Produk Anda
      </h2>
      <a
        href="#formulir"
        className="inline-block bg-white text-[#128C7E] text-lg font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
      >
        Daftar Sekarang
      </a>
    </section>
  );
};

export default CTASection;