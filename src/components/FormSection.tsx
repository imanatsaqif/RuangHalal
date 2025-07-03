// src/components/FormSe.tsx
import Formulir from './Formulir'

const FormSection = () => {
  return (
    <section className="min-h-screen flex bg-white" id="formulir">
      <div className="w-1/2 h-screen text-[#128C7E] flex items-center justify-center p-10">
        <h2 className="text-4xl lg:text-5xl font-bold leading-snug max-w-xl text-center">
          Lebih Mudah Dapatkan <br /> Sertifikat Halal Anda <br /> Bersama Kami
        </h2>
      </div>
      <div className="w-1/2 bg-white flex items-center justify-center p-10">
        <Formulir />
      </div>
    </section>
  )
}

export default FormSection