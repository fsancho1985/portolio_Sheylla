import './Expertise.css'

import { NavLink } from 'react-router-dom'

import { AiOutlineInfoCircle } from "react-icons/ai"

import Assessments from '../../components/commons/Assessments/Assessments'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Title from '../../components/commons/Title/Title'

import Servicos from '../../assets/servicos.jpg'

const Team = () => {
  return (
    <div>
      <Navbar />
      <Title title={'Perícia Judicial'}/>
      <div className="container-main-img-expertise">
        <img
          src={Servicos}
          alt="Imagem de um homem segurando uma placa escrita sucesso com ramificação para visão missão e valores"
        />
      </div>
      <div className="values-2-container">
        <h4>PERITA JUDICIAL</h4>
        <p>Avaliador de Imóveis Para Atuação em Perícias Judiciais o profissional a ser convocado como Perito deve ser reconhecimento como especialista e profundo conhecedor da sua área de atuação par realização de exames pericias abrangentes e ao mesmo tempo objetivos para resolução da questão. Atuando como Perito Judicial o profissional deve emitir seu parecer sobre o tema de forma idônea e totalmente condizente com a verdade dos fatos sem comprometimento com alguma das partes e sim com o objetivo de emitir um laudo detalhado e o mais conclusivo possível. Em uma Perícia Judicial Imobiliária o perito avaliador de imóveis deve ter sua atuação comprovada e estar devidamente credenciado no conselho federal de corretores de imóveis e no COFECI – Cadastro Nacional de Avaliadores Imobiliários.</p>
        <NavLink to="/services">
            <AiOutlineInfoCircle size="1.3rem" />
            <span>Veja Mais</span>
          </NavLink>
        <h4>O quê é?</h4>
        <p>A Perícia Judicial Imobiliária – consiste em uma avaliação do valor real de mercado do bem e ao fim do levantamento e análise de todas as informações relacionadas ao patrimônio é expedido um Laudo Pericial que dentre as informações contidas deverá estar presente o Parecer Técnico de Avaliação Mercadológica – PTAM do imóvel. O PTAM é um instrumento de avaliação já consolidado, embasado cientificamente e balizado pela NBR 14.653 da ABNT – Associação Brasileira de Normas Técnicas.</p>
        <p>Em um processo civil no qual as partes não possuem um consenso sobre o valor de mercado de um determinado bem ou patrimônio um Perito Avaliador Imobiliário pode ser convocado pelo Juiz da causa, sendo que por decisão do próprio magistrado ou por solicitação</p>
        <h4>PERÍCIA JUDICIAL IMOBILIÁRIA PODE SER INSTAURADA EM CASOS COMO:</h4>
        <ul>
          <li>Desapropriações diretas e indiretas</li>
          <li>Servidões</li>
          <li>Renovatórias e revisionais de aluguel.</li>
          <li>Indenizações</li>
          <li>Arbitramentos</li>
          <li>Possessório; Reintegração de posse, reivindicatória, usucapião</li>
          <li>Assessoria a incorporadoras, construtoras e condomínios</li>
          <li>Cautelares de antecipação de provas</li>
          <li>Laudos de vizinhança</li>
          <li>Laudos de recebimento e entrega de obra</li>
          <li>Separação, divórcio, divisão, extinção de condomínio, e outros: Nestas demandas sempre é necessário que se tenha o efetivo valor do bem para que o resultado das demandas sejam isonômicas e justas.</li>
          <li>Doação; com a finalidade de forma isonomia entre os donatários e o respectivo valor de mercado do bem</li>
          <li>Locação: Ação Revisional, Ação Renovatória, Fixação de novo aluguel</li>
        </ul>
        <h4>ASSISTENTE TÉCNICO JUDICIAL</h4>
        <p>Ainda que se tenha definido um Perito Judicial para atuar em uma causa, as partes instauradas no processo podem ainda contar com um Assistente Técnico Judicial para acompanhar a atuação do Perito Judicial elencado. Assim como o perito o Assistente Técnico Judicial deverá ser especialista renomado e habilitado para exercer a atividade e não tenha suas afirmações anuladas ou desacreditadas no processo. O Assistente Técnico Judicial poderá acompanhar o Perito na realização de uma Perícia Judicial e formular questões sobre o Laudo apresentado afim de garantir que seja realizado um exame preciso e que as informações apresentadas sejam precisas e bem especificadas.</p>
        <h4>ATUAÇÃO EM PERÍCIAS JUDICIAIS IMOBILIÁRIAS</h4>
        <p>Tanto para a convocação de um Perito Avaliador por parte do Magistrado para lhe auxiliar no julgamento da questão quanto para a contratação do especialista que atuará como Assistente Técnico Judicial para uma das partes é necessário se estar atento as credenciais do profissional e poder lhe confiar trabalho de tamanha importância. Não fique em dúvida e nos procure para lhe auxiliar com perito avaliador altamente especializado e devidamente habilitado nos órgãos competentes.</p>
      </div>
      <Assessments />
      <Footer />
    </div>
  )
}

export default Team
