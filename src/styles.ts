import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#ffffff',
  cinzaClaro: '#f7f6f6',
  cinza: '#c5c3c3',
  chumbo: '#848484',
  preto: '#0b0b0b',
  detalhe: '#24c205',
  detalheClaro: '#aaeb8b'
}

export const texto = {
  detalhe: '12px',
  subtitulo: '16px',
  chamada: '18px',
  titulo: '36px'
}

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
