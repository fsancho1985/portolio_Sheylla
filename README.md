# Rodacki Perícias — Model A

Site institucional da Rodacki Perícias. Este branch (`model-a`) é uma refatoração completa com Vite, Material UI v5, SEO e analytics.

## Tecnologias

- React 18 + Vite
- Material UI v5
- react-helmet-async (SEO)
- @vercel/analytics + GA4
- react-router-dom v6

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

## Configurar GA4

1. Crie o arquivo `.env.local` na raiz do projeto.
2. Adicione:
   ```
   VITE_GA4_ID=G-SEU-ID-AQUI
   ```
3. Reinicie o servidor de desenvolvimento.

> O arquivo `.env.example` contém o template. `.env.local` está no `.gitignore` e nunca deve ser commitado.

## Como publicar na Vercel

1. Importe o repositório na Vercel.
2. Defina a variável de ambiente `VITE_GA4_ID` com seu ID do GA4.
3. Faça o deploy — a Vercel detecta Vite automaticamente.

## Estrutura de pastas

```
src/
  assets/           imagens
  components/
    analytics/      AnalyticsProvider
    layout/         Header, Navbar, Footer
    ui/             AppButton, SectionTitle, ServiceCard, PageContainer, ContactCard
  data/             companyInfo, navigation, services, seo
  pages/            Home, About, Services, Assessment, Expertise, Values, Contact, Thanks
  routes/           AppRoutes.jsx
  services/         analytics.js
  styles/           global.css
  theme/            theme.js
```

## Experimento A/B

Todos os eventos GA4 incluem os parâmetros:

```json
{
  "experiment_id": "rodacki_site_ab_2026",
  "variant": "A"
}
```

Isso permite comparar variantes de design no GA4 usando segmentos por `experiment_id` e `variant`.
