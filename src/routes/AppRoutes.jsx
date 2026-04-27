import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Services from '../pages/Services/Services'
import Assessment from '../pages/Assessment/Assessment'
import Expertise from '../pages/Expertise/Expertise'
import Values from '../pages/Values/Values'
import Contact from '../pages/Contact/Contact'
import Thanks from '../pages/Thanks/Thanks'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/assessment" element={<Assessment />} />
      <Route path="/expertise" element={<Expertise />} />
      <Route path="/values" element={<Values />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  )
}
