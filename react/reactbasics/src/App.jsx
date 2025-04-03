import "./App.css";
import BgColor from "./components/Bgcolor";
import Currencyconverter from "./components/Currencyconverter";
import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
