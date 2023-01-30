import Value from '../../assets/valores.jpg'

import './Values.css'

import Assessments from '../../components/commons/Assessments/Assessments'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Values = () => {
  return (
    <div>
      <Navbar />
      <div className='values-container'>
        <h2>Nossos Valores</h2>
        <p>
          MISSÃO, VISÃO E NOSSOS VALORES COMO METAS DO SUCESSO. NOSSOS VALORES É
          PRESTAR UM BOM SERVIÇO COM O MELHOR PREÇO E QUALIDADE PELO MELHOR
          CUSTO BENEFÍCIO À VOCÊ CLIENTE! TER UMA AMPLA OFERTA DE SOLUÇÕES PARA
          CADA CLIENTE!
        </p>
        <p>
          NOSSA MISSÃO É SER RECONHECIDO A NÍVEL NACIONAL PELO TRABALHO PRESTADO
          A COMUNIDADE. INOVAR SEMPRE COM AS MUDANÇAS DO MOMENTO!
        </p>
      </div>
      <div className="container-main-img">
        <img
          src={Value}
          alt="Imagem de um homem segurando uma placa escrita sucesso com ramificação para visão missão e valores"
        />
      </div>
      <div className="values-2-container">
        <h4>Transparência</h4>
        <p>Toda informação adquirida ou gerada sobre o seu negócio será compartilhada. A transparência na execução dos serviços e na condução dos negócios é um dos principais pilares de nossa organização.</p>
        <h4>TOMADA DE DECISÃO</h4>
        <p>Auxiliamos sua tomada de decisão não só com informações relevantes, mas atuando como parceiros no seu negócio, explorando todas as possibilidades em busca do melhor cenário possível para o seu negócio.</p>
        <h4>PROXIMIDADE COM O CLIENTE</h4>
        <p>Buscamos sempre oferecer serviços com a qualidade esperada de uma grande empresa, mas dispensando a cada cliente a mesma atenção que um pequeno escritório.</p>
        <h4>EQUIPE ACESSÍVEL</h4>
        <p>Você terá acesso a toda nossa equipe, seja qual for o tamanho de seu problema ou necessidade. Qualidade e tempestividade no atendimento estão entre nossas maiores prioridades.</p>
        <h4>COMUNICAÇÃO CLARA</h4>
        <p>Acreditamos que a melhor maneira de transformar nosso conhecimento técnico em valor para sua empresa ou seu negócio é apresentando-o em uma linguagem clara e simples, para que não haja dúvidas quanto à informação e o impacto que ela tem no seu negócio.</p>
      </div>
      <Assessments />
      <Footer />
    </div>
  )
}

export default Values
