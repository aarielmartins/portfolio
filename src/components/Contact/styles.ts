import styled from 'styled-components'

import { breakpoints, cores, texto } from '../../styles'

const mono = `'JetBrains Mono', ui-monospace, monospace`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 40px 28px;
  border-bottom: 1px solid ${cores.chumbo};

  @media (max-width: ${breakpoints.mobile}) {
    padding-inline: 18px;
  }
`

export const Eyebrow = styled.small`
  font-family: ${mono};
  font-size: ${texto.pequena};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${cores.cinza};
`

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${cores.branco};

  span {
    color: ${cores.detalhe};
  }
`

export const Text = styled.p`
  font-size: ${texto.chamada};
  color: ${cores.cinza};
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
`

export const CopyButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 20px;
  border: 0;
  border-radius: 10px;
  background-color: ${cores.detalhe};
  color: ${cores.preto};
  font-family: inherit;
  font-size: ${texto.chamada};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${cores.detalheClaro};
  }
`

export const MailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 20px;
  border: 1px solid ${cores.chumbo};
  border-radius: 10px;
  background-color: transparent;
  color: ${cores.branco};
  font-size: ${texto.chamada};
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.15s, border-color 0.15s;

  &:hover {
    background-color: ${cores.chumbo};
    border-color: ${cores.cinza};
  }
`

export const Note = styled.small`
  margin-top: 6px;
  font-family: ${mono};
  font-size: ${texto.pequena};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${cores.cinza};
`
