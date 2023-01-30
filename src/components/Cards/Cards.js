import { AiOutlineUser, AiOutlineSetting, AiOutlineAreaChart } from 'react-icons/ai'

import House from '../../assets/house.jpg'
import Servicos from '../../assets/servicos.jpg'
import Avaliacao from '../../assets/avaliacao.jpg'

import './Card.css'

import { NavLink } from 'react-router-dom'

const Cards = () => {
  return (
    <div className="wrapper-container">
    <div className="container-img">
      <img
        src={House}
        alt="Mão com uma chave e outra mão para receber a chave"
      />
      <div className="container-link">
        <div className='container-text'>
          <AiOutlineUser size="1.5em" color='#494c52'/>
          <span>Quem Somos</span>
        </div>
        <NavLink to="/about">Saiba mais</NavLink>
      </div>
    </div>
    <div className="container-img">
      <img
        src={Servicos}
        alt="Mão com uma chave e outra mão para receber a chave"
      />
      <div className="container-link">
        <div className='container-text'>
          <AiOutlineSetting size="1.5em" color='#494c52'/>
          <span>Serviços</span>
        </div>
        <NavLink to="/services">Saiba mais</NavLink>
      </div>
    </div>
    <div className="container-img">
      <img
        src={Avaliacao}
        alt="Mão com uma chave e outra mão para receber a chave"
      />
      <div className="container-link">
        <div className='container-text'>
          <AiOutlineAreaChart size="1.5em" color='#494c52'/>
          <span>Avaliação Imobiliária</span>
        </div>
        <NavLink to="/assessment">Saiba mais</NavLink>
      </div>
    </div>
  </div>
  )
}

export default Cards
