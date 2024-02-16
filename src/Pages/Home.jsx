import React, { useEffect, useRef, useState } from 'react'
import { BoxGeometry, Color } from 'three'
import { CameraControls, Environment, Float, RenderTexture, Text } from '@react-three/drei'
import font from './Resources/font_design.ttf'
import { Room } from './Room'
import { Man } from './Man'
import { degToRad } from 'three/src/math/MathUtils'
import { atom, useAtom } from 'jotai'
import { currentPageAtom } from './Navi'
export const cameraEnable=atom(true);
const bloomColor = new Color('#fff');
bloomColor.multiplyScalar(1.5);
const Home = () => {
    const controls=useRef();
    const [currentPage,setCurrentPage]=useAtom(currentPageAtom);
    const meshFitComputer=useRef();
    const meshFitScreen=useRef();
    const meshFitPhoto=useRef();
    const [isEnabled,setIsEnabled]=useAtom(cameraEnable);
    const intro = async () =>{
        controls.current.dolly(-32);
        controls.current.smoothTime = 0.8;
        setTimeout(()=>{
            setCurrentPage("home");
        },1200);
        fitCamera();
    };

    const fitCamera = async() =>{
        if(currentPage === "store"){
            controls.current.smoothTime=0.5;
            controls.current.fitToBox(meshFitComputer.current,true);
            
            setTimeout(()=>{
                setIsEnabled(false);
            },2200);
        }
        else if(currentPage==='photo'){
            controls.current.smoothTime=0.8;
            controls.current.fitToBox(meshFitPhoto.current,true);
        }
        else{
            controls.current.fitToBox(meshFitScreen.current,true);
        }
    }

    useEffect(()=>{
        intro();
    },[]);

    useEffect(()=>{
        fitCamera();
        window.addEventListener("resize",fitCamera);
        return ()=> window.removeEventListener("resize",fitCamera);
    },[currentPage])
  return (
    <>
    <CameraControls ref={controls} enabled={isEnabled}/>
    <mesh ref={meshFitScreen} visible={false}>
            <boxGeometry args={[15,2,2]}/>
            <meshBasicMaterial  color="red" transparent opacity={0.4}/>
        </mesh>
    <Text 
    font={font}
    position-x={-2.2} 
    position-y={.3} 
    position-z={1.2}
    scale={0.6}
    anchorY={"bottom"}
    >
        HI{"\n"}I'M DHESIGAN
        <meshBasicMaterial color={bloomColor} toneMapped={false}>
            <RenderTexture attach={'map'}>
                <color attach="background" args={["#fff"]}/>
                <Environment preset='sunset'/>
            </RenderTexture>
        </meshBasicMaterial>
    </Text>
    <group  position-x={3.5} position-y={-1.5} position-z={-1.3}>
        <Room scale={1}/>
        <group position-x={0.01} position-y={1.3} position-z={-2.4} >
        <mesh ref={meshFitComputer} visible={false}>
            <boxGeometry args={[1,1,.9]}/>
            <meshBasicMaterial  color="red" transparent opacity={0.4}/>
        </mesh>
        </group>
        <group position-x={1} position-y={2.2} position-z={-1.7} >
        <mesh ref={meshFitPhoto} visible={false}>
            <boxGeometry args={[1,1,1]}/>
            <meshBasicMaterial  color="red" transparent opacity={0.4}/>
        </mesh>
        </group>
    </group>
    <group     
        position-x={-4.2} 
        position-y={-2.2} 
        position-z={1.2}
        anchorY={"bottom"}
        rotation-y={degToRad(35)}
    >
        <Man scale={1.5}/>
    </group>
    
    <Environment preset='sunset'/>
    </>
  )
}

export default Home