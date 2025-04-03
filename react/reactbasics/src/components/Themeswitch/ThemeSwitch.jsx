import React, { useEffect, useState } from "react";
import ThemeBtn from "./ThemeBtn";
import BasicCard from "./BasicCard";
import { ThemeProvider } from "../../Contexts/Theme";

function ThemeSwitch() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
    document.documentElement.classList.remove("dark"); // Remove dark mode
    localStorage.setItem("theme", "light"); // Save preference
  };

  const darkTheme = () => {
    setThemeMode("dark");
    document.documentElement.classList.add("dark"); // Enable dark mode
    localStorage.setItem("theme", "dark"); // Save preference
  };
  // const lightTheme = () => {
  //   setThemeMode("light");
  // };
  // const darkTheme = () => {
  //   setThemeMode("dark");
  // };
  // useEffect(() => {
  //   console.log("Theme changed to:", themeMode);
  //   document.querySelector("html").classList.remove("dark", "light");
  //   document.querySelector("html").classList.add(themeMode);
  // }, [themeMode]);
  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", themeMode === "dark");
  // }, [themeMode]);
  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);
  

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-sm">
          <ThemeBtn />
          <BasicCard />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ThemeSwitch;
