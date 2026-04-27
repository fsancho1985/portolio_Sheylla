import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/layout/Header/Header'
import Footer from '../../components/layout/Footer/Footer'
import PageContainer from '../../components/ui/PageContainer/PageContainer'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import seoData from '../../data/seo'
import logoImg from '../../assets/Logo.jpeg'

const seo = seoData['/about']

export default function About() {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rodacki-pericias.vercel.app/about" />
      </Helmet>
      <Header />
      <PageContainer>
        <Container sx={{ py: 8 }}>
          <Typography component="h1" variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>
            Quem Somos
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6 }}>
            Conheça a Nossa Empresa
          </Typography>

          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Box
              component="img"
              src={logoImg}
              alt="Logotipo da Rodacki Perícias"
              sx={{ maxWidth: 320, width: '100%', mx: 'auto', borderRadius: 2 }}
            />
          </Box>

          <SectionTitle>Conheça nossa empresa</SectionTitle>

          <Typography variant="body1" paragraph>
            Nossa empresa é movida por criatividade, transparência e busca constante de soluções. A nossa equipe é formada por Peritos Judiciais com mais de 20 anos de experiência na esfera imobiliária. Atuando em território nacional, praticamente 90% dos Magistrados reconhecem que os profissionais do negócio imobiliário são de fato os Corretores de Imóveis.
          </Typography>
          <Typography variant="body1" paragraph>
            Inovando, oferecemos o que faltava aos municípios para a avaliação dos imóveis, tornando possível ainda que de forma escalonada — a critério de cada gestão — a atualização dos valores para fins de tributo (IPTU). Esta ferramenta atende às necessidades de agentes financeiros, Poder Judiciário (principalmente Oficiais de Justiça) e particulares em uma negociação ou intenção de venda/compra.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontWeight: 500 }}>
            Importante: Diante do que diz o Código de Defesa do Consumidor, todo serviço prestado à sociedade que não estiver dentro das Normas da ABNT não tem valor comercial ou jurídico.
          </Typography>
        </Container>
      </PageContainer>
      <Footer />
    </>
  )
}
