// import { profile, projects, stack } from '../../data'
// import { scrollToSection } from '../../utils'
// import { Avatar, Button } from '../../styles'

import Scene3D from '../Scene3D'
import * as S from './styles'

const Hero = () => (
  <S.Section id="feed">
    {/* <S.Banner aria-hidden="true" /> */}
    <Scene3D />

    <S.Body>
      <S.Row>
        <S.AvatarWrap>
          <div>AM</div>
        </S.AvatarWrap>

        <S.Actions>
          <button>GitHub</button>
          <button>LinkedIn</button>
          <button>Vamos conversar</button>
        </S.Actions>
      </S.Row>

      <S.Name>Ariel</S.Name>
      <S.Handle>lalalla · dev</S.Handle>

      <S.Headline>GGGGGGGGGGG</S.Headline>
      <S.Bio>gggggggggggggggg</S.Bio>
      <S.Meta>riooo</S.Meta>
    </S.Body>
  </S.Section>
)

export default Hero
