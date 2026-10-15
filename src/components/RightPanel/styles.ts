import styled from 'styled-components'

import { breakpoints, cores, texto } from '../../styles'

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 28px;
  height: 100%;
  padding: 38px 30px;

  /* @media (max-width: ${breakpoints.tablet}) {
    display: none;
  } */
`

export const Block = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${cores.chumbo};

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

export const TextLink = styled.button`
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
`

export const Cta = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h3 {
    font-size: 19px;
    font-weight: 500;
    line-height: 1.3;
  }
`

export const Foot = styled.footer`
  font-size: 11px;
  line-height: 1.7;
  color: ${cores.cinza};
`
