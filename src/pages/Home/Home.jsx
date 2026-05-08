import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import { Helmet } from 'react-helmet-async'
import { AiOutlineUser, AiOutlineSetting, AiOutlineAreaChart } from 'react-icons/ai'
import Header from '../../components/layout/Header/Header'
import Footer from '../../components/layout/Footer/Footer'
import PageContainer from '../../components/ui/PageContainer/PageContainer'
import AppButton from '../../components/ui/AppButton/AppButton'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import ServiceCard from '../../components/ui/ServiceCard/ServiceCard'
import serviceCards from '../../data/services'
import seoData from '../../data/seo'

const homeCards = [
  { icon: <AiOutlineUser size="2rem" />, title: 'Quem Somos', path: '/about' },
  { icon: <AiOutlineSetting size="2rem" />, title: 'Serviços', path: '/services' },
  { icon: <AiOutlineAreaChart size="2rem" />, title: 'Avaliação', path: '/assessment' },
]

const seo = seoData['/']

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rodacki-pericias.vercel.app/" />
      </Helmet>
      <Header />
      <PageContainer>
        {/* Hero */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #1A2744 0%, #2d4a7a 100%)',
            minHeight: 480,
            display: 'flex',
            alignItems: 'center',
            px: { xs: 2, md: 8 },
          }}
        >
          <Box sx={{ maxWidth: 700 }}>
            <Typography variant="overline" sx={{ color: '#C9A84C', letterSpacing: 3, fontWeight: 600 }}>
              Perícia Judicial Imobiliária
            </Typography>
            <Typography component="h1" variant="h3" sx={{ color: '#fff', fontWeight: 700, mt: 1, mb: 1.5, lineHeight: 1.2 }}>
              Laudos técnicos com embasamento normativo ABNT
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.75)', mb: 4 }}>
              NBR 14.653 · CRECI · CNAI · IBAPE
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <AppButton variant="primary" component={NavLink} to="/contact" ctaLocation="hero">
                Solicitar Avaliação
              </AppButton>
              <AppButton
                variant="secondary"
                component={NavLink}
                to="/services"
                sx={{ borderColor: '#fff', color: '#fff', '&:hover': { backgroundColor: '#fff', color: '#1A2744' } }}
                ctaLocation="hero_services"
              >
                Nossos Serviços
              </AppButton>
            </Box>
          </Box>
        </Box>

        {/* 3 Cards */}
        <Container sx={{ py: 8 }}>
          <Grid container spacing={3}>
            {homeCards.map((card) => (
              <Grid item xs={12} md={4} key={card.path}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border-bottom 0.2s',
                    '&:hover': { borderBottom: '4px solid #C9A84C' },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 4 }}>
                    <Box sx={{ color: 'secondary.main', mb: 2 }}>{card.icon}</Box>
                    <Typography variant="h6" component="h2" sx={{ color: 'primary.main', fontWeight: 600 }}>
                      {card.title}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                    <AppButton variant="secondary" component={NavLink} to={card.path} ctaLocation={`home_card_${card.path.replace('/', '')}`}>
                      Saiba Mais
                    </AppButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Service Cards Grid */}
        <Box sx={{ backgroundColor: 'background.default', py: 8 }}>
          <Container>
            <SectionTitle>Avaliação Imobiliária nas Seguintes Situações</SectionTitle>
            <Grid container spacing={3}>
              {serviceCards.map((card) => (
                <Grid item xs={12} sm={6} key={card.id}>
                  <ServiceCard
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    alt={card.alt}
                    serviceId={card.id}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </PageContainer>
      <Footer />
    </>
  )
}
