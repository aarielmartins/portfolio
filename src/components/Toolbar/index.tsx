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

  return (
    <S.Nav>
      {items.map(({ id, label, Icon, mobileOnly }) => (
        <S.NavItem
          key={id}
          href={`#${id}`}
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
