import styled from 'styled-components'

import { breakpoints, cores } from '../../styles'

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;
  padding: 28px 24px;
  overflow-y: auto;

  @media (max-width: ${breakpoints.mobile}) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;
    height: auto;
    padding: 6px 10px;
    flex-direction: row;
    background-color: rgba(0, 0, 0, 0.92);
    border-top: 1px solid ${cores.cinza};
  }
`

export const Logo = styled.div`
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.02em;

  span {
    color: ${cores.branco};
    margin-right: 6px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`

export const NavItem = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 15px;
  text-align: left;
  color: ${({ $active }) => ($active ? cores.branco : cores.detalhe)};
  background-color: ${({ $active }) => ($active ? '#151515' : 'transparent')};
  transition: color 0.15s;

  &:hover {
    color: ${({ $active }) => ($active ? cores.branco : cores.detalheClaro)};
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 2px;
    padding: 8px 10px;
    font-size: 10px;
  }
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: auto;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const Me = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 18px;
  border-top: 1px solid ${cores.cinza};

  strong {
    display: block;
    font-size: 13px;
  }

  small {
    font-size: 11px;
    color: ${cores.detalhe};
  }
`
