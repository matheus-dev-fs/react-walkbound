# React Walkbound

Um projeto interativo em React que simula um ambiente 2D de um jogo. O usuário pode controlar e movimentar um personagem pelo mapa, interagir com o cenário através de colisões e explorar o ambiente. 

Este projeto foi desenvolvido com foco em aprimorar lógicas de movimentação de grade (grid movement), manipulação de eventos de teclado e renderização de componentes dinâmicos no React.

## Funcionalidades

- **Movimentação do Personagem**: Controle total utilizando as teclas `W A S D` ou as `Setas` do teclado.
- **Sistema de Colisões**: O personagem respeita os limites do mapa e possui colisão com objetos e obstáculos presentes no cenário.
- **Nome Dinâmico**: O nome do personagem é exibido e centralizado em cima do sprite de forma dinâmica.
- **Renderização Limpa**: Atualizações de posição eficientes, mantendo a estabilidade da interface gráfica.

## Melhorias Técnicas e Refatorações

A base do projeto passou por refatorações significativas para adotar padrões modernos de desenvolvimento, garantindo mais performance e melhor manutenção do código:

- **Migração para o Vite**: Em vez de utilizar o tradicional Create React App (CRA), o projeto utiliza o **Vite**, proporcionando um ambiente de desenvolvimento incrivelmente mais rápido e builds otimizados.
- **React 19 & TypeScript**: Forte tipagem estática e uso das novas versões do React, tornando o código mais seguro e previsível.
- **Estruturação de Código**: Componentização aprimorada e separação clara de responsabilidades no código-fonte.
- **Estilização Moderna**: Uso de **Styled Components** (`styled-components`) para o encapsulamento e manutenção dinâmica dos estilos ligados ao JavaScript.

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Styled Components](https://styled-components.com/)

## Como rodar o projeto localmente

Siga os passos abaixo para testar a simulação em sua própria máquina:

**1. Clone o repositório:**
```bash
git clone https://github.com/matheus-dev-fs/react-walkbound.git
```

**2. Acesse a pasta do projeto:**
```bash
cd react-walkbound
```

**3. Instale as dependências:**
```bash
npm install
# ou
yarn install
```

**4. Inicie o servidor de desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
```

**5. Acesse no navegador:**
Abra `http://localhost:5173` e divirta-se movimentando o personagem pelo mapa!