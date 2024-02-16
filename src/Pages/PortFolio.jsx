import React, { useState } from 'react'
import './Styles/index.css'
import { useAtom } from 'jotai'
import { PortFolioAtom } from './Navi'
import { currentPageAtom } from './Navi'
import { cameraEnable } from './Home'
import pc from './Resources/pc.png'
import lanAttacker from './Resources/LanAttacker.png'
import certificate from './Resources/certificate.png'
import resume from './Resources/resume.png'
import Resume from './Resources/Resume.pdf'
import lanProofe from './Resources/lanProofe.png'
import rps from './Resources/RPS.png'
import quizz from './Resources/Quizz.png'
import folder from './Resources/folder.png';
import meLogo from './Resources/bc_me.png'
import ret from './Resources/ruturn.png';
const PortFolio = () => {
    const[myStyle,setMyStyle]=useAtom(PortFolioAtom);
    const [isEnabled,setIsEnabled]=useAtom(cameraEnable);
    const [currentPage,setCurrentPage]=useAtom(currentPageAtom);
    const [visible,setVisible]=useState("none");
    const [visible1,setVisible1]=useState("none");
    const [visible2,setVisible2]=useState("none");
    const [visible3,setVisible3]=useState("none");
    const [visible4,setVisible4]=useState("none");
    const [isDisplay,setIsDisplay]=useState("none");
    console.log(myStyle);
    function ChangeData(){
        setIsEnabled(true);
        setCurrentPage("photo");
        setMyStyle("none");
    }
    function GoBack(){
        setIsEnabled(true);
        setCurrentPage("home");
        setMyStyle("none");
    }
  return (
    <>
    <section className='Main' style={{display:myStyle}}>
        <div className="pc">
            <button onClick={()=>setVisible("block")}><img src={pc} alt="pc"/>This PC</button>  
            <button onClick={ChangeData}><img src={meLogo} alt="pc"/>About Me</button>
            <button onClick={GoBack}><img src={ret} alt="pc"/>Go Back</button> 
        </div>
        <div className='nav'>
            <button onClick={()=>setIsDisplay("block")}>🤖</button>
        </div>
    </section>
    <section className='showcase' style={{display:visible}}>
        <header>
            <button>-</button>
            <button>=</button>
            <button onClick={()=>setVisible("none")}>x</button>
        </header>
        <div className='container' >
            <button onClick={()=>setVisible1("block")}><img src={folder} alt='folser'/>PROJECTS</button>
            <button onClick={()=>setVisible2("block")}><img src={folder} alt='folser'/>CERTIFICATES</button>
            <button><img src={resume} alt='folser'/><a href={Resume} download={true}>RESUME</a></button>
        </div>
    </section>
    <section className='projects' style={{display:visible1}}>
        <header>
            <button>-</button>
            <button>=</button>
            <button onClick={()=>setVisible1("none")}>x</button>
        </header>
        <div className='container'>
            <button onClick={()=>setVisible3("block")}><img src={lanAttacker} alt='folser'/>LAN ATTACKER</button>
            <button onClick={()=>setVisible4("block")}><img src={rps} alt='folser'/>RPS</button>
            <button><img src={quizz} alt='folser'/>QUIZZ</button>
        </div>
    </section>
    <section className='certificates' style={{display:visible2}}>
        <header>
            <button>-</button>
            <button>=</button>
            <button onClick={()=>setVisible2("none")}>x</button>
        </header>
        <div className='container'>
            <button><img src={certificate} alt='folser'/>JAVA</button>
            <button><img src={certificate} alt='folser'/>PROBLEM SOLVING</button>
            <button><img src={certificate} alt='folser'/>JAVASCRIPT</button>
            <button><img src={certificate} alt='folser'/>NPTEL</button>
        </div>
    </section>
    <section className='lanAttacker' style={{display:visible3}}>
        <header>
            <button>-</button>
            <button>=</button>
            <button onClick={()=>setVisible3("none")}>x</button>
        </header>
        <div className='description'>
            <h1>LAN ATTACKER:</h1>
            <p>This is a project about attacking and gathering information of the windows machines which is connected in the same network by using java programs.</p>
            <h1>FEATURES:</h1>
            <ul>
                <li>Fetch IP details</li>
                <li>Fetch system details</li>
                <li>Directory discovery</li>
                <li>Upload and execute files and programs</li>
                <li>Download files from victim</li>
                <li>Taking screenshot</li>
            </ul>
            <p>Github : <a href='https://github.com/DhesiTheKing/LocalNet_Attacker'>Lan_Attacker</a></p>
            <h1>SCREENSHOTS:</h1>
        </div>
        <div className='scrshots'>
            <img src={lanProofe} alt="LanAttacker" />
        </div>
    </section>
    <section className='rps' style={{display:visible4}}>
    <header>
            <button>-</button>
            <button>=</button>
            <button onClick={()=>setVisible4("none")}>x</button>
        </header>
        <iframe src='https://dhesitheking.github.io/fight_club/' title='fight_Club'>

        </iframe>
    </section>
    <section className='windows' style={{display:isDisplay}}> 
        <button onClick={()=>setIsDisplay("none")}>🐻</button>
    </section>
    </>
  )
}

export default PortFolio