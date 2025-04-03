import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home/Home.jsx";
import Currencyconverter from "./components/Currencyconverter.jsx";
import Bgcolor from "./components/Bgcolor.jsx";
import Card from "./components/Card.jsx";
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";
import Passwordgenerator from "./components/Passwordgenerator.jsx";

import ThemeSwitch from "./components/Themeswitch/ThemeSwitch.jsx";
import TodoApp from "./components/Todo/TodoApp.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="currencyconverter" element={<Currencyconverter />} />
          <Route path="bgcolor" element={<Bgcolor />} />
          <Route path="card" element={<Card />} />
          <Route path="user" element={<User />}>
            <Route path=":userid" element={<User />} />
          </Route>
          <Route path="github" element={<Github />} />
          <Route path="pwdgen" element={<Passwordgenerator />} />
          <Route path="themeswitch" element={<ThemeSwitch />} />
          <Route path="todo" element={<TodoApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
