import { NavLink } from 'react-router-dom'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/layout/Header/Header'
import Footer from '../../components/layout/Footer/Footer'
import PageContainer from '../../components/ui/PageContainer/PageContainer'
import AppButton from '../../components/ui/AppButton/AppButton'
import seoData from '../../data/seo'

const seo = seoData['/thanks']

export default function Thanks() {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rodacki-pericias.vercel.app/thanks" />
      </Helmet>
      <Header />
      <PageContainer>
        <Container sx={{ py: 12, textAlign: 'center' }}>
          <Box sx={{ color: 'secondary.main', fontSize: '4rem', lineHeight: 1, mb: 3 }}>
            <AiOutlineCheckCircle />
          </Box>
          <Typography component="h1" variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 2 }}>
            Agradecemos seu contato
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Em breve retornaremos seu contato.
          </Typography>
          <AppButton variant="primary" component={NavLink} to="/" ctaLocation="thanks_home">
            Voltar para Home
          </AppButton>
        </Container>
      </PageContainer>
      <Footer />
    </>
  )
}
