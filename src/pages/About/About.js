import './About.css'

import Navbar from '../../components/Navbar/Navbar'
import Assessments from '../../components/commons/Assessments/Assessments'
import Footer from '../../components/Footer/Footer'
import Title from '../../components/commons/Title/Title'

import Agreement from '../../assets/house.jpg'
import Content from '../../components/commons/Content/Content'

const About = () => {
  return (
    <div>
      <Navbar />
      <Title title={'Quem Somos'} subtitle={'Conheça a Nossa Empresa'} />
      <div className="container-main-img">
        <img
          src={Agreement}
          alt="Mosaico com varias imagens de exemplos de negociação."
        />
      </div>
      <Content
        title={'Conheça nossa empresa'}
        content_1={
          'Nossa empresa é movida por criatividade, transparência e busca constantes soluções. A nossa equipe é formada por Peritos Judiciais com mais de 20 anos de experiência na esfera imobiliária. Atuando em território nacional, praticamente 90% dos Magistrados reconhecem que os profissionais do negócio imobiliário é de fato o Corretor de Imóveis.'
        }
        content_2={'Inovando, oferecemos o que faltava aos municípios para a avaliação dos imóveis tornando possível ainda que de forma escalonada a critério de cada gestão a atualização dos valores para fins de tributo (IPTU). Esta ferramenta atende às necessidades de agentes financeiros, Poder Judiciário (principalmente Oficiais de Justiça) e particulares em uma negociação ou intenção de venda/compra.'}
        content_3={'IMPORTANTE: Diante do que diz o Código de Defesa do Consumidor de que todo serviço prestado à sociedade se não estiver dentro das Normas da ABNT não tem valor comercial/jurídico algum.'}
      />
      <Assessments />
      <Footer />
    </div>
  )
}

export default About
