import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/layout/Header/Header'
import Footer from '../../components/layout/Footer/Footer'
import PageContainer from '../../components/ui/PageContainer/PageContainer'
import seoData from '../../data/seo'

const seo = seoData['/values']

const values = [
  {
    title: 'Transparência',
    body: 'Toda informação adquirida ou gerada sobre o seu negócio será compartilhada. A transparência na execução dos serviços e na condução dos negócios é um dos principais pilares de nossa organização.',
  },
  {
    title: 'Tomada de Decisão',
    body: 'Auxiliamos sua tomada de decisão não só com informações relevantes, mas atuando como parceiros no seu negócio, explorando todas as possibilidades em busca do melhor cenário.',
  },
  {
    title: 'Proximidade com o Cliente',
    body: 'Buscamos sempre oferecer serviços com a qualidade esperada de uma grande empresa, dispensando a cada cliente a mesma atenção de um pequeno escritório.',
  },
  {
    title: 'Equipe Acessível',
    body: 'Você terá acesso a toda nossa equipe, seja qual for o tamanho de seu problema ou necessidade. Qualidade e tempestividade no atendimento estão entre nossas maiores prioridades.',
  },
  {
    title: 'Comunicação Clara',
    body: 'Acreditamos que a melhor maneira de transformar nosso conhecimento técnico em valor é apresentá-lo em linguagem clara e simples, sem dúvidas quanto à informação e seu impacto.',
  },
]

export default function Values() {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rodacki-pericias.vercel.app/values" />
      </Helmet>
      <Header />
      <PageContainer>
        <Container sx={{ py: 8 }}>
          <Typography component="h1" variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 2 }}>
            Nossos Valores
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6, maxWidth: 700 }}>
            Missão, visão e valores como metas do sucesso. Nosso compromisso é prestar um serviço de qualidade com o melhor custo-benefício para você, cliente, com ampla oferta de soluções personalizadas.
          </Typography>
          <Grid container spacing={3}>
            {values.map((v) => (
              <Grid item xs={12} sm={6} key={v.title}>
                <Card
                  sx={{
                    height: '100%',
                    borderTop: '4px solid #C9A84C',
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" component="h2" sx={{ color: 'primary.main', fontWeight: 600, mb: 1 }}>
                      {v.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {v.body}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </PageContainer>
      <Footer />
    </>
  )
}
