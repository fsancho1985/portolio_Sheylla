
import Assessments from '../../components/commons/Assessments/Assessments'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

import './Servicing.css'

import Servicos from '../../assets/servicos.jpg'
import Title from '../../components/commons/Title/Title'
import Content from '../../components/commons/Content/Content'

const Servicing = () => {
  return (
    <div>
      <Navbar />
      <Title title={'Nossos Serviços'} subtitle={'Avaliação do seu Imóvel'}/>
      <div className="container-main-img">
        <img
          src={Servicos}
          alt="Imagem de um contrato assinado com um chaveiro em forma de casa."
        />
        <q>
          A Perícia Judicial Imobiliária – consiste em uma avaliação do valor
          real de mercado do bem e ao fim do levantamento e análise de todas as
          informações relacionadas ao patrimônio é expedido um Laudo Pericial
          que dentre as informações contidas deverá estar presente o Parecer
          Técnico de Avaliação Mercadológica – PTAM do imóvel. O PTAM é um
          instrumento de avaliação já consolidado, embasado cientificamente e
          balizado pela NBR 14.653 da ABNT – Associação Brasileira de Normas
          Técnicas.
        </q>
      </div>
      <section className="content-services">
        <h3>Processo Civil</h3>
        <p>
          Em um processo civil no qual as partes não possuem um consenso sobre o
          valor de mercado de um determinado bem ou patrimônio um Perito
          Avaliador Imobiliário pode ser convocado pelo Juiz da causa, sendo que
          por decisão do próprio magistrado ou por solicitação.
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
      </section>
      <Content />
      <Assessments />
      <Footer />
    </div>
  )
}

export default Servicing
