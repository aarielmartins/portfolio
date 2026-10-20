import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Bounds, Center, OrbitControls, useGLTF } from '@react-three/drei'

import * as S from './styles'

const MODEL_PATH = '/models/cena.glb'

const Model = () => {
  const { scene } = useGLTF(MODEL_PATH)
  return <primitive object={scene} />
}

useGLTF.preload(MODEL_PATH)

const Scene3D = () => (
  <S.Wrapper aria-hidden="true">
    <Canvas camera={{ position: [4, 3, 5], fov: 40 }} dpr={[1, 2]}>
      <ambientLight intensity={0.9} />
      <hemisphereLight intensity={0.8} />
      <directionalLight position={[5, 6, 4]} intensity={1.6} />
      <directionalLight position={[-5, 3, -4]} intensity={0.8} />
      <directionalLight position={[5, 6, 4]} intensity={1.6} />

      <Suspense fallback={null}>
        <Bounds fit observe margin={1.3}>
          <Center>
            <Model />
          </Center>
        </Bounds>
      </Suspense>

      <OrbitControls
        autoRotate
        autoRotateSpeed={1.5}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  </S.Wrapper>
)

export default Scene3D
