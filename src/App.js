// React Router Dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Servicing from './pages/Servicing/Servicing'
import Assessment from './pages/Assessment/Assessment'
import Expertise from './pages/Expertise/Expertise'
import Values from './pages/Values/Values'
import Contact from './pages/Contact/Contact'
import Thanks from './pages/Thanks/Thanks'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Servicing />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/values" element={<Values />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
