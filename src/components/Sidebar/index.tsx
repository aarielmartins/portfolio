import { ArrowUpRight } from 'lucide-react'
import { Block } from '../RightPanel/styles'
import * as S from './styles'
import Toolbar from '../Toolbar'

const Sidebar = () => {
  return (
    <S.Aside>
      <S.Logo>
        <span>a/</span> ariel.dev <span>*</span>
      </S.Logo>

      <Toolbar />

      <Block>
        <h3>Também no meu radar</h3>
        <S.Radar>
          <li>
            <div>
              <h1>GAMES & EXPERIÊNCIAS</h1>
              <h2>
                Estudos de C# & Unity para agregar meus conhecimentos de 3D à
                programação
              </h2>
            </div>
          </li>
          <li>
            <div>
              <h1>FUNDAMENTOS DE PROGRAMAÇÃO</h1>
              <h2>
                Estudos de algoritmos, estruturas de dados e system design para
                fortalecer minha base técnica.
              </h2>
            </div>
          </li>
          <li>
            <div>
              <h1>INTELIGÊNCIA ARTIFICIAL</h1>
              <h2>
                De olho em LLMs, prompt engineering e RAG, para aprender a
                integrar IA a interfaces e aplicações web.
              </h2>
            </div>
          </li>
        </S.Radar>
      </Block>

      <S.Bottom>
        <a href="#contato">
          Vamos conversar? <ArrowUpRight size={20} />
        </a>

        <S.Me>
          <S.Acronym>AM</S.Acronym>
          <div>
            <h1>Ariel Martins</h1>
            <p>Desenvolvedora Front End</p>
          </div>
        </S.Me>
      </S.Bottom>
    </S.Aside>
  )
}

export default Sidebar
