import {
  ArrowDown,
  ArrowUpRight,
  Box,
  Code2,
  Gamepad2,
  Icon
} from 'lucide-react'

// import { radar, stack } from '../../data'
// import { scrollToSection } from '../../utils'
// import { Button, ChipIcon, Status } from '../../styles'

import * as S from './styles'

const icons = { box: Box, code: Code2, gamepad: Gamepad2 }

const RightPanel = () => (
  <S.Aside>
    <S.Block>
      <h3>Por trás dos pixels</h3>
      <p>
        Desenvolvedora que acredita que a melhor experiência está no encontro
        entre <strong>arquitetura, design e tecnologia.</strong>
      </p>
      <S.TextLink>
        {/* onClick={() => scrollToSection('sobre')} */}
        Mais sobre mim <ArrowDown size={13} />
      </S.TextLink>
    </S.Block>

    <S.Block>
      <h3>Minha stack</h3>
      <S.StackGrid>
        {/* {stack.map((item) => (
          <li key={item}>
            <ChipIcon>{item.slice(0, 2)}</ChipIcon>
            {item}
          </li>
        ))} */}
        <li>primero</li>
        <li>primero</li>
        <li>primero</li>
      </S.StackGrid>
    </S.Block>

    <S.Block>
      <h3>Também no meu radar</h3>
      <S.Radar>
        {/* {radar.map(({ icon, title, sub }) => {
          const Icon = icons[icon]
          return (
            <li key={title}>
              <Icon size={20} />
              <div>
                <strong>{title}</strong>
                <small>{sub}</small>
              </div>
            </li>
          )
        })} */}
        <li>
          <div>
            <strong>TITULO</strong>
            <small>Subtulo</small>
          </div>
        </li>
      </S.Radar>
    </S.Block>

    <S.Cta>
      {/* <Status>Vamos criar algo?</Status>
      <h3>Seu próximo projeto pode começar aqui.</h3>
      <Button $block onClick={() => scrollToSection('contato')}>
        Me dá um oi <ArrowUpRight size={14} />
      </Button> */}
    </S.Cta>

    <S.Foot>
      <p>Feito com React & muita curiosidade.</p>
      <p>Do Brasil para a web</p>
    </S.Foot>
  </S.Aside>
)

export default RightPanel
