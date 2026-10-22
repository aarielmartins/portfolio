import styled from 'styled-components'
import { cores, texto } from '../../styles'

export const Wrapper = styled.div`
  position: relative;
  height: 240px;
  background-color: ${cores.chumbo};
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  canvas {
    touch-action: pan-y;
  }
`

export const Label = styled.div`
  position: absolute;
  top: 16px;
  left: 18px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  pointer-events: none;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: ${texto.pequena};
  text-transform: uppercase;
  color: ${cores.cinza};
`
