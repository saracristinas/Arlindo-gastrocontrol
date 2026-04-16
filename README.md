# 🍽 GastroControl — Gestão Inteligente de Produção Gastronômica

Uma plataforma web de planejamento e controle de produção orientada por demanda para pequenos e médios negócios gastronômicos.

## 🎯 Problema Resolvido

Restaurantes, food trucks e cozinhas de produção frequentemente enfrentam:
- ❌ Compras baseadas em achismo
- ❌ Desperdício absurdo de ingredientes
- ❌ Margens de lucro desconhecidas
- ❌ Operação fragmentada em múltiplos sistemas

## ✨ Solução

Um fluxo simples e poderoso:

```
📈 DEMANDA → 📖 FICHA TÉCNICA → 🧮 CÁLCULO → 📦 ESTOQUE → ⚡ AÇÃO
```

Você diz o que vai vender → Sistema calcula tudo → Lista de compras gerada automaticamente.

## 🎨 Design & Protótipo

### 📋 Protótipo v1 do Cliente
Acesse a página **"🎨 Protótipo v1"** dentro da aplicação para visualizar o link do design original criado em Figma pelo cliente.

Dentro do app, você encontrará:
- 🔗 Link direto para o protótipo interativo
- 📝 Explicação detalhada sobre o design original
- 🔄 Comparação entre protótipo e implementação

---

## 🚀 Funcionalidades

### 📊 Dashboard
- KPIs em tempo real (pratos, fichas, estoque, compras)
- Fluxo visual do processo
- Pratos mais produzidos
- Métricas de eficiência

### 👨‍🍳 Fichas Técnicas
- Cadastro de receitas com insumos, quantidades e custos
- Cálculo automático de margem
- Preço por unidade

### 📅 Planejamento
- Entrada de demanda semanal por prato
- Cálculo automático de insumos necessários
- Resumo de custo total

### 📦 Estoque
- Inventário em tempo real
- Alertas de nível mínimo
- Alertas de validade próxima
- Registro de entradas e saídas

### 🛒 Compras
- **Gerada automaticamente** baseada em planejamento × estoque
- Itens urgentes destacados
- Check-list de conferência

### 📊 Relatórios
- Precisão de planejamento
- Custo médio por prato
- Taxa de desperdício
- Margem por prato
- Gráficos de tendência

## 🏗️ Estrutura do Projeto

```
arlindo/
├── index.html              (Login)
├── dashboard.html          (Dashboard principal)
├── planejamento.html       (Planejamento semanal)
├── pratos.html             (Fichas técnicas)
├── estoque.html            (Gerenciamento de estoque)
├── compras.html            (Lista de compras automática)
├── relatorios.html         (Análises e relatórios)
├── briefing.html           (Documentação formal)
├── sitemap.html            (Mapa do site)
├── APRESENTACAO.md         (Guia de apresentação)
├── css/
│   └── style.css           (Design system completo)
└── js/
    └── app.js              (Micro-interações)
```

## 🎨 Design System

- **Paleta de Cores**: Verde natural (#2D6A4F) + Gold premium (#D4A853)
- **Tipografia**: Inter (corpo) + Playfair Display (títulos)
- **Layout**: Sidebar + conteúdo responsivo
- **Responsividade**: Desktop, Tablet, Mobile

## 🔧 Tecnologias

- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (Vanilla ES6)
- **Hospedagem**: Pronto para Vercel, Netlify, GitHub Pages
- **Sem dependências externas**: Protótipo estático e autossuficiente

## 🚀 Deploy no Vercel

### Opção 1: Com Git (Recomendado)
1. Vá para [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione este repositório GitHub
4. Vercel detectará automaticamente que é um site estático
5. Clique em "Deploy"

### Opção 2: Arrastar e soltar
1. Baixe este repositório (ou clone)
2. Vá para [vercel.com/upload](https://vercel.com/upload)
3. Arraste a pasta do projeto
4. Pronto!

## 📋 Como Usar Localmente

1. Clone este repositório:
```bash
git clone https://github.com/saracristinas/Arlindo-gastrocontrol.git
```

2. Abra em seu navegador:
```bash
open index.html
```

Ou use um servidor local (Python):
```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`

## 👤 Login de Teste

Por enquanto o login é visual apenas (protótipo). Entre com qualquer email/senha.

## 📝 Documentação

- **[APRESENTACAO.md](APRESENTACAO.md)** — Guia informal para apresentação
- **[briefing.html](briefing.html)** — Documentação formal (dentro do app)
- **[sitemap.html](sitemap.html)** — Mapa complete do sistema (dentro do app)

## 📱 Responsividade

- ✅ Desktop: Completo
- ✅ Tablet: Adaptado
- ✅ Mobile: Versão simplificada (consulta)

## 🎯 Público-Alvo

- Restaurantes independentes
- Food trucks
- Dark kitchens
- Cozinhas de catering
- Pequenas redes

## 🗺️ Roadmap

- [ ] Integração com fornecedores (API)
- [ ] Receitas dinâmicas por sazonalidade
- [ ] Previsão de demanda com IA
- [ ] App mobile nativo
- [ ] Gestão de pessoas
- [ ] Integração com POS

## 📧 Contato

**Desenvolvedor:** [Seu Nome]  
**Email:** [seu.email@example.com]  
**GitHub:** [saracristinas](https://github.com/saracristinas)

## 📄 Licença

[Escolha uma licença: MIT, GPL, Apache, etc.]

---

**Status:** ✅ Protótipo funcional  
**Última atualização:** 16 de Abril de 2026  
**Versão:** 1.0.0

Feito com ❤️ para a indústria gastronômica
