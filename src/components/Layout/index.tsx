import Sidebar from '../Sidebar'
import RightPanel from '../RightPanel'

import * as S from './styles'
import Hero from '../Hero'

import PostCard from '../PostCard'
import { career, posts } from '../../data'
import Career from '../Career'

const Layout = () => (
  <S.Container>
    <Sidebar />
    <S.Feed>
      <Hero />
      {posts.map(({ id, ...post }) => (
        <PostCard key={id} {...post} />
      ))}
      <Career {...career} />
    </S.Feed>
    <RightPanel />
  </S.Container>
)

export default Layout
