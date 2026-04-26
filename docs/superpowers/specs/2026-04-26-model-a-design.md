# Modelo A — Refatoração Frontend Rodacki Perícias

**Data:** 2026-04-26
**Branch:** `model-a` (criada a partir de `main` — `main` não é modificada)
**Objetivo:** Modernizar UI, arquitetura, SEO e analytics do site institucional da Rodacki Perícias, preservando identidade visual, conteúdo e estrutura de páginas originais.

---

## 1. Contexto

Site institucional de avaliação imobiliária e perícia judicial/extrajudicial. Empresa: Sheylla Barbosa Rodacki Nunes — Rodacki Perícias.

**Stack atual (base):** Create React App, React 18, React Router DOM v6, CSS puro, react-icons.

**Stack Modelo A:** React 18, Vite, Material UI v5, React Router DOM v6, Vercel Analytics, GA4, react-helmet-async.

**Contatos existentes (usados em `companyInfo.js`):**
- Email: `contato.periciasimoveis@gmail.com`
- WhatsApp: `5514998033511`
- Domínio: `rodacki-pericias.vercel.app`

---

## 2. Arquitetura

### Estrutura de diretórios

```
src/
  assets/                         ← imagens existentes (mantidas sem alteração)
  components/
    layout/
      Header/                     ← sticky, dark, logo + nav + CTA
      Navbar/                     ← links + hamburguer mobile + drawer
      Footer/                     ← copyright
    ui/
      AppButton/                  ← variantes primary (dourado) e secondary (outline)
      SectionTitle/               ← h2 padronizado com linha decorativa
      ServiceCard/                ← card de tipo de imóvel (grid Assessments)
      PageContainer/              ← wrapper com scroll tracking + semântica
      ContactCard/                ← card de canal de contato (email, WhatsApp)
    analytics/
      AnalyticsProvider/          ← carrega GA4 + Vercel Analytics, rastreia rotas
  data/
    navigation.js                 ← itens do menu
    services.js                   ← lista de serviços (ServiceCards)
    companyInfo.js                ← email, WhatsApp, nome, domínio
    seo.js                        ← title + meta description por rota
  pages/
    Home/ About/ Services/ Assessment/ Expertise/ Values/ Contact/ Thanks/
  routes/
    AppRoutes.jsx                 ← todas as rotas em um lugar
  services/
    analytics.js                  ← funções de tracking exportadas
  theme/
    theme.js                      ← ThemeProvider MUI com paleta institucional
  styles/
    global.css                    ← reset mínimo, box-sizing, scroll-behavior
```

### Princípios arquiteturais

- Cada componente tem responsabilidade única e interface clara.
- Dados de conteúdo vivem em `src/data/` — páginas não têm strings hardcoded.
- `PageContainer` aplica scroll tracking e estrutura semântica (`<main>`) automaticamente.
- `AnalyticsProvider` é o único lugar que inicializa GA4 e Vercel Analytics.

---

## 3. Tema e UI

### Paleta MUI (`theme.js`)

```js
palette: {
  primary:   { main: '#1A2744' }   // azul naval profundo
  secondary: { main: '#C9A84C' }   // dourado institucional
  background: {
    default: '#F5F6FA',            // cinza quase branco
    paper:   '#FFFFFF'
  }
}
```

### Header (sticky)

- Fundo `#1A2744`, altura ~64px.
- Esquerda: avatar circular dourado com letra "R" + texto "Rodacki Perícias" branco + subtítulo "Avaliação Imobiliária" em dourado.
- Direita: links de navegação brancos + botão "Solicitar Avaliação" com `variant="contained" color="secondary"`.
- Mobile: ícone hamburguer → Drawer lateral com links empilhados.

### Hero (Home)

- Gradiente `#1A2744 → #2d4a7a`, largura total, ~480px de altura.
- Linha de categoria em dourado: "PERÍCIA JUDICIAL IMOBILIÁRIA".
- H1 branco: "Laudos técnicos com embasamento normativo ABNT".
- Linha de credenciais em branco 75% opacidade: "NBR 14.653 · CRECI · CNAI · IBAPE".
- Dois botões: "Solicitar Avaliação" (dourado, `contained`) + "Nossos Serviços" (outline branco).

