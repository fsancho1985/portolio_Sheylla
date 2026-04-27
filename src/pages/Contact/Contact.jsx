import { useState, useRef } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/layout/Header/Header'
import Footer from '../../components/layout/Footer/Footer'
import PageContainer from '../../components/ui/PageContainer/PageContainer'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import AppButton from '../../components/ui/AppButton/AppButton'
import ContactCard from '../../components/ui/ContactCard/ContactCard'
import companyInfo from '../../data/companyInfo'
import seoData from '../../data/seo'
import { trackFormStart, trackFormSubmit, trackFormError, trackWhatsappClick } from '../../services/analytics'

const seo = seoData['/contact']

export default function Contact() {
  const [touched, setTouched] = useState(false)
  const formRef = useRef(null)

  function handleFocus() {
    if (!touched) {
      setTouched(true)
      trackFormStart()
    }
  }

  function handleSubmit(e) {
    const form = formRef.current
    const name = form.querySelector('[name="name"]').value.trim()
    const email = form.querySelector('[name="email"]').value.trim()
    const message = form.querySelector('[name="message"]').value.trim()
    if (!name || !email || !message) {
      e.preventDefault()
      trackFormError()
      return
    }
    trackFormSubmit()
  }

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rodacki-pericias.vercel.app/contact" />
      </Helmet>
      <Header />
      <PageContainer>
        <Container sx={{ py: 8 }}>
          <Typography component="h1" variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 6 }}>
            Entre em Contato
          </Typography>
          <Grid container spacing={6}>
            <Grid item xs={12} md={7}>
              <SectionTitle>Pelo formulário</SectionTitle>
              <Box
                ref={formRef}
                component="form"
                action={companyInfo.formAction}
                method="POST"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
              >
                <input type="hidden" name="_next" value={`${companyInfo.siteUrl}/thanks`} />
                <TextField
                  name="name"
                  label="Nome"
                  required
                  fullWidth
                  onFocus={handleFocus}
                />
                <TextField
                  name="subject"
                  label="Assunto"
                  fullWidth
                  onFocus={handleFocus}
                />
                <TextField
                  name="email"
                  label="Seu e-mail"
                  type="email"
                  required
                  fullWidth
                  onFocus={handleFocus}
                />
                <TextField
                  name="message"
                  label="Deixe uma mensagem"
                  multiline
                  rows={6}
                  required
                  fullWidth
                  onFocus={handleFocus}
                />
                <AppButton variant="primary" type="submit" ctaLocation="contact_form" sx={{ alignSelf: 'flex-start' }}>
                  Enviar
                </AppButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <SectionTitle>Outros canais</SectionTitle>
              <ContactCard
                icon={<AiOutlineWhatsApp />}
                label="WhatsApp"
                value="(14) 99803-3511"
                href={companyInfo.whatsappUrl}
                onClick={trackWhatsappClick}
              />
              <ContactCard
                icon={<AiOutlineMail />}
                label="E-mail"
                value={companyInfo.email}
                href={`mailto:${companyInfo.email}`}
              />
            </Grid>
          </Grid>
        </Container>
      </PageContainer>
      <Footer />
    </>
  )
}
