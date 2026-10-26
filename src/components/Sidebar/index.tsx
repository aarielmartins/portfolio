import { useState } from 'react'
import { ArrowUpRight, Home, User } from 'lucide-react'

// import { profile } from '../../data'
// import { scrollToSection } from '../../utils'
// import { Avatar, Button } from '../../styles'

import { Block } from '../RightPanel/styles'
import * as S from './styles'

const items = [
  { id: 'feed', label: 'Feed', Icon: Home },
  { id: 'sobre', label: 'Sobre mim', Icon: User }
]

const Sidebar = () => {
  const [active, setActive] = useState('feed')

  // destaca no menu a seção que está visível no feed
  // useEffect(() => {
  //   const root = document.getElementById('feed-scroll')
  //   if (!root) return

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) setActive(entry.target.id)
  //       })
  //     },
  //     { root, rootMargin: '-20% 0px -60% 0px' }
  //   )

  //   items.forEach(({ id }) => {
  //     const el = document.getElementById(id)
  //     if (el) observer.observe(el)
  //   })

  //   return () => observer.disconnect()
  // }, [])

  return (
    <S.Aside>
      <S.Logo>
        <span>a/</span> ariel.dev <span>*</span>
      </S.Logo>

      <S.Nav aria-label="Principal">
        {items.map(({ id, label, Icon }) => (
          <S.NavItem
            key={id}
            $active={active === id}
            // $active={active === id}
            // onClick={() => scrollToSection(id)}
          >
            <Icon size={20} />
            <span>{label}</span>
          </S.NavItem>
        ))}
      </S.Nav>

      <Block>
        <h3>Também no meu radar</h3>
        <S.Radar>
          <li>
            <div>
              <h1>GAMES & EXPERIÊNCIAS</h1>
              <h2>
                Estudos de C# & Unity para agregar meus conhecimentos de 3D à
                programação
              </h2>
            </div>
          </li>
          <li>
            <div>
              <h1>FUNDAMENTOS DE PROGRAMAÇÃO</h1>
              <h2>
                Estudos de algoritmos, estruturas de dados e system design para
                fortalecer minha base técnica.
              </h2>
            </div>
          </li>
        </S.Radar>
      </Block>

      <S.Bottom>
        <a href="#contato">
          Vamos conversar? <ArrowUpRight size={20} />
        </a>

        <S.Me>
          <S.Acronym>AM</S.Acronym>
          <div>
            <h1>Ariel Martins</h1>
            <p>Desenvolvedora Front End</p>
          </div>
        </S.Me>
      </S.Bottom>
    </S.Aside>
  )
}

export default Sidebar
