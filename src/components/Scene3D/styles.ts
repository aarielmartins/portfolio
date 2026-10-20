import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 240px;
  background-color: #0a0a0a;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  canvas {
    touch-action: pan-y;
  }
`
