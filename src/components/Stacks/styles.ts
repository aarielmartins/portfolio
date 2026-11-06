import styled from 'styled-components'

import { breakpoints, cores, texto } from '../../styles'

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

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;

    li {
      min-height: 54px;
      padding: 8px 10px;
      gap: 12px;
      border: 1px solid ${cores.chumbo};
      border-radius: 8px;
      background: ${cores.pretoClaro};

      span {
        flex-shrink: 0;
        padding: 7px;
        border-color: ${cores.chumbo};
        border-radius: 6px;
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    li {
      min-height: 54px;
      padding: 8px 10px;
      gap: 12px;
      border: 1px solid ${cores.chumbo};
      border-radius: 8px;
      background: ${cores.pretoClaro};

      span {
        flex-shrink: 0;
        padding: 7px;
        border-color: ${cores.chumbo};
        border-radius: 6px;
      }
    }
  }
`
