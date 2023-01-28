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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
