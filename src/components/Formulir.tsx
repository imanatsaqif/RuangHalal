// src/components/Formulir.tsx
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { db } from '../firebase/firebaseInit'
import { addDoc, collection } from 'firebase/firestore'

const Formulir = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nama: '',
    usaha: '',
    email: '',
    nib: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await addDoc(collection(db, 'formulir'), {
        ...formData,
        waktu: new Date().toISOString(),
      })
      navigate('/utama')
    } catch (error) {
      console.error('Gagal mengirim data ke Firestore:', error)
      alert('Gagal mengirim data. Silakan coba lagi.')
    }
  }

  return (
    <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 relative">
      <img src="/logo-ruanghalal2.svg" alt="Logo RuangHalal" className="h-12 mb-4" />
      <h2 className="text-xl font-medium text-teal-700 mb-4">
        Selamat datang di RuangHalal.id<br />
        Silakan mengisi form untuk melanjutkan
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="nama" placeholder="Nama" className="w-full p-3 rounded-xl shadow-inner border" onChange={handleChange} required />
        <input type="text" name="usaha" placeholder="Nama Usaha" className="w-full p-3 rounded-xl shadow-inner border" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="w-full p-3 rounded-xl shadow-inner border" onChange={handleChange} required />
        <input type="text" name="nib" placeholder="NIB" className="w-full p-3 rounded-xl shadow-inner border" onChange={handleChange} required />
        <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded-xl hover:bg-teal-700 transition">SUBMIT</button>
      </form>

      <p className="text-sm text-center mt-4 text-gray-500 cursor-pointer hover:underline" onClick={() => navigate('/utama')}>
        Isi formulir nanti
      </p>
    </div>
  )
}

export default Formulir