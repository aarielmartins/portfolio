import styled from 'styled-components'

import { breakpoints, cores, texto } from '../../styles'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 32px 28px;
  border-bottom: 1px solid ${cores.chumbo};

  @media (max-width: ${breakpoints.mobile}) {
    padding-inline: 18px;
  }
`
export const Title = styled.h2`
  font-size: ${texto.titulo};
  font-weight: 600;
  color: ${cores.branco};

  span {
    color: ${cores.detalhe};
  }
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const GroupLabel = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  color: ${cores.cinza};

  svg {
    color: ${cores.detalhe};
  }
`

export const Timeline = styled.ol`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Item = styled.li`
  position: relative;
  padding: 0 0 28px 28px;

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    z-index: 1;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${cores.detalhe};
  }

  /* linha que liga uma bolinha à próxima */
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 15px;
    bottom: -5px;
    left: 4.5px;
    width: 1px;
    background-color: ${cores.chumbo};
  }

  &:last-child {
    padding-bottom: 0;
  }
`

export const ItemHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 4px 16px;

  h4 {
    font-weight: 700;
    color: ${cores.branco};
  }

  time {
    color: ${cores.cinza};
  }
`

export const Place = styled.p`
  margin-top: 2px;
  font-size: ${texto.pequena};
  font-weight: 600;
  color: ${cores.detalhe};
`

export const Description = styled.p`
  margin-top: 10px;
  max-width: 620px;
  font-size: ${texto.chamada};
  line-height: 1.6;
  color: ${cores.cinza};
`
