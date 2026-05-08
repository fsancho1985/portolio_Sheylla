import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/layout/Header/Header'
import Footer from '../../components/layout/Footer/Footer'
import PageContainer from '../../components/ui/PageContainer/PageContainer'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import seoData from '../../data/seo'

const seo = seoData['/services']

const serviceList = [
  'Laudo de avaliação imobiliária.',
  'Valor de mercado do bem.',
  'Avaliação de imóveis residenciais, comerciais e industriais.',
  'Avaliações de terrenos e glebas urbanas.',
  'Avaliações de imóveis rurais.',
  'Avaliações de complexos industriais.',
  'Assistência técnica judicial.',
  'Vistoria imobiliária.',
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rodacki-pericias.vercel.app/services" />
      </Helmet>
      <Header />
      <PageContainer>
        <Container sx={{ py: 8 }}>
          <Typography component="h1" variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 6 }}>
            Nossos Serviços
          </Typography>

          <Paper
            variant="outlined"
            sx={{ p: 3, mb: 6, borderLeft: '4px solid #C9A84C', backgroundColor: 'background.default' }}
          >
            <Typography variant="body1" component="blockquote" sx={{ fontStyle: 'italic', m: 0 }}>
              A Perícia Judicial Imobiliária consiste em uma avaliação do valor real de mercado do bem. Ao fim do levantamento e análise de todas as informações relacionadas ao patrimônio, é expedido um Laudo Pericial que, dentre as informações contidas, deverá estar presente o Parecer Técnico de Avaliação Mercadológica — PTAM do imóvel. O PTAM é um instrumento de avaliação já consolidado, embasado cientificamente e balizado pela NBR 14.653 da ABNT — Associação Brasileira de Normas Técnicas.
            </Typography>
          </Paper>

          <SectionTitle>Processo Civil</SectionTitle>
          <Typography variant="body1" paragraph>
            Em um processo civil no qual as partes não possuem um consenso sobre o valor de mercado de um determinado bem ou patrimônio, um Perito Avaliador Imobiliário pode ser convocado pelo Juiz da causa, por decisão do próprio magistrado ou por solicitação das partes.
          </Typography>

          <SectionTitle>Lista de Serviços</SectionTitle>
          <List>
            {serviceList.map((item) => (
              <ListItem key={item} sx={{ py: 0.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'secondary.main', mr: 2, flexShrink: 0 }} />
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Container>
      </PageContainer>
      <Footer />
    </>
  )
}
