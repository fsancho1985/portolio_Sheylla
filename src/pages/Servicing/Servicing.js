import React from 'react'
import Assessments from '../../components/commons/Assessments/Assessments'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Servicing = () => {
  return (
    <div>
      <Navbar />
      <h2>Serviços</h2>
      <p>Avaliação do seu imóvel</p>
      <div className="img-container">
        <img src="" alt="" />
      </div>
      <h3>Processo Civil</h3>
      <p>
        Em um processo civil no qual as partes não possuem um consenso sobre o
        valor de mercado de um determinado bem ou patrimônio um Perito Avaliador
        Imobiliário pode ser convocado pelo Juiz da causa, sendo que por decisão
        do próprio magistrado ou por solicitação.
      </p>
      <h3>Nosso Serviços</h3>
      <ul>
        <h4>Veja nossos Serviços</h4>
        <li>Laudo de avaliação imobiliária.</li>
        <li>Valor de mercado do bem.</li>
        <li>Avaliação de imóveis residenciais, comerciais e industriais.</li>
        <li>Avaliações de terrenos e glebas urbanas.</li>
        <li>Avaliações de imóveis rurais.</li>
        <li>Avaliações de complexos industriais.</li>
        <li>Assitência técnica judicial.</li>
        <li>Vistoria imobiliária.</li>
      </ul>
      <Assessments />
      <Footer />
    </div>
  )
}

export default Servicing
