import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#ffffff',
  cinzaClaro: '#f7f6f6',
  cinza: '#888888',
  chumbo: '#1f1f1f',
  preto: '#000000',
  detalhe: '#5ac205',
  detalheClaro: '#aaeb8b'
}

export const texto = {
  detalhe: '16px',
  subtitulo: '20px',
  chamada: '13px',
  titulo: '28px'
}

export const breakpoints = {
  tablet: '1100px',
  mobile: '760px'
}

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Clarity City", sans-serif;
  }

    body {
    background-color: ${cores.preto};
    color: ${cores.branco};
    font-size: 14px;
  }

  html {
    scroll-behavior: smooth;
  }
`
