import Navbar from '../../components/Navbar/Navbar'
import Assessments from '../../components/commons/Assessments/Assessments'

import Agreement from '../../assets/agreement.jpg'

import './About.css'
import Footer from '../../components/Footer/Footer'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="title">
        <h2>Quem Somos</h2>
        <p>Conheça nossa empresa</p>
      </div>
      <div className="container-main-img">
        <img src={Agreement} alt="Mosaico com varias imagens de exemplos de negociação." />
      </div>
      <section className="content">
        <h3>Conheça a nossa Empresa</h3>
        <p>
          Nossa empresa é movida por criatividade, transparência e busca
          constantes soluções. A nossa equipe é formada por Peritos Judiciais
          com mais de 20 anos de experiência na esfera imobiliária. Atuando em
          território nacional, praticamente 90% dos Magistrados reconhecem que
          os profissionais do negócio imobiliário é de fato o Corretor de
          Imóveis.
        </p>
        <p>
          Inovando, oferecemos o que faltava aos municípios para a avaliação dos
          imóveis tornando possível ainda que de forma escalonada a critério de
          cada gestão a atualização dos valores para fins de tributo (IPTU).
          Esta ferramenta atende às necessidades de agentes financeiros, Poder
          Judiciário (principalmente Oficiais de Justiça) e particulares em
          uma negociação ou intenção de venda/compra.
        </p>
        <p>
          <strong>
            <span>IMPORTANTE</span>
          </strong>
          : Diante do que diz o Código de Defesa do Consumidor de que todo
          serviço prestado à sociedade se não estiver dentro das Normas da ABNT
          não tem valor comercial/jurídico algum.
        </p>
      </section>
      <Assessments />
      <Footer />
    </div>
  )
}

export default About
