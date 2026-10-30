import { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Bounds,
  Center,
  Environment,
  Lightformer,
  OrbitControls,
  useGLTF
} from '@react-three/drei'
import { Mesh, MeshStandardMaterial } from 'three'

import * as S from './styles'

const MODEL_PATH = '/models/cena.glb'

const Model = () => {
  const { scene } = useGLTF(MODEL_PATH)

  // materiais muito metálicos ficam pretos sem reflexo, então suavizamos
  useEffect(() => {
    scene.traverse((obj) => {
      const mesh = obj as Mesh
      if (!mesh.isMesh) return

      const materials = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material]

      materials.forEach((material) => {
        const mat = material as MeshStandardMaterial
        if (typeof mat.metalness === 'number') {
          mat.metalness = Math.min(mat.metalness, 0.3)
        }
      })
    })
  }, [scene])

  return <primitive object={scene} />
}

useGLTF.preload(MODEL_PATH)

const Scene3D = () => (
  <S.Wrapper aria-hidden="true">
    <S.Label>
      <span>Mesa de projeto / 001</span>
      <span>Onde o código acontece</span>
    </S.Label>

    <Canvas camera={{ position: [4, 3, 5], fov: 40 }} dpr={[1, 2]}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 6, 4]} intensity={1.6} />
      <directionalLight position={[-5, 3, -4]} intensity={0.8} />

      <Environment resolution={256}>
        <Lightformer intensity={2} position={[0, 5, -5]} scale={[10, 10, 1]} />
        <Lightformer
          intensity={1.5}
          position={[-5, 1, 2]}
          rotation-y={Math.PI / 2}
          scale={[10, 2, 1]}
        />
        <Lightformer
          intensity={1.5}
          position={[5, 1, 2]}
          rotation-y={-Math.PI / 2}
          scale={[10, 2, 1]}
        />
      </Environment>

      <Suspense fallback={null}>
        <Bounds fit observe margin={1.0}>
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
