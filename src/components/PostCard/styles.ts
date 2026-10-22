import styled, { css } from 'styled-components'

import { breakpoints, cores, texto } from '../../styles'

export const Post = styled.article`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px 28px;
  border-bottom: 1px solid ${cores.chumbo};

  /* @media (max-width: ${breakpoints.mobile}) {
    padding-inline: 18px;
  } */
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Avatar = styled.div`
  display: grid;
  place-items: center;
  flex: none;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  background-color: ${cores.detalhe};
  color: ${cores.preto};
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Who = styled.div`
  flex: 1;
  min-width: 0;

  strong {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: ${texto.detalhe};
    color: ${cores.branco};

    svg {
      color: ${cores.detalhe};
    }
  }

  small {
    font-size: ${texto.chamada};
    color: ${cores.cinza};
  }
`

export const Category = styled.span`
  align-self: flex-start;
  font-size: ${texto.pequena};
  text-transform: uppercase;
  color: ${cores.cinza};
`

export const Title = styled.h2`
  font-size: ${texto.subtitulo};
  font-weight: 600;
  color: ${cores.branco};
`

export const Description = styled.p`
  color: ${cores.cinza};
`

export const Cover = styled.div`
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid ${cores.chumbo};

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 6px 12px;
    border-radius: 6px;
    background-color: ${cores.chumbo};
    font-size: ${texto.pequena};
    color: ${cores.cinza};
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 4px;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`

const iconBase = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  color: ${cores.cinza};
  cursor: pointer;
  transition: color 0.15s;

  &:hover {
    color: ${cores.branco};
  }
`

export const Reaction = styled.button<{ $active: boolean }>`
  ${iconBase}

  ${({ $active }) =>
    $active &&
    css`
      color: ${cores.detalhe};

      &:hover {
        color: ${cores.detalhe};
      }

      svg {
        fill: currentColor;
      }
    `}
`

export const IconButton = styled.button`
  ${iconBase}
`

export const IconLink = styled.a`
  ${iconBase}
`

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  color: ${cores.branco};
  text-decoration: none;

  &:hover {
    color: ${cores.detalhe};
    text-decoration: underline;
  }
`
