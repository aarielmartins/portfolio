import Sidebar from '../Sidebar'
import RightPanel from '../RightPanel'

import * as S from './styles'
import Hero from '../Hero'

const Layout = () => (
  <S.Container>
    <Sidebar />
    <S.Feed>
      <Hero />
    </S.Feed>
    <RightPanel />
  </S.Container>
)

export default Layout
