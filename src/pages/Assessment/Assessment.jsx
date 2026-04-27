import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/layout/Header/Header'
import Footer from '../../components/layout/Footer/Footer'
import PageContainer from '../../components/ui/PageContainer/PageContainer'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import seoData from '../../data/seo'

const seo = seoData['/assessment']

const situations = [
  'Partilhas (sucessão, divórcio, herança)',
  'Operação comercial com exigência de garantias reais',
  'Consórcio de imóveis com alienação fiduciária',
  'Compra e venda de imóveis',
  'Atualização do valor de mercado dos ativos de uma empresa',
  'Renovação de aluguéis',
  'Ações judiciais sobre o valor de um bem',
  'Processos judiciais que exijam garantias reais',
  'Dissoluções societárias',
  'Leilão de imóveis',
  'Desapropriação de imóveis',
  'Contratação de seguro patrimonial',
  'Entre outros',
]

export default function Assessment() {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rodacki-pericias.vercel.app/assessment" />
      </Helmet>
      <Header />
      <PageContainer>
        <Container sx={{ py: 8 }}>
          <Typography component="h1" variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 6 }}>
            Avaliação Imobiliária
          </Typography>

          <SectionTitle>O que é?</SectionTitle>
          <Typography variant="body1" paragraph>
            A avaliação imobiliária é um relatório que aplica conhecimentos técnicos e científicos para avaliar bens. Com embasamento normativo e seguindo uma série de procedimentos, tem o objetivo de gerar um laudo — um relatório detalhado conforme a finalidade da avaliação — para determinar o valor de uma propriedade.
          </Typography>
          <Typography variant="body1" paragraph>
            O processo deve ser realizado por um corretor de imóveis devidamente registrado no CRECI e no CNAI (Conselho Nacional de Avaliadores de Imóveis), preferencialmente associado ao IBAPE e com curso de especialização na área. Os procedimentos envolvidos são: vistoria do imóvel e de seu entorno, pesquisa completa de propriedades comparáveis da região e cálculos de avaliação precisos, de acordo com a metodologia e as normas requeridas.
          </Typography>

          <SectionTitle>Quando é necessária?</SectionTitle>
          <Typography variant="body1" sx={{ mb: 3 }}>
            As avaliações imobiliárias são necessárias nas seguintes situações:
          </Typography>
          <Grid container spacing={1.5}>
            {situations.map((item) => (
              <Grid item key={item}>
                <Chip
                  label={item}
                  variant="outlined"
                  sx={{ borderColor: 'secondary.main', color: 'primary.main' }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </PageContainer>
      <Footer />
    </>
  )
}
