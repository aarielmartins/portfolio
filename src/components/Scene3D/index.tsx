import * as S from './styles'

const MODEL_URL =
  'https://sketchfab.com/models/17021d3a158e43a0a84572e43c6d0f9c/embed?ui_theme=dark'

const PARAMS = new URLSearchParams({
  autostart: '1', // já começa carregando
  autospin: '0.3', // gira sozinho (maior = mais rápido)
  ui_controls: '0', // esconde os botões do player
  ui_infos: '0', // esconde o título do modelo
  transparent: '1' // fundo transparente, combina com o seu gradiente
})

const Scene3D = () => (
  <S.Wrapper>
    <iframe
      title="Modelo 3D"
      src={`${MODEL_URL}?${PARAMS}`}
      loading="lazy"
      allow="autoplay; fullscreen; xr-spatial-tracking"
    />
  </S.Wrapper>
)

export default Scene3D