### Cards Home (3 cards)

Cards MUI com ícone MUI, título e botão "Saiba Mais". Hover: borda inferior dourada. Conteúdo: Quem Somos / Serviços / Avaliação.

### ServiceCards (Assessments)

Grid 2 colunas (mobile: 1 coluna). Cada card: imagem, título, descrição, link para `/services`. Substitui lista vertical atual.

### AppButton

- `primary`: `background #C9A84C`, texto `#1A2744`, hover escurece 10%.
- `secondary`: outline `#1A2744`, texto `#1A2744`, hover fundo `#1A2744` texto branco.

### Tipografia

- Fonte: Roboto (padrão MUI).
- `fontWeightRegular` como padrão global — sem `bold` global.
- H1 apenas uma vez por página.
- Espaçamento entre seções: `py: 8` (64px).

### Correções de português

- `Assitência` → `Assistência` (Services).
- Caixa alta excessiva na página Values: convertida para capitalização normal.
- Revisão geral de acentuação e pontuação no conteúdo copiado.

### Cookie banner DPOEasy

Mantido via script em `index.html` (equivalente ao `App.js` atual). Não alterado.

---

## 4. SEO

### Títulos e meta descriptions por rota

| Rota | Title | Meta Description |
|------|-------|-----------------|
| `/` | Rodacki Perícias · Avaliação Imobiliária | Laudos técnicos de avaliação imobiliária e perícia judicial. NBR 14.653, CRECI, CNAI. |
| `/about` | Quem Somos · Rodacki Perícias | Conheça a Rodacki Perícias — mais de 20 anos de experiência em avaliação e perícia imobiliária. |
| `/services` | Nossos Serviços · Rodacki Perícias | Laudo de avaliação, perícia judicial, assistência técnica, vistoria imobiliária e mais. |
| `/assessment` | Avaliação Imobiliária · Rodacki Perícias | O que é avaliação imobiliária, quando é necessária e como funciona o processo. |
| `/expertise` | Perícia Judicial · Rodacki Perícias | Atuação em perícias judiciais imobiliárias — desapropriações, partilhas, ações revisionais e mais. |
| `/values` | Nossos Valores · Rodacki Perícias | Transparência, proximidade com o cliente e comunicação clara como pilares da empresa. |
| `/contact` | Contato · Rodacki Perícias | Entre em contato por formulário ou WhatsApp. Atendimento rápido e especializado. |
| `/thanks` | Mensagem Enviada · Rodacki Perícias | Obrigado pelo contato. Retornaremos em breve. |

### Estrutura semântica

Todas as páginas: `<header>`, `<main>`, `<section>`, `<footer>`. Um único `<h1>` por página. Headings hierárquicos (h1 → h2 → h3).

### Open Graph

Tags `og:title`, `og:description`, `og:type=website`, `og:url` em todas as páginas via `react-helmet-async`. Sem `og:image` (nenhuma imagem institucional adequada disponível).

### JSON-LD

Schema `LocalBusiness` + `ProfessionalService` no `index.html`. Dados usados:
- `name`: "Rodacki Perícias"
- `email`: "contato.periciasimoveis@gmail.com"
- `telephone`: "+5514998033511"
- `url`: "https://rodacki-pericias.vercel.app"

Nenhum dado inventado ou inferido.

### Arquivos estáticos em `public/`

- `robots.txt`: permite crawl de tudo, `Sitemap: /sitemap.xml`.
- `sitemap.xml`: 8 rotas com `<lastmod>` e `<priority>` (Home: 1.0, demais: 0.8).

### Alt text

Todos os `alt` revisados — sem repetição de "Imagem de uma casa de frente" para imagens diferentes. Cada imagem recebe descrição específica do conteúdo exibido.

---

## 5. Analytics

### Inicialização (`AnalyticsProvider`)

