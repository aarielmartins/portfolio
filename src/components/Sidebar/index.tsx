import { useEffect, useState } from 'react'
import { ArrowUpRight, Home, Layers, Mail, User } from 'lucide-react'

// import { profile } from '../../data'
// import { scrollToSection } from '../../utils'
// import { Avatar, Button } from '../../styles'

import * as S from './styles'

const items = [
  { id: 'feed', label: 'Feed', Icon: Home },
  { id: 'sobre', label: 'Sobre mim', Icon: User },
  { id: 'stack', label: 'Minhas stacks', Icon: Layers }
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

      <S.Bottom>
        <button
        // $variant="accent"
        // $block
        // onClick={() => scrollToSection('contato')}
        >
          Vamos conversar? <ArrowUpRight size={20} />
        </button>

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
