import React from 'react'
import { useState } from 'react';
const Bgcolor = () => {
    const [color,setColor]=useState("yellow");
    // const ChangeBgColor=(color)=>{
    //     setColor(color)
    // }
  return (
    <div className="w-screen h-screen relative flex items-center justify-center duration-200"style={{backgroundColor:color}}>
        <h1 className='text-9xl'>Bg Color Changer</h1>
        <div className="flex w-full justify-center gap-4 ">
            <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={()=>{setColor("red")}}>Red</button> 
            <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={()=>{setColor("green")}}>Green</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={()=>{setColor("blue")}}>Blue</button>
        </div>    
    </div>
  )
}

export default Bgcolor