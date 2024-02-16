
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import manScene from './Resources/man.glb';
export function Man(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(manScene)
  const { actions ,names} = useAnimations(animations, group)
  useEffect(()=>{
    actions[names[0]].reset().fadeIn(0.5).play();
  },[]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig6Hips} />
          <skinnedMesh name="Ch09" geometry={nodes.Ch09.geometry} material={materials.Ch09_body} skeleton={nodes.Ch09.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/man.glb')
