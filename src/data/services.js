import houseCard from '../assets/house-card.jpg'
import rural from '../assets/rural.jpg'
import comercial from '../assets/comercial.jpg'
import lotes from '../assets/lotes.jpg'
import office from '../assets/office.jpg'
import galpao from '../assets/galpao.jpg'

const serviceCards = [
  {
    id: 'casas',
    title: 'Casas e Apartamentos',
    description: 'Laudos de avaliação para consórcio de imóveis, leilões, processo de compra e venda, e para fins de contestação.',
    image: houseCard,
    alt: 'Imagem de uma casa residencial vista de frente.',
  },
  {
    id: 'rural',
    title: 'Imóveis Rurais',
    description: 'Avaliação detalhada de imóveis rurais com pesquisa da condição e estado do bem para definição de valor justo.',
    image: rural,
    alt: 'Imagem de propriedade rural com vegetação.',
  },
  {
    id: 'comercial',
    title: 'Imóveis Comerciais',
    description: 'Laudo de avaliação para definição de valor de aluguel ou como prova pericial em ações renovatórias e revisionais.',
    image: comercial,
    alt: 'Imagem de imóvel comercial em área urbana.',
  },
  {
    id: 'terrenos',
    title: 'Terrenos e Lotes',
    description: 'Avaliação de terrenos com análise de testada, características comparáveis e localização.',
    image: lotes,
    alt: 'Imagem de terreno urbano demarcado.',
  },
  {
    id: 'salas',
    title: 'Salas e Andares Comerciais',
    description: 'Avaliação de salas comerciais e andares para definição de valor de mercado e fins locatícios.',
    image: office,
    alt: 'Imagem de sala comercial moderna.',
  },
  {
    id: 'galpoes',
    title: 'Indústrias, Galpões e Afins',
    description: 'Avaliação de complexos industriais com análise de localização, acessibilidade e pontos de interesse próximos.',
    image: galpao,
    alt: 'Imagem de galpão industrial.',
  },
]

export default serviceCards
