import Sidebar from '../Sidebar'
import RightPanel from '../RightPanel'

import * as S from './styles'

const Layout = () => (
  <S.Container>
    <Sidebar />
    <S.Feed> </S.Feed>
    <RightPanel />
  </S.Container>
)

export default Layout
