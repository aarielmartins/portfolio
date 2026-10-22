import { FiGithub, FiArrowUpRight, FiMapPin, FiCode } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'
import { FaLinkedinIn } from 'react-icons/fa'

import Scene3D from '../Scene3D'
import * as S from './styles'

const Hero = () => (
  <S.Section id="feed">
    <Scene3D />

    <S.Body>
      <S.Row>
        <S.AvatarWrap>
          <div>AM</div>
        </S.AvatarWrap>

        <S.Actions>
          <a href="https://github.com/aarielmartins">
            <FiGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/aarielmartins/">
            <FaLinkedinIn /> LinkedIn
          </a>
          <a href="#">
            Vamos conversar <FiArrowUpRight />
          </a>
        </S.Actions>
      </S.Row>

      <S.Name>
        Ariel Martins <MdVerified size={20} />
      </S.Name>
      <S.Headline>Front End & creative developer</S.Headline>
      <S.Bio>
        Entre código, design e mundos 3D. Transformando ideias em experiências
        que fazem sentido.
      </S.Bio>

      <S.Meta>
        <span>
          <FiMapPin /> Rio de Janeiro, Brasil
        </span>
        <span>
          <FiCode />
        </span>
      </S.Meta>

      <S.Stats>
        <span>
          <b>04</b> projetos
        </span>
        <span>
          <b>20</b> tecnologias
        </span>
      </S.Stats>

      <S.Note>Explore meus projetos no feed</S.Note>
    </S.Body>
  </S.Section>
)

export default Hero
