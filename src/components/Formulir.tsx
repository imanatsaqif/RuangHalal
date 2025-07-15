// src/components/Formulir.tsx
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { db } from '../firebase/firebaseInit'
import { addDoc, collection } from 'firebase/firestore'
import { useTranslation } from 'react-i18next'

type FormulirProps = {
  showSkip?: boolean
}

const Formulir = ({ showSkip = false }: FormulirProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    nama: '',
    usaha: '',
    email: '',
    nib: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await addDoc(collection(db, 'formulir'), {
        ...formData,
        waktu: new Date().toISOString()
      })
      navigate('/utama')
    } catch (error) {
      console.error('Gagal mengirim data ke Firestore:', error)
      alert(t('formulir.error'))
    }
  }

  return (
    <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 relative">
      <img src="/logo-ruanghalal2.svg" alt="Logo RuangHalal" className="h-12 mb-4" />
      <h2 className="text-xl font-medium text-teal-700 mb-4 whitespace-pre-line">
        {t('formulir.heading')}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nama"
          placeholder={t('formulir.nama')}
          className="w-full p-3 rounded-xl shadow-inner border"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="usaha"
          placeholder={t('formulir.usaha')}
          className="w-full p-3 rounded-xl shadow-inner border"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t('formulir.email')}
          className="w-full p-3 rounded-xl shadow-inner border"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nib"
          placeholder={t('formulir.nib')}
          className="w-full p-3 rounded-xl shadow-inner border"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-xl hover:bg-teal-700 transition"
        >
          {t('formulir.submit')}
        </button>
      </form>

      {showSkip && (
        <p
          className="text-sm text-center mt-4 text-gray-500 cursor-pointer hover:underline"
          onClick={() => navigate('/utama')}
        >
          {t('formulir.skip')}
        </p>
      )}
    </div>
  )
}

export default Formulir