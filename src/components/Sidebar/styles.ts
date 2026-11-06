import styled from 'styled-components'

import { breakpoints, cores, texto } from '../../styles'

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 38px 30px;
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

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const Logo = styled.div`
  font-size: ${texto.titulo};
  font-weight: 600;

  span {
    color: ${cores.detalhe};
    font-weight: 800;
    margin-right: 6px;
  }
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: auto;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 10px 18px;
    border-radius: 10px;
    border: none;
    font-size: ${texto.detalhe};
    background-color: ${cores.detalhe};
    font-weight: 600;
    color: ${cores.preto};
    cursor: pointer;

    &:hover {
      background-color: ${cores.detalheClaro};
    }
  }

  & svg {
    color: ${cores.preto};
    transition: color 0.15s;
  }
`

export const Me = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 30px;
  border-top: 1px solid ${cores.chumbo};

  h1 {
    font-weight: 600;
    font-size: ${texto.detalhe};
  }

  p {
    color: ${cores.cinza};
  }
`

export const Acronym = styled.div`
  background-color: ${cores.detalhe};
  padding: 10px 8px;
  border-radius: 50%;
  font-weight: 600;
  color: ${cores.preto};
  font-size: ${texto.detalhe};
`
export const Radar = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  li {
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${cores.cinza};
  }

  strong {
    display: block;
    font-size: 13px;
    color: ${cores.branco};
  }

  small {
    font-size: 11px;
  }

  p {
    padding-top: 4px;
    color: ${cores.branco};
    font-size: ${texto.chamada};
  }

  h1 {
    font-size: ${texto.chamada};
    font-weight: 600;
  }
`
