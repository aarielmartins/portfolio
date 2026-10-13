import styled from 'styled-components'

import { breakpoints, cores } from '../../styles'

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 28px;
  height: 100%;
  padding: 28px 24px;
  overflow-y: auto;
  scrollbar-width: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Block = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${cores.detalheClaro};

  h3 {
    font-size: 13px;
    font-weight: 600;
  }

  p {
    color: ${cores.cinza};

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
  font-size: 13px;
  font-weight: 500;
  color: ${cores.detalhe};

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
    font-size: 12px;
    font-weight: 500;
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