- Carrega `gtag.js` com ID via `VITE_GA4_ID` (variável de ambiente).
- Inicializa `@vercel/analytics`.
- Escuta mudanças de rota via `useLocation()` e dispara `trackPageView`.

### Parâmetros globais (enviados em todos os eventos)

```js
experiment_id: "rodacki_site_ab_2026"
variant: "A"
page_path: window.location.pathname
```

### Eventos implementados

| Evento | Quando dispara | Params extras |
|--------|---------------|---------------|
| `page_view` | Toda mudança de rota | — |
| `cta_click` | Click em AppButton CTA | `cta_location` |
| `whatsapp_click` | Click no link WhatsApp | `cta_location: "contact"` |
| `form_start` | Primeiro foco em campo do formulário | — |
| `form_submit` | Submit do formulário | — |
| `form_error` | Falha de validação client-side (campo obrigatório vazio no submit) | — |
| `service_card_click` | Click em ServiceCard | `service_name` |
| `scroll_25` | Scroll 25% da página | — |
| `scroll_50` | Scroll 50% da página | — |
| `scroll_75` | Scroll 75% da página | — |

### Scroll tracking

`IntersectionObserver` em sentinelas no `PageContainer` (25%, 50%, 75% da altura). Cada profundidade disparada uma única vez por pageview — não repete ao rolar de volta.

### Configuração GA4

`.env.example` commitado com `VITE_GA4_ID=G-XXXXXXXXXX`. `.env.local` no `.gitignore`. README documenta o processo.

---

## 6. Páginas

### Home
Header + Hero (gradiente + H1 + credenciais + 2 CTAs) + 3 Cards MUI + Assessments grid + Footer.

### About
Navbar + PageContainer + conteúdo original (texto "QUEM SOMOS") com tipografia MUI. Usa `Logo.jpeg` de `src/assets/` como imagem da empresa (único arquivo de logo disponível).

### Services
Navbar + citação ABNT em bloco destacado + lista de serviços reformatada. H1: "Nossos Serviços". Seção "Processo Civil" mantida com conteúdo original.

### Assessment
Navbar + H1: "Avaliação Imobiliária" + explicação + lista de situações em grid 2 colunas (MUI List ou grid de chips).

### Expertise
Navbar + H1: "Perícia Judicial" + seções com headings h2/h3 corretos (substituindo h4 soltos). Lista de casos em MUI List. Link para Services mantido.

### Values
Navbar + H1: "Nossos Valores" + 5 cards MUI (Transparência, Tomada de Decisão, Proximidade, Equipe Acessível, Comunicação Clara). Texto em caixa normal.

### Contact
Navbar + H1: "Entre em Contato" + formulário MUI estilizado (TextField, Button) + ContactCard WhatsApp + ContactCard email. Form action mantém `formsubmit.co`. Campos com `required`.

### Thanks
Navbar + ícone de confirmação + mensagem + botão "Voltar para Home".

---

## 7. Migração

1. Criar branch `model-a` a partir de `main`.
2. Remover dependências CRA (`react-scripts`) e arquivos CRA.
3. Inicializar Vite com template React.
4. Instalar: `@mui/material @emotion/react @emotion/styled react-helmet-async @vercel/analytics react-router-dom react-icons`.
5. Recriar `index.html` Vite com DPOEasy script, JSON-LD, `robots.txt`, `sitemap.xml`.
6. Implementar `theme.js`, `global.css`, `AnalyticsProvider`, `AppRoutes.jsx`.
7. Implementar componentes layout e ui.
8. Migrar páginas uma a uma (conteúdo preservado).
9. Testar `npm run dev` e `npm run build`.
10. Atualizar `README.md`.

---

## 8. README (estrutura)

- Como rodar localmente (`npm install && npm run dev`)
- Como configurar GA4 (criar `.env.local`, adicionar `VITE_GA4_ID=G-SEU-ID`)
- Como publicar na Vercel (import repo, definir variável de ambiente)
- Estrutura de pastas
- Experimento A/B: explicação do `experiment_id` e `variant`
