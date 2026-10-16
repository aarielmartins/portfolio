import { ArrowDown, Box, Code2, Gamepad2 } from 'lucide-react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import {
  TbApi,
  TbBrandCss3,
  TbBrandDjango,
  TbBrandPython,
  TbBrandTypescript,
  TbBrandVercel
} from 'react-icons/tb'
import {
  SiReactrouter,
  SiRedux,
  SiRender,
  SiStyledcomponents
} from 'react-icons/si'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { VscJson } from 'react-icons/vsc'
import { IoIosGitBranch, IoIosCloudOutline } from 'react-icons/io'
import { FiGithub } from 'react-icons/fi'
import { RiNpmjsLine } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa6'
import { PiFileSqlBold } from 'react-icons/pi'

// import { radar, stack } from '../../data'
// import { scrollToSection } from '../../utils'
// import { Button, ChipIcon, Status } from '../../styles'

import * as S from './styles'

const icons = { box: Box, code: Code2, gamepad: Gamepad2 }

const RightPanel = () => (
  <S.Aside>
    <S.Block>
      <h3>Por trás dos códigos</h3>
      <p>
        Uma desenvolvedora que acredita que a melhor experiência está no
        encontro entre <strong>design, funcionalidade e tecnologia.</strong>
      </p>
      <S.TextLink>
        {/* onClick={() => scrollToSection('sobre')} */}
        Mais sobre mim <ArrowDown size={16} />
      </S.TextLink>
    </S.Block>

    <S.Block>
      <h3>Minhas stacks</h3>
      <p>FRONT END</p>
      <S.StackGrid>
        <li>
          <span>
            <FaReact size={16} />
          </span>
          React
        </li>
        <li>
          <span>
            <TbBrandTypescript size={16} />
          </span>
          Typescript
        </li>
        <li>
          <span>
            <SiStyledcomponents size={16} />
          </span>
          Styled-Components
        </li>
        <li>
          <span>
            <SiReactrouter size={16} />
          </span>
          React Router
        </li>
        <li>
          <span>
            <SiRedux size={16} />
          </span>
          Redux
        </li>
        <li>
          <span>
            <AiOutlineHtml5 size={16} />
          </span>
          HTML
        </li>
        <li>
          <span>
            <TbBrandCss3 size={16} />
          </span>
          CSS
        </li>
        <li>
          <span>
            <FaCheck size={16} />
          </span>
          React Testing Library
        </li>
      </S.StackGrid>
      <p>BACK END E DADOS</p>
      <S.StackGrid>
        <li>
          <span>
            <VscJson size={16} />
          </span>
          Jason-server
        </li>
        <li>
          <span>
            <TbApi size={16} />
          </span>
          REST-API
        </li>
        <li>
          <span>
            <TbBrandPython size={16} />
          </span>
          Python
        </li>
        <li>
          <span>
            <TbBrandDjango size={16} />
          </span>
          Django
        </li>
        <li>
          <span>
            <PiFileSqlBold size={16} />
          </span>
          SQL
        </li>
      </S.StackGrid>
      <p>FERRAMENTAS E DEPLOY</p>
      <S.StackGrid>
        <li>
          <span>
            <IoIosGitBranch size={16} />
          </span>
          Git
        </li>
        <li>
          <span>
            <FiGithub size={16} />
          </span>
          Github
        </li>
        <li>
          <span>
            <TbBrandVercel size={16} />
          </span>
          Vercel
        </li>
        <li>
          <span>
            <SiRender size={16} />
          </span>
          Render
        </li>
        <li>
          <span>
            <IoIosCloudOutline size={16} />
          </span>
          Cloudinary
        </li>
        <li>
          <span>
            <RiNpmjsLine size={16} />
          </span>
          NPM
        </li>
        <li>
          <span>
            <FaNodeJs size={16} />
          </span>
          Node.js
        </li>
      </S.StackGrid>
    </S.Block>

    <S.Block>
      <h3>Também no meu radar</h3>
      <S.Radar>
        <li>
          <div>
            <h1>GAMES & EXPERIÊNCIAS</h1>
            <p>
              Estudos de C# & Unity para agregar meus conhecimentos de 3D à
              programação
            </p>
          </div>
        </li>
        <li>
          <div>
            <h1>FUNDAMENTOS DE PROGRAMAÇÃO</h1>
            <p>
              Me aprofundando no estudos de algoritmos, estruturas de dados e
              system design para fortalecer minha base técnica.
            </p>
          </div>
        </li>
      </S.Radar>
    </S.Block>

    <S.Foot>
      <p>Feito com React & muita curiosidade.</p>
      <p>Do Brasil para a web.</p>
    </S.Foot>
  </S.Aside>
)

export default RightPanel
