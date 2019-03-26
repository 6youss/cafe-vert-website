import React, { useState, lazy, Suspense } from "react";
import "./App.css";

import Header from "./components/Header/Header";
//import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import Section6 from "./components/Section6/Section6";
import Section7 from "./components/Section7/Section7";
import Order from "./components/Order/Order";
import Carousel from "./components/Carousel/Carousel";
import { LocaleContext } from "./LocaleContext";
import { locales } from "./LocaleContext";

const Section1 = lazy(() => import("./components/Section1/Section1"));

function App() {
  const [locale, setLocale] = useState(locales.ar);

  const changeLanguage = () => {
    if (locale === locales.fr) {
      setLocale(locales.ar);
    } else {
      setLocale(locales.fr);
    }
  };

  return (
    <LocaleContext.Provider value={[locale,changeLanguage]}>
      <Suspense fallback={<Loading />}>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Carousel />
        <Section3 />
        <Order />
      </Suspense>
    </LocaleContext.Provider>
  );
}

const loading_styles = {
  container: {
    height: "100%",
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    color: "#89b92f"
  }
};
function Loading() {
  return (
    <div style={loading_styles.container}>
      <p style={loading_styles.content}>Loading...</p>
    </div>
  );
}

export default App;
