import Sidebar from '../Sidebar'
import RightPanel from '../RightPanel'

import * as S from './styles'
import Hero from '../Hero'

import PostCard from '../PostCard'
import trama from '../../assets/images/trama.jpg'

const posts = [
  {
    id: 'trama',
    author: 'Ariel Martins',
    handle: '@aarielmartins',
    initials: 'am',
    date: '02 out. 2026',
    category: 'Frontend',
    title: 'Trama — e-commerce de ponta a ponta.',
    description:
      'Loja virtual com catálogo, carrinho e API própria, feita com React, TypeScript e Redux Toolkit.',
    image: trama,
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Styled-Components'],
    likes: 48,
    fires: 12,
    sparks: 8,
    projectUrl: 'https://...',
    githubUrl: 'https://github.com/aarielmartins/Projeto---Virtual_Store'
  }
]

const Layout = () => (
  <S.Container>
    <Sidebar />
    <S.Feed>
      <Hero />
      {posts.map(({ id, ...post }) => (
        <PostCard key={id} {...post} />
      ))}
    </S.Feed>
    <RightPanel />
  </S.Container>
)

export default Layout
