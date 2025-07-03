import Hero from '../components/Hero'
import Header from '../components/Header'
import MengapaHalalSection from '../components/MengapaHalalSection'
import ProdukJasaHalalSection from '../components/ProdukJasaHalalSection'
import CTASection from '../components/CTASection'
import FormSection from '../components/FormSection'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'

const Main = () => {
  return (
    <main>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="tentang">
        <MengapaHalalSection />
      </section>
      <section id="produk">
        <ProdukJasaHalalSection />
      </section>
      <section id="CTA">
        <CTASection />
      </section>
      <section id="formulir">
        <FormSection />
      </section>
      <Footer />
      <FloatingButtons />
    </main>
  )
}

export default Main