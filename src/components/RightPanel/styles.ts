import styled from 'styled-components'

import { breakpoints, cores, texto } from '../../styles'

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  position: sticky;
  top: 0;
  align-self: start;
  height: 100vh;
  height: 100dvh;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  /* @media (max-width: ${breakpoints.tablet}) {
    display: none;
  } */
`

export const Block = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${cores.chumbo};

  h2 {
    font-size: ${texto.chamada};
    color: ${cores.branco};
    font-weight: 300;
  }

  h3 {
    font-weight: 600;
    font-size: ${texto.chamada};
  }

  p {
    color: ${cores.cinza};
    font-size: ${texto.chamada};

    strong {
      color: ${cores.branco};
      font-weight: 600;
    }
  }
`

export const TextLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  align-self: flex-start;
  font-size: ${texto.chamada};
  font-weight: 600;
  color: ${cores.detalhe};
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const StackGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 14px;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: ${texto.chamada};
    font-weight: 600;

    & span {
      padding: 6px;
      border: 1px solid ${cores.chumbo};
      display: flex;
      align-items: center;
      border-radius: 4px;
    }

    & svg {
      color: ${cores.detalhe};
    }
  }
`

export const Foot = styled.footer`
  margin-top: auto;
  font-size: ${texto.chamada};
  color: ${cores.cinza};
  padding-top: 30px;
  padding-bottom: 30px;
`
