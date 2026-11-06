import { useState } from 'react'
import { Home, User } from 'lucide-react'
import * as S from './styles'

const items = [
  { id: 'feed', label: 'Feed', Icon: Home },
  { id: 'sobre', label: 'Sobre mim', Icon: User },
  { id: 'stacks', label: 'Stacks', Icon: User, mobileOnly: true }
]

const Toolbar = () => {
  const [active, setActive] = useState('feed')

  // onClick={() => { setActive(id); scrollToSection(id) }}

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
    <S.Nav aria-label="Principal">
      {items.map(({ id, label, Icon, mobileOnly }) => (
        <S.NavItem
          key={id}
          $active={active === id}
          $mobileOnly={mobileOnly}
          onClick={() => setActive(id)}
        >
          <Icon size={20} />
          <span>{label}</span>
        </S.NavItem>
      ))}
    </S.Nav>
  )
}

export default Toolbar
