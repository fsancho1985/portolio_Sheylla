// Styles
import './Navbar.css'

// Links from react router dom
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Quem Somos</NavLink>
        <NavLink to="/services">Serviços</NavLink>
        <NavLink to="/assessment">Avaliação</NavLink>
        <NavLink to="/expertise">Perícia</NavLink>
        <NavLink to="/values">Valores</NavLink>
      </nav>
      <nav className="navbar-container-mobile">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Quem Somos</NavLink>
        <NavLink to="/services">Serviços</NavLink>
        <NavLink to="/assessment">Avaliação</NavLink>
        <NavLink to="/expertise">Perícia</NavLink>
        <NavLink to="/values">Valores</NavLink>
      </nav>
    </>
  )
}

export default Navbar
