import React, { useState, useCallback, useEffect, useRef } from 'react'
const Passwordgenerator = () => {
    const [length,setLength]=useState(8);
    const [isNumberAllowed,setIsNumberAllowed]=useState(false);
    const [isCharAllowed,setIsCharAllowed]=useState(false);
    const [password,setPassword]=useState('');

    const pwdref=useRef(null);

    const copyToClipboard=()=>{
        window.navigator.clipboard.writeText(password);
        pwdref.current.select();
    }
    const generatePassword=useCallback(()=>{
        let pwd="";
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(isCharAllowed) str+="`~!@#$%^&*()_";
        if(isNumberAllowed) str+="1234567890";

        for(let i=0;i<length-1;i++){
            const char=Math.floor(Math.random() * str.length);
            pwd+=str.charAt(char);
        }
        setPassword(pwd);
    },[length,isCharAllowed,isNumberAllowed])

    useEffect(()=>{
        generatePassword()
    },[length,isCharAllowed,isNumberAllowed])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-gray-800'>
        <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
            className='outline-none w-full py-1 px-3'
            type="text"
            value={password}
            readOnly 
            placeholder='Password'
            ref={pwdref}
            ></input>
            <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyToClipboard}
            >copy</button>
        </div>
        <div>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e)=>{setLength(Number(e.target.value))}}
            ></input> 
             <div>Length : {length}</div>
        </div>
        <div>
            <input
            defaultChecked={isNumberAllowed}
            type="checkbox"
            onChange={()=>{setIsNumberAllowed((prev)=>!prev)}}
            ></input> Numbers
        </div>
        <div>
            <input
            type="checkbox"
            defaultChecked={isCharAllowed}
            onChange={()=>{setIsCharAllowed((prev)=>!prev)}}
            ></input> Characters
        </div>
    </div>
  )
}

export default Passwordgenerator