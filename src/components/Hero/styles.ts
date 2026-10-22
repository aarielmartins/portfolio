import styled from 'styled-components'
import { breakpoints, cores, texto } from '../../styles'

export const Section = styled.section``

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 28px 28px;

  /* @media (max-width: ${breakpoints.mobile}) {
    padding-inline: 18px;
  } */
`

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`

export const AvatarWrap = styled.div`
  position: relative;
  margin-top: -40px;

  & div {
    display: grid;
    place-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid ${cores.preto};
    background-color: ${cores.detalhe};
    color: ${cores.preto};
    font-size: ${texto.titulo};
    font-weight: 700;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 16px;

  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border-radius: 10px;
    border: 1px solid ${cores.cinza};
    background-color: transparent;
    color: ${cores.branco};
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.15s;

    &:hover {
      background-color: ${cores.chumbo};
    }
  }
`

export const Name = styled.h1`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  font-size: ${texto.titulo};
  font-weight: 700;
  color: ${cores.branco};

  svg {
    color: ${cores.detalhe};
  }
`

export const Headline = styled.p`
  max-width: 560px;
  margin-top: 10px;
  font-size: ${texto.detalhe};
  font-weight: 500;
  color: ${cores.branco};
`

export const Bio = styled.p`
  max-width: 560px;
  margin-top: 2px;
  font-size: ${texto.chamada};
  color: ${cores.cinza};
`

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 18px;
  margin-top: 18px;
  font-size: ${texto.chamada};
  color: ${cores.cinza};

  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  a {
    color: ${cores.detalhe};
    font-weight: 500;
  }
`

export const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 26px;
  margin-top: 18px;
  font-size: ${texto.chamada};
  color: ${cores.cinza};

  b {
    margin-right: 6px;
    font-size: ${texto.detalhe};
    font-weight: 600;
    color: ${cores.branco};
  }
`

export const Note = styled.small`
  margin-top: 18px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: ${texto.pequena};
  text-transform: uppercase;
  color: ${cores.cinza};
`
