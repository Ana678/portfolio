# Portfólio Pessoal - Ana Carolina

Portfólio profissional desenvolvido com React + TypeScript para apresentar trajetória, habilidades e projetos em destaque.

## Visão geral

- Interface bilíngue (PT/EN)
- Tema claro/escuro com persistência em localStorage
- Layout responsivo com animações usando Framer Motion
- Seções principais: Hero, Sobre, Skills, Projetos e Contato
- Cards de projetos com links para repositório, design e demonstrações

Site publicado: https://ana-carolina.dev

## Stack principal

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui (Radix UI)
- Framer Motion
- Vitest + Testing Library

## Estrutura do projeto

```text
src/
	components/       # Seções da página e componentes de interface
	contexts/         # Contexto global (idioma)
	i18n/             # Conteúdo traduzido PT/EN
	pages/            # Páginas da aplicação
	test/             # Configuração e testes
public/
	assets/img/       # Imagens dos projetos
```

## Requisitos

- Node.js 18+
- npm 9+

## Como executar localmente

```bash
# 1) Clone o repositório
git clone <URL_DO_REPOSITORIO>

# 2) Entre na pasta do projeto
cd portfolio

# 3) Instale as dependências
npm install

# 4) Rode em modo de desenvolvimento
npm run dev
```

Aplicação disponível em: http://localhost:5173

## Scripts disponíveis

- npm run dev: inicia o servidor de desenvolvimento
- npm run build: gera build de produção em dist/
- npm run build:dev: gera build no modo development
- npm run preview: serve localmente a build gerada
- npm run lint: executa o ESLint
- npm run test: executa os testes uma vez
- npm run test:watch: executa os testes em modo watch
- npm run deploy: publica o conteúdo de dist/ via gh-pages

## Deploy

Este projeto já está configurado para deploy com GitHub Pages usando os scripts:

- npm run predeploy
- npm run deploy

O campo homepage no package.json está definido para:

- https://ana-carolina.dev

## Personalização de conteúdo

- Textos e conteúdo PT/EN: src/i18n/translations.ts
- Seções da home: src/pages/Index.tsx
- Contatos e links sociais: src/components/ContactSection.tsx
- Projetos exibidos na seção de portfólio: src/i18n/translations.ts
