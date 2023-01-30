import React from 'react'
import Assessments from '../../components/commons/Assessments/Assessments'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Title from '../../components/commons/Title/Title'

import Avaliacao from '../../assets/house_1.jpg'

import Content2 from '../../components/commons/Content/Content2'

const Assessment = () => {
  return (
    <div>
      <Navbar />
      <Title title={'Avaliação Imobiliária'} />
      <div className="container-main-img">
        <img src={Avaliacao} alt="Imagem de uma casa e algumas notas." />
      </div>
      <Content2
        title={'O quê é?'}
        content={
          'O que é avaliação imobiliária? A avaliação imobiliária é um relatório que consiste em conhecimentos técnicos e científicos para avaliar bens. Com embasamento normativo e seguindo uma série de procedimentos com o objetivo de gerar um laudo. Sendo assim, é um relatório detalhado conforme a finalidade da avaliação para determinar o valor de uma propriedade. O processo de avaliação deve ser realizado por um corretor de imóveis, devidamente registrado no CRECI e no CNAI (conselho nacional de avaliadores de imóveis) preferencialmente associado do Instituto Brasileiro de Avaliações e Perícias de Engenharia (IBAPE) e com curso de especialização na área. Os procedimentos envolvidos são: a vistoria do imóvel e de seu entorno, uma pesquisa completa das propriedades semelhantes/comparáveis da região onde se localiza o bem e cálculos de avaliações precisos, de acordo com a metodologia e as normas requeridas.'
        }
        title_2={'Quando é necessário fazer uma avaliação imobiliária?'}
        subtitle={'As avaliações imobiliárias são necessárias nas seguintes situações:'}
        li_1={'Partilhas (sucessão, divórcio, herança)'}
        li_2={'Operação comercial com exigência de garantias reais'}
        li_3={'Consórcio de imóveis com alienação fiduciária'}
        li_4={'Compra e venda de imóveis'}
        li_5={'Atualização do valor de mercado dos ativos de uma empresa'}
        li_6={'Renovação de aluguéis'}
        li_7={'Ações judiciais que envolvem discussão sobre o valor de um bem'}
        li_8={'Processos judiciais que exijam garantias reais'}
        li_9={'Dissoluções societárias'}
        li_10={'Leilão de imóveis'}
        li_11={'Desapropriação de imóveis'}
        li_12={'Contratação de seguro patrimonial'}
        li_13={'Entre outros'}
      />
      <Assessments />
      <Footer />
    </div>
  )
}

export default Assessment
