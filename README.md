# JusCash Case

> Um sistema de automação para gerenciamento e processamento de publicações extraídas do Diário da Justiça
Eletrônico (DJE) de São Paulo. O objetivo é criar uma solução eficiente, integrando backend, API e frontend para fornecer uma plataforma
que facilita a revisão, análise e acompanhamento de processos judiciais.

---

## 🗂 Estrutura do Projeto

```bash
.
├── backend/          # Código do servidor (API, banco de dados, autenticação, etc.)
├── frontend/         # Código do cliente (UI com React, Next.js, etc.)
└── README.md         # Este arquivo
```

## 🚀 Tecnologias Utilizadas


Frontend
<React + Next.js>

<TailwindCSS / Shadcn>

<Axios / React Router>

Backend

<Node.js / Python>

<Express>

<Prisma / SQLAlchemy>

<PostgreSQL>

## ⚙️ Requisitos
- [X] Repositório no GitHUb
- [ ] Deploy
- [ ] Manual em PDF
- [X] Documentação de rota da API (Swagger)
- [ ] Estrutura do banco de dados
- [X] Fluxo da automação
- [ ] Dependencias e instruções de configuracões

## 📌 Funcionalidades
- [X] Automação Web Scraping de publicações DJE
- [X] Estrutura de Banco de Dados para publicaço
- [x] API para gerenciamento de dados das publicações
- [x] API de autenticação de usuário
- [x] API para cadastrar usuário
- [X] Tela de Login e Autenticação
- [ ] Tela de Cadastro
- [X] Kanban de Gerenciamento das publicações
- [X] Cards de Publicações no Kanban
- [X] Modal de detalhes das publicações
- [x] Sistema de busca por filtros
- [X] NavBar 


## 📦 Instalação
1. Clone o repositório
```bash
git clone https://github.com/GabrieleGVieira/juscash-case
cd juscash-case
```

## 🐳 Backend
```bash
cd backend
cd api
npm install
docker-compose up --build
```
## 🔧 Frontend
```bash
cd frontend
npm install
npm run dev
```

## Scraping
```bash
cd backend
cd scraper-python
pip install -r requirements.txt
python main.py
```

Certifique-se de configurar as variáveis de ambiente corretamente
```bash
DATABASE_URL=
DATABASE_PYTHON_URL= é o mesmo do DATABASE_URL
JWT_SECRET=
```
## Documentação

#### Fluxo Web Scraping

Detalhes do fluxo do web scraping podem ser encontrados aqui -> [Fluxo do SCraper Python](https://github.com/GabrieleGVieira/juscash-case/blob/master/docs/fluxo-scraper-python.drawio.pdf)

#### Swagger
Após rodar o backend, é possivel acessar documentação da API atravé do swagger contido na rota: http://localhost:3001/api-docs/
