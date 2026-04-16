# 🍽 GastroControl — Documentação de Apresentação

> Uma forma bem descontraída de resumir o projeto para seus amigos

---

## 🎯 O Grande Problema

Você é dono de restaurante, food truck ou cozinha de produção? Então você conhece essa dor:

- 📌 **Achismo na produção** — Não sabe quantos pratos fazer amanhã
- 📌 **Compra no improviso** — Ligação no fornecedor sem planejamento
- 📌 **Desperdício absurdo** — Food waste que deveria estar na vida boa, tá indo pro lixo
- 📌 **Margens misteriosas** — Nem sabe se tá ganhando ou perdendo em cada prato
- 📌 **Operação fragmentada** — Informações espalhadas em planilhas, WhatsApp, notas de papel

**GastroControl resolve tudo isso.**

---

## 💡 A Ideia Genial

Um único fluxo simples mas poderoso:

```
📈 DEMANDA   →  📖 FICHA TÉCNICA   →  🧮 CÁLCULO   →  📦 ESTOQUE   →  ⚡ AÇÃO
(Vou vender)  (Receita + insumos)  (Quanto preciso) (Tenho em mão?) (Comprar/fazer)
```

**Basicamente:** Você diz o que vai vender → Sistema calcula tudo → Pronto, lista de compras gerada.

---

## 🏗️ Estrutura da Plataforma

### 🔐 **Login** (`index.html`)
- Tela de autenticação
- Dois painéis: esquerda com brand story, direita com formulário
- Fluxo visual mostrando os 5 passos da lógica

### ⊞ **Dashboard** 
*"Seu painel de controle da cozinha"*

O que você vê aqui:
- 📊 **4 KPIs no topo**: Pratos cadastrados, fichas técnicas, alertas de estoque baixo, custos de compras
- 🔄 **Flow diagram** animado mostrando o processo Demanda → Ação
- 📋 **Tabela de pratos mais produzidos** — Top 4 da semana
- 📈 **Métricas de eficiência**: Precisão do planejamento, desperdício, economia calculada

### 👨‍🍳 **Fichas Técnicas** 
*"A receita técnica de cada prato"*

Aqui você:
- ✏️ Cria/edita um prato
- 📝 Bota os **insumos** necessários com quantidades exatas
- 💰 Define os **custos**
- 📊 Define o **rendimento** (quanto rende de unidades)
- 🎯 Sistema calcula **margem** e **custo por unidade** automaticamente

Exemplo: *Risoto de Funghi = 250g tomate + 100g queijo + ... → Custo R$ 12,50 → Margem 60%*

### 📅 **Planejamento**
*"Sua bola de cristal para a semana"*

Você entra com a **demanda prevista** (quantos pratos vão vender em cada dia):

| Prato | Seg | Ter | Qua | Qui | Sex | Sab | Dom | **Total** |
|-------|-----|-----|-----|-----|-----|-----|-----|----------|
| Risoto| 15  | 20  | 18  | 25  | 30  | 45  | 35  | **188**  |
| Filé  | 20  | 18  | 22  | 28  | 35  | 50  | 40  | **213**  |

Sistema faz a mágica:
- 🧮 Multiplica cada prato pela ficha técnica
- 📦 Soma todos os insumos necessários
- 💰 Calcula custo total da semana
- ⚠️ Avisa o estoque que vem coisão

**Resumo semanal gerado automaticamente:**
- 809 pratos previstos
- 47 tipos de insumos diferentes
- R$ 6.480 custo total estimado

### 📦 **Estoque**
*"Sabe o que você tem em mão?"*

Painel de **inventário em tempo real**:

| Insumo | Status | Quanto tem | Mínimo | Última entrada | Ação |
|--------|--------|-----------|--------|----------------|------|
| Tomate | 🚨 Crítico | 2kg | 10kg | 2 dias atrás | 🔴 COMPRA URGENTE |
| Queijo | ✓ OK | 25kg | 15kg | Ontem | - |
| Filé | ⚠ Baixo | 8kg | 15kg | 3 dias | ⚠ Encomendar |

Funcionalidades:
- 🔔 Alertas de nível mínimo (vira vermelho quando baixa)
- ⏰ Alertas de validade próxima (avisa 2 dias antes)
- ➕ Entrada de novo estoque
- ➖ Saída (consumo ou ajuste)
- 📊 Histórico de movimentações

### 🛒 **Compras** *(Gerada Automaticamente)*
*"Sua lista de compras inteligente"*

