import Sidebar from '../Sidebar'
import RightPanel from '../RightPanel'

import * as S from './styles'
import Hero from '../Hero'

import PostCard from '../PostCard'
import { posts } from '../../data'

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
