import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import './App.css'
import Header from "./componant/Header";
import Hero from "./componant/hero";
import Cart from "./componant/cart";
import Last from "./componant/last";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir =
      i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
       <Header/>
       <Hero/>
       <Last/>
    </>
  )
}

export default App
