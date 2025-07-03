import { Routes, Route } from 'react-router-dom'
import Intro from './pages/Intro'
import Main from './pages/Main'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/utama" element={<Main />} />
    </Routes>
  )
}

export default App