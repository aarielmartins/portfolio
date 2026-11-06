import { ArrowDown } from 'lucide-react'

import * as S from './styles'
import Stacks from '../Stacks'

const RightPanel = () => (
  <S.Aside>
    <S.Block>
      <h3>Por trás dos códigos</h3>
      <p>
        Uma desenvolvedora que acredita que a melhor experiência está no
        encontro entre <strong>design, funcionalidade e tecnologia.</strong>
      </p>
      <S.TextLink href="#carreira">
        Mais sobre mim <ArrowDown size={16} />
      </S.TextLink>
    </S.Block>

    <S.Block>
      <Stacks />
    </S.Block>
    <S.Foot>
      <p>Feito com React & muita curiosidade.</p>
      <p>Do Brasil para a web.</p>
    </S.Foot>
  </S.Aside>
)

export default RightPanel
