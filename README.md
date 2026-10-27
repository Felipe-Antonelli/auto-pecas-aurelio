# Auto Peças e Mecânica Aurélio — Site institucional

Site de apresentação (landing page) da **Auto Peças e Mecânica Aurélio**, auto peças e oficina mecânica em Campo Mourão – PR.

🔗 **Site no ar:** https://auto-pecas-aurelio.vercel.app

## Sobre o projeto

Layout inicial de uma página única, com foco em levar o visitante ao contato pelo WhatsApp. A estrutura foi inspirada em sites de auto centers e reúne:

- **Abertura (hero)** com a nota no Google, chamada principal e botões de agendamento
- **Serviços**, divididos em *Oficina mecânica* e *Auto peças*
- **Sobre nós**
- **Por que nos escolher** (diferenciais)
- **Tecnologia / diagnóstico**
- **Avaliações de clientes**
- **Dúvidas frequentes (FAQ)**, em formato de sanfona
- **Onde estamos**: endereço, horário, telefones, redes sociais e mapa do Google
- **Botão flutuante do WhatsApp**

O layout é responsivo: no celular o menu vira um botão e as seções ficam em uma coluna.

## Paleta de cores

| Nome          | Hex       | Uso principal                     |
|---------------|-----------|-----------------------------------|
| Golden Sand   | `#e8c766` | Destaques e textos de apoio       |
| Amber Blaze   | `#e8af2e` | Botões principais e ícones        |
| Azure Crest   | `#3462ac` | Botões secundários e marcadores   |
| Deep Midnight | `#223164` | Cartões e fundos escuros          |
| Shadow Abyss  | `#0e2043` | Fundo do topo, seções escuras     |

As cores ficam como variáveis no início de [`styles.css`](styles.css). Para trocar uma cor no site todo, basta mudar o valor ali.

Fonte: [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts).

## Estrutura

```
├── index.html   # conteúdo e estrutura da página
├── styles.css   # visual, cores e responsividade
├── script.js    # menu fixo ao rolar, menu do celular e ano do rodapé
└── README.md
```

Não há dependências nem etapa de build: é HTML, CSS e JavaScript puro.

## Como rodar localmente

Dentro da pasta do projeto:

```bash
python3 -m http.server 5500
```

Depois abra http://localhost:5500 no navegador.

## Deploy

O site está hospedado na [Vercel](https://vercel.com) como site estático (projeto `auto-pecas-aurelio`).

## Pendências

- [ ] **Imagens:** todas as fotos são espaços reservados (blocos listrados com uma etiqueta amarela dizendo qual foto vai ali). Basta trocar cada `<div class="placeholder" data-label="...">` por uma `<img>`.
- [ ] **Logo:** hoje é um "A" dourado provisório.
- [ ] **Depoimentos:** os textos são de exemplo; trocar por avaliações reais do Google.
- [ ] **Facebook:** o link ainda aponta para a página inicial do Facebook.

## Contato da empresa

- Endereço: Av. Cap. Índio Bandeira, 2121 – Centro, Campo Mourão – PR
- Atendimento: segunda a sexta, 08h às 18h
- Telefone: (44) 3525-2121
- WhatsApp: (44) 99760-7070
- Plantão (Aurélio): (44) 99931-9537
- Instagram: [@autopecas.aurelioo](https://www.instagram.com/autopecas.aurelioo/)
