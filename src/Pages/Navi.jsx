import { atom, useAtom } from 'jotai'
import React from 'react'
export const currentPageAtom=atom("intro");
export const PortFolioAtom=atom("none");
const Navi = () => {
  const[currentPage,setCurrentPage]=useAtom(currentPageAtom);
  const[myStyle,setMyStyle]=useAtom(PortFolioAtom);
  function ChangeData(){
    setCurrentPage("store");
    setTimeout(()=>{
      setMyStyle("block");
  },3200);
    

  }
  return (
    <div className='fixed inset-0 pointer-events-none'>
      <section className={`flex w-full h-full flex-col items-center justify-center duration-500 ${currentPage==="home" ? "":"opacity-0"}`}>
        <div className='h-[66%]'></div>
        <button onClick={ChangeData}
        className={'pointer-events-auto py-4 px-8 bg-blue-500 text-white font-black rounded-full'}
        > 
          KNOW ME
        </button>
      </section>
    </div>
  );
}

export default Navi