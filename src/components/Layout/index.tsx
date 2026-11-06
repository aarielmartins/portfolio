import Sidebar from '../Sidebar'
import RightPanel from '../RightPanel'

import * as S from './styles'
import Hero from '../Hero'

import PostCard from '../PostCard'
import { career, posts } from '../../data'
import Career from '../Career'
import Contact from '../Contact'
import Stacks from '../Stacks'
import Toolbar from '../Toolbar'

const Layout = () => (
  <S.Container>
    <Sidebar />
    <S.Feed>
      <Hero />
      <S.MobileOnly>
        <Toolbar />
      </S.MobileOnly>
      <section id="feed">
        {posts.map(({ id, ...post }) => (
          <PostCard key={id} {...post} />
        ))}
      </section>
      <Career {...career} />
      <S.TabletOnly>
        <S.Section id="stacks">
          <Stacks />
        </S.Section>
      </S.TabletOnly>
      <Contact />
    </S.Feed>
    <RightPanel />
  </S.Container>
)

export default Layout
