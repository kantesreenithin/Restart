import { useState } from "react";

import "./App.css";
import Card from "./components/Card";
import Bgcolor from "./components/Bgcolor";
import Passwordgenerator from "./components/Passwordgenerator";
import Currencyconverter from "./components/Currencyconverter";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);
  /*<Card username="kante Sreenithin"/>
      <Card/>
      <Card/>*/
  // <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite With Tailwind</h1>
  // <Bgcolor/>
  // <Passwordgenerator/>
  // <Currencyconverter/>
  return (
    <div>
      <Login />
      <Profile />
      hello
    </div>
  );
}

export default App;
