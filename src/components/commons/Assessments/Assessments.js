import './Assessment.css'

import { AiOutlineFileText } from 'react-icons/ai'

import House_card from '../../../assets/house-card.jpg'
import Rural from '../../../assets/rural.jpg'
import Comercial from '../../../assets/comercial.jpg'
import Lotes from '../../../assets/lotes.jpg'
import Office from '../../../assets/office.jpg'
import Galpao from '../../../assets/galpao.jpg'
import Avaliacao from '../../../assets/house_1.jpg'

import { NavLink } from 'react-router-dom'

const Assessments = () => {
  return (
    <div className="situations-container">
      <section className="left">
        <div className="left-title">
          <AiOutlineFileText size="2em" />
          <h4>Avaliação Imobiliária nas Seguintes Situações:</h4>
        </div>
        <div className="mini-cards">
          <div className="card-1">
            <img src={House_card} alt="Imagem de uma casa de frente." />
            <div className="content-card">
              <NavLink to="/services">CASAS E APARTAMENTOS</NavLink>
              <p>
                Laudos de avaliação para consórcio de imóveis, leilões, processo
                de compra e venda, e para fins de contestação.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="mini-cards">
          <div className="card-1">
            <img src={Rural} alt="Imagem de uma casa de frente." />
            <div className="content-card">
              <NavLink to="/services">IMÓVEIS RURAIS</NavLink>
              <p>
                A avaliação de imóveis consiste no conhecimento do imóvel e na
                pesquisa detalhada da condição/estado de um imóvel. Ou seja, um
                bom corretor deve estar ciente das características positivas e
                negativas dos imóveis. Para, então, com a avaliação, ser
                possível definir um valor justo a ser pago pelo comprador.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="mini-cards">
          <div className="card-1">
            <img src={Comercial} alt="Imagem de uma casa de frente." />
            <div className="content-card">
              <NavLink to="/services">IMÓVEIS COMERCIAIS</NavLink>
              <p>
                Você já deve saber que o Laudo de Avaliação de Imóveis tem
                muitas outras finalidades, mas em se tratando de imóveis
                comerciais, esse parecer serve tanto para definir o valor do
                aluguel como prova pericial em casos de ação renovatória ou
                revisional de contrato de locação.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="mini-cards">
          <div className="card-1">
            <img src={Lotes} alt="Imagem de uma casa de frente." />
            <div className="content-card">
              <NavLink to="/services">TERRENOS E LOTES</NavLink>
              <p>
                Terrenos semelhantes são terrenos com características parecidas.
                Atenção especial deve ser dedicada às diferenças de testadas de
                terrenos da amostra em relação ao avaliando.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="mini-cards">
          <div className="card-1">
            <img src={Office} alt="Imagem de uma casa de frente." />
            <div className="content-card">
              <NavLink to="/services">SALAS E ANDARES COMERCIAIS</NavLink>
              <p>
                A avaliação de imóveis consiste no conhecimento do imóvel e na
                pesquisa detalhada da condição/estado de um imóvel. Ou seja, um
                bom corretor deve estar ciente das características positivas e
                negativas dos imóveis. Para, então, com a avaliação, ser
                possível definir um valor justo a ser pago pelo comprador.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="mini-cards">
          <div className="card-1">
            <img src={Galpao} alt="Imagem de uma casa de frente." />
            <div className="content-card">
              <NavLink to="/services">INDÚSTRIAS, GALPÕES E AFINS</NavLink>
              <p>
                Um dos fatores que mais influenciam no preço de um imóvel é a
                localidade na qual ele se encontra. Para que um avaliador
                consiga realizar a avaliação de imóveis é preciso que aconteça
                uma busca pelos principais pontos de interesse que estão
                localizados próximo ao imóvel.
              </p>
            </div>
          </div>
        </div>
        <hr />
      </section>
      <section className="right">
        <div className="right-title">
          <AiOutlineFileText size="2em" />
          <h4>Avaliação Técnica</h4>
        </div>
        <div className="right-content">
          <div className="assessment-img">
            <img src={Avaliacao} alt="" />
          </div>
          <h5>Elaboração de Laudo</h5>
          <span>Profissionais</span>
          <p>
            Como são realizadas as avaliações imobiliárias? É a determinação
            técnica do valor de um imóvel ou de um direito sobre ele, empregada
            em uma variedade de situações, dentro e fora do âmbito judicial,
            tais como, inventários, dissolução de sociedade, operações de compra
            e venda, aluguel, cobrança de tributos, seguros, hipotecas, estudos
            de dinâmica imobiliária e outros. É a precisão e fundamentação
            técnica do valor de mercado dos bens ou de direitos sobre eles, o
            que denominados intangíveis. Esta definição é feita dentro de
            procedimentos técnicos e normativos, para a determinação das
            análises de valor. A Rodacki Perícias tem como princípio a
            elaboração de laudos técnicos de avaliação, sendo ela responsável
            pela atribuição dos valores a serem buscados. Compete aos corretores
            de imóveis inscritos no CNAI, a formação destes números através da
            elaboração da avaliação seguindo as diretrizes indicadas pela Norma
            Brasileira de Avaliações, a NBR 14.653 da ABNT
          </p>
          <NavLink to="/assessment">
            <AiOutlineFileText size="1em" />
            <span>Continue Lendo</span>
          </NavLink>
        </div>
      </section>
    </div>
  )
}

export default Assessments