Sistema gera uma lista de compras **automática** baseada em:
- O que você planejou vender (Planejamento)
- O que você tem em estoque (Estoque)
- Diferença = **O que precisa comprar**

| Item | Necessário | Em Estoque | Comprar | Urgência | Status |
|------|-----------|-----------|---------|----------|--------|
| Tomate cereja | 50kg | 2kg | **48kg** | 🔴 URGENTE | ☐ Pendente |
| Manjericão | 5kg | 0.5kg | **4.5kg** | 🔴 URGENTE | ☐ Pendente |
| Cogumelo paris | 20kg | 18kg | **2kg** | ⚠ Normal | ☐ Pendente |

Você marca como "comprado" ✓ conforme vai confirmar com fornecedor.

### 📊 **Relatórios**
*"A parte que seu contador gosta"*

4 KPIs principais:
- 📈 **96.8% Precisão** — Quão certo você foi no planejamento
- 💰 **R$ 16,40** — Custo médio por prato
- 🗑️ **4.2% Desperdício** — Quanto tá perdendo
- 📊 **63% Margem** — Ganho médio por prato

Visualizações:
- 📊 **Gráfico de barras**: Planejado vs Realizado (7 dias)
- 📈 **Gráfico de linhas**: Tendência de custo mensal (Jan-Abr)
- 🍰 **Gráfico de pizza**: Distribuição de custos por categoria
  - Carnes: 35%
  - Laticínios: 20%
  - Vegetais: 25%
  - Outros: 20%

---

## 🎮 Como o Sistema Funciona (Workflow Real)

### Cenário: Segunda-feira de planejamento

**1. Você entra no sistema (Login)**
   - Email + senha
   - Chegou no Dashboard

**2. Vai em Planejamento**
   - Olha pro calendário: É segunda-feira, semana 14-20 de Abril
   - Entra os números: "Vou vender 15 risoto segunda, 20 terça..."
   - Clica em calcular

**3. Sistema faz o cálculo automático**
   - Pega cada número (~188 risoto total)
   - Multiplica pela ficha técnica (= 188 × 250g tomate = 47kg tomate)
   - Soma tudo: 47kg tomate, 18kg queijo, 22kg cogumelo, ...
   - Total de custo: R$ 6.480

**4. Sistema cruza com o Estoque**
   - Você tem 2kg de tomate
   - Precisa de 47kg
   - Diferença: **Compra 45kg**

**5. Lista de Compras gerada automaticamente**
   - 🛒 "Compre: 45kg tomate, 0kg queijo (tem bastante), 20kg cogumelo..."

**6. Você vai em Compras**
   - Vê a lista bonitinha
   - Marca urgentes em vermelho
   - Compartilha com seu fornecedor
   - Marca como "comprado" conforme chega

**7. Atualiza Estoque**
   - Chegou tomate? ➕ Registra entrada
   - Usou tomate na cozinha? ➖ Registra saída
   - Sistema atualiza tudo em tempo real

**8. No fim da semana**
   - Vai em Relatórios
   - Vê quanto acertou na previsão (precisão)
   - Vê quanto ganhou por prato (margem)
   - Vê quanto perdeu no caminho (desperdício)
   - Analisa dados e melhora

---

## 📱 Interface & UX

