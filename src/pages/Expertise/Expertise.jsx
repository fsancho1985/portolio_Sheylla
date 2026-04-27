import { NavLink } from 'react-router-dom'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/layout/Header/Header'
import Footer from '../../components/layout/Footer/Footer'
import PageContainer from '../../components/ui/PageContainer/PageContainer'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import AppButton from '../../components/ui/AppButton/AppButton'
import seoData from '../../data/seo'

const seo = seoData['/expertise']

const cases = [
  'Desapropriações diretas e indiretas',
  'Servidões',
  'Renovatórias e revisionais de aluguel',
  'Indenizações',
  'Arbitramentos',
  'Possessório: reintegração de posse, reivindicatória, usucapião',
  'Assessoria a incorporadoras, construtoras e condomínios',
  'Cautelares de antecipação de provas',
  'Laudos de vizinhança',
  'Laudos de recebimento e entrega de obra',
  'Separação, divórcio, divisão e extinção de condomínio',
  'Doação: para isonomia entre donatários e valor de mercado do bem',
  'Locação: ação revisional, ação renovatória, fixação de novo aluguel',
]

export default function Expertise() {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rodacki-pericias.vercel.app/expertise" />
      </Helmet>
      <Header />
      <PageContainer>
        <Container sx={{ py: 8 }}>
          <Typography component="h1" variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 6 }}>
            Perícia Judicial
          </Typography>

          <SectionTitle>Perita Judicial</SectionTitle>
          <Typography variant="body1" paragraph>
            Para atuação em perícias judiciais, o profissional convocado como Perito deve ser reconhecido como especialista e profundo conhecedor de sua área de atuação, para realização de exames periciais abrangentes e objetivos. O Perito Judicial deve emitir seu parecer de forma idônea e totalmente condizente com a verdade dos fatos, sem comprometimento com alguma das partes, com o objetivo de emitir um laudo detalhado e conclusivo. Em uma Perícia Judicial Imobiliária, o perito avaliador deve ter sua atuação comprovada e estar devidamente credenciado no COFECI e no CNAI.
          </Typography>
          <Box sx={{ mb: 4 }}>
            <AppButton variant="secondary" component={NavLink} to="/services" ctaLocation="expertise_services_link">
              Veja Mais
            </AppButton>
          </Box>

          <SectionTitle>O que é?</SectionTitle>
          <Typography variant="body1" paragraph>
            A Perícia Judicial Imobiliária consiste em uma avaliação do valor real de mercado do bem. Ao fim do levantamento e análise de todas as informações relacionadas ao patrimônio, é expedido um Laudo Pericial contendo o Parecer Técnico de Avaliação Mercadológica — PTAM do imóvel, embasado pela NBR 14.653 da ABNT.
          </Typography>
          <Typography variant="body1" paragraph>
            Em um processo civil no qual as partes não possuem consenso sobre o valor de mercado de um bem, um Perito Avaliador Imobiliário pode ser convocado pelo Juiz da causa.
          </Typography>

          <SectionTitle>Casos em que a Perícia pode ser instaurada</SectionTitle>
          <List>
            {cases.map((item) => (
              <ListItem key={item} sx={{ py: 0.5, alignItems: 'flex-start' }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'secondary.main', mr: 2, mt: 0.8, flexShrink: 0 }} />
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <SectionTitle>Assistente Técnico Judicial</SectionTitle>
          <Typography variant="body1" paragraph>
            Mesmo havendo um Perito Judicial definido, as partes podem contar com um Assistente Técnico Judicial para acompanhar a atuação do perito, formular questões sobre o laudo e garantir a precisão das informações apresentadas.
          </Typography>

          <SectionTitle>Atuação em Perícias Judiciais Imobiliárias</SectionTitle>
          <Typography variant="body1" paragraph>
            Tanto para a convocação de um Perito pelo Magistrado quanto para a contratação de um Assistente Técnico Judicial, é fundamental verificar as credenciais do profissional. Entre em contato conosco para contar com um perito avaliador altamente especializado e devidamente habilitado.
          </Typography>
        </Container>
      </PageContainer>
      <Footer />
    </>
  )
}
