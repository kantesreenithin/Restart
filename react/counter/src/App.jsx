import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0);
  const addValue=()=>{
    setCount(count+1);
  }
  const removeValue=()=>{
    setCount(count-1);
  }
  return (
    <>
    <h1>React Course</h1>
    <h2>Counter Value: {count} </h2>
    <button
    onClick={addValue}>Add value</button>{" "}
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
