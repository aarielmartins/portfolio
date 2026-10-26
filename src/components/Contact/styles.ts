import styled from 'styled-components'

import { breakpoints, cores, texto } from '../../styles'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 40px 28px;
  border-bottom: 1px solid ${cores.chumbo};

  /* @media (max-width: ${breakpoints.mobile}) {
    padding-inline: 18px;
  } */
`

export const Title = styled.h2`
  font-size: ${texto.titulo};
  font-weight: 600;
  color: ${cores.branco};

  span {
    color: ${cores.detalhe};
  }
`

export const Text = styled.p`
  color: ${cores.cinza};
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;

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

export const CopyButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 20px;
  border: 0;
  border-radius: 10px;
  background-color: ${cores.detalhe};
  color: ${cores.preto};
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
