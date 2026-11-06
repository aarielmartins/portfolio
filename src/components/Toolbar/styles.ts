import styled from 'styled-components'
import { breakpoints, cores, texto } from '../../styles'

type NavItemProps = {
  $active: boolean
  $mobileOnly?: boolean
}

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 40px;
  border-bottom: 1px solid ${cores.chumbo};
  padding-bottom: 30px;

  @media (max-width: ${breakpoints.mobile}) {
    display: grid;
    padding: 0px;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    border-top: 1px solid ${cores.chumbo};
    gap: 0px;
  }
`

export const NavItem = styled.a<NavItemProps>`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 14px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: ${texto.detalhe};
  text-align: left;
  color: ${({ $active }) => ($active ? cores.branco : cores.cinza)};
  background-color: ${({ $active }) =>
    $active ? cores.chumbo : 'transparent'};
  transition: color 0.15s;

  /* Esconde apenas o item exclusivo do mobile */
  ${({ $mobileOnly }) =>
    $mobileOnly &&
    `
      display: none;
    `}

  svg {
    color: ${({ $active }) => ($active ? cores.detalhe : 'inherit')};
    transition: color 0.15s;
  }

  &:hover {
    color: ${cores.branco};
    background-color: ${cores.chumbo};
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
  }

  @media (max-width: ${breakpoints.mobile}) {
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 16px 0px;
    color: ${({ $active }) => ($active ? cores.branco : cores.cinza)};
    cursor: pointer;
    transition: color 0.15s, background-color 0.15s;
    border-radius: 0px;

    svg {
      display: none;
    }

    /* linha verde embaixo do item ativo */
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 56px;
      height: 3px;
      transform: translateX(-50%);
      border-radius: 3px;
      background-color: ${cores.detalhe};
      opacity: ${({ $active }) => ($active ? 1 : 0)};
      transition: opacity 0.15s;
    }

    &:hover {
      color: ${cores.branco};
      background-color: ${cores.chumbo};
    }
  }
`
