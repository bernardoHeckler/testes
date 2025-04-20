// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Sobre from './Sobre'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  )
}