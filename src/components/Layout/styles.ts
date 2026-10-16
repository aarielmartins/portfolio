import styled from 'styled-components'

import { breakpoints, cores } from '../../styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 350px minmax(0, 1fr) 350px;
  height: 100vh;
  height: 100dvh;
  max-width: 1500px;
  margin: 0 auto;

  /* @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 240px minmax(0, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  } */
`

export const Feed = styled.main`
  height: 100%;
  overflow-y: auto;
  border-left: 1px solid ${cores.chumbo};
  border-right: 1px solid ${cores.chumbo};
  scroll-behavior: smooth;
  scroll-padding-top: 60px;
  scrollbar-width: thin;
  scrollbar-color: ${cores.chumbo} transparent;

  /* @media (max-width: ${breakpoints.tablet}) {
    border-right: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    border: 0;
    padding-bottom: 72px;
  }

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  } */
`
