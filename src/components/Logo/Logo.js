// Assets
import image from '../../assets/Logo.jpeg'

// Styles
import './Logo.css'

const Logo = () => {
  return (
    <div className="logo">
      <img src={image} alt="Rodacki Perícias" />

      <h2>As melhores Condições do Mercado!</h2>
    </div>
  )
}

export default Logo
