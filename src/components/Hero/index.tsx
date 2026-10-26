import { FiGithub, FiMapPin, FiCode } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineCheckBadge } from 'react-icons/hi2'

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
          <a
            href="https://github.com/aarielmartins"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aarielmartins/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn /> LinkedIn
          </a>
        </S.Actions>
      </S.Row>

      <S.Name>
        Ariel Martins <HiOutlineCheckBadge size={20} />
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