### Design System
- **Paleta**: Verde natural (#2D6A4F) + Gold premium (#D4A853) + Tons quentes
- **Tipografia**: Inter (corpo) + Playfair Display (títulos elegantes)
- **Layout**: Sidebar escura + conteúdo limpo + cards intuitivos

### Responsividade
- 💻 Desktop: Full power, tudo visível
- 📱 Tablet: Ajusta grids, mantém funcionalidade
- 📱 Mobile: Tá bom pro essencial, mas é "versão de consulta"

---

## 🗺️ Mapa Completo do Sistema

```
GastroControl/
├── 🔐 Login (autenticação)
├── ⊞ Dashboard (visão geral)
├── 📅 Planejamento (entrada de demanda)
├── 👨‍🍳 Fichas Técnicas (receitas & custos)
├── 📦 Estoque (inventário)
├── 🛒 Compras (lista automática)
├── 📊 Relatórios (análises)
├── ⚙️ Configurações (futuro)
└── 📄 Documentação (Briefing + Sitemap)
```

---

## ✨ O Diferencial do GastroControl

1. **Fluxo orientado por demanda** — Tudo começa pelo que você vai vender, não pelo estoque que tem
2. **Automação inteligente** — Sistema faz os cálculos chatos pra você
3. **Integração real** — Planejamento → Cálculo → Estoque → Compras, tudo conectado
4. **Simplicidade** — Feito pra gerente de cozinha, não precisa de MBA em TI
5. **Dados acionáveis** — Não é só bonito, gera insights que você pode usar
6. **Zero desperdício conceitual** — Objetivo é reduzir desperdício material

---

## 🎯 Público-Alvo

✅ Restaurantes independentes (1-5 unidades)  
✅ Food trucks com operação estruturada  
✅ Dark kitchens (produção remota)  
✅ Cozinhas de catering/buffet  
✅ Pequenas redes (até 10 pontos)  

**Perfil ideal:** Gestor que:
- Tem operação suficientemente grande pra justificar planejamento
- Quer controlar custos e margens
- Sofre com desperdício
- Está aberto a ferramentas digitais

---

## 📈 Métricas que o Sistema da Conta

### Operacional
- Precisão de planejamento (acertou quantos % do que previu)
- Cobertura de estoque (tem tudo que precisa?)
- Tempo de reposição (quanto demora pra repor)

### Financeiro
- Custo por prato (CPP)
- Margem por prato
- Custo total semanal/mensal
- Economia vs desperdício

### Qualidade
- % de desperdício
- Taxa de alerta de estoque
- Validades que venceram vs totais

---

## 🚀 Próximos Passos (Roadmap)

1. **Integração com fornecedores** — API pra requisição automática
2. **Receitas dinâmicas** — Varia ingredientes por sazonalidade
3. **Previsão de demanda com IA** — "Com base no histórico, você vai vender X"
4. **Mobile app nativo** — Melhor UX no celular (scanner de código de barras, etc)
5. **Gestão de pessoas** — Quem fiz o quê, quando
6. **Integração POS** — Dados reais de vendas vs planejado

---

## 🎨 Estrutura de Arquivos

```
arlindo/
├── index.html                 (Login)
├── dashboard.html             (Dashboard principal)
├── planejamento.html          (Entrada de demanda)
├── pratos.html                (Fichas técnicas)
├── estoque.html               (Inventário)
├── compras.html               (Lista de compras)
├── relatorios.html            (Analytics)
├── briefing.html              (Documentação formal)
├── sitemap.html               (Mapa do site)
├── APRESENTACAO.md            (Este arquivo!)
├── css/
│   └── style.css              (Design system completo)
└── js/
    └── app.js                 (Micro-interações)
```

---

## 🎤 Para Sua Apresentação

### Opening
*"Olha, a gente identifica um problema real: ninguém na cozinha sabe quantos pratos vai precisar fazer. Resultado? Compra demais, joga comida fora, não sabe margem real. GastroControl resolve isso com um fluxo simples."*

### Demo Flow
1. Mostra o login → dashboard (overview do mês)
2. Entra em Planejamento (mostra como entra demanda)
3. Sistema calcula → mostra Compras (lista automática)
4. Mostra Estoque (com alertas coloridos)
5. Vai em Relatórios (dados que importam)

### Closing
*"Resultado final: operação estruturada, dados reais, desperdício reduzido, margens claras. Tudo em um só lugar, feito pra quem trabalha na cozinha, não pra técnico de TI."*

---

## 💬 Perguntas & Respostas Comuns

**P: "Mas e se eu quiser mudar a receita do meu prato?"**  
R: Vai em Fichas Técnicas, edita, pronto! Próximos planejamentos usam a versão nova. Histórico fica guardado.

**P: "E se o fornecedor atrasou? Como atualizo o estoque?"**  
R: Entra em Estoque, registra a entrada quando chegar. Sistema atualiza tudo.

**P: "Posso compartilhar a lista de compras?"**  
R: Sim! Sistema gera PDF ou você copia/passa por WhatsApp mesmo.

**P: "E se eu vender mais que o planejado?"**  
R: No fim da semana você registra quanto vendeu realmente. Sistema compara planejado vs realizado e te a mais. Aí você aprende pro próximo.

**P: "Quanto custa?"**  
R: [Falar seu modelo de preço aqui]

---

## 📞 Contato & Suporte

Para dúvidas sobre a apresentação:
```
Git: [repo do projeto]
Email: [seu email]
Telefone: [seu telefone]
```

---

**Última atualização:** 16 de Abril de 2026  
**Status:** Protótipo funcional completo  
**Próxima revisão:** [Data]

---

*Boa apresentação! 🚀*
