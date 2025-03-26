import { useEffect, useMemo } from 'react'
import {
  vec3,
  vec4,
  float,
  output,
  Fn,
  uv, vec2,
  remap,
  length,
  clamp,
  abs,
  step,
  smoothstep,
  sin,
  timerGlobal,
  cos,
  fract,
  screenCoordinate,
  screenSize,
  sub,
  
} from 'three/tsl'
import * as THREE from 'three'
import { useControls } from 'leva'
export default function StarDome(props) {
  const { zColor, bColor, cColor, dColor } = useControls({
    zColor: { value: '#0080ff' },
    bColor: { value: '#ffff80' },
    cColor: { value: '#ff80ff' },
    dColor: { value: '#438aad' }
  })
  
  const zVec = useMemo(() => vec3(...new THREE.Color(zColor).toArray()), [zColor])
  const bVec = useMemo(() => vec3(...new THREE.Color(bColor).toArray()), [bColor])
  const cVec = useMemo(() => vec3(...new THREE.Color(cColor).toArray()), [cColor])
  const dVec = useMemo(() => vec3(...new THREE.Color(dColor).toArray()), [dColor])
  
  const palette = useMemo(() =>
    Fn(([t]) =>
      zVec.add(
        bVec.mul(
          cos(float(6.28318).mul(cVec.mul(t).add(dVec)))
        )
      )
    ), [zVec, bVec, cVec, dVec]
  )
  const shaderNode = useMemo(() => {
    const shaderFn = Fn(() => {
      const time = timerGlobal()
      // start
      let vUv = uv()
      // Mapear de [0 → 1] a [-1 → 1] en ambos ejes
      vUv = vec2(
        remap(vUv.x, float(0), float(1), float(-1), float(1)),
        remap(vUv.y, float(0), float(1), float(-1), float(1))
      )
      // let vUv = screenCoordinate.mul(float(2.0)).sub(screenSize).div(screenSize.y)

      // logic
      
      let uv0 = vec2(vUv);
      let finalColor = vec3(float(0.0));
      for (let i = 0.0; i < 1.0; i++) {
      // vUv = vUv.mul(float(2.0));
      // vUv = fract(vUv);
      // vUv = vUv.sub(float(0.5));
      vUv = fract(vUv.mul(float(2.0))).sub(float(0.5));

      let a = length(vUv).sub((0.5));
      const col = palette(length(uv0).add(time).div(float(1.0)));
      a = sin(a.mul(float(8.0)).add(time)).div(float((8.0)));
      a = abs(a);
      a = float(0.02).div(a);
      // const col = vec3(float(1.0), float(0.0), float(0.0))
       finalColor = col.mul(a)
      }
      // output
      return output.assign(vec4(finalColor, float(1)))


      // end
    })

    return shaderFn()
  }, [palette])


  const materialKey = useMemo(() => Date.now(), [shaderNode])

  return (
    <mesh {...props} rotation={[-Math.PI/ 2, 0 ,0]} >
      <planeGeometry args={[10, 10]} />
      <meshStandardNodeMaterial
        key={materialKey}
        outputNode={shaderNode}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
