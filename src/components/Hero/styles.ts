import styled from 'styled-components'

import { breakpoints, cores, texto } from '../../styles'

export const Section = styled.section``

export const Banner = styled.div`
  height: 170px;
  background: radial-gradient(120% 100% at 70% 0%, #1b2208 0%, #070707 60%);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(${cores.branco} 1px, transparent 1px),
      linear-gradient(90deg, ${cores.branco} 1px, transparent 1px);
    background-size: 32px 32px;
    mask-image: linear-gradient(to bottom, #000, transparent);
    -webkit-mask-image: linear-gradient(to bottom, #000, transparent);
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 28px 24px;

  @media (max-width: ${breakpoints.mobile}) {
    padding-inline: 18px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
`

export const AvatarWrap = styled.div`
  margin-top: -42px;

  > div {
    border: 4px solid ${cores.preto};
  }
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const Name = styled.h1`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 28px;
  letter-spacing: -0.02em;

  svg {
    color: ${cores.detalhe};
  }
`

export const Handle = styled.p`
  font-size: 13px;
  color: #6f9bd1;
`

export const Headline = styled.p`
  margin-top: 10px;
  font-weight: 600;
`

export const Bio = styled.p`
  color: ${cores.detalhe};
`

export const Meta = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${cores.detalhe};
`

export const Stats = styled.div`
  display: flex;
  gap: 22px;
  margin-top: 10px;
  font-size: 12px;
  color: ${cores.detalhe};

  b {
    margin-right: 4px;
    font-size: 15px;
    color: ${cores.detalhe};
  }
`
