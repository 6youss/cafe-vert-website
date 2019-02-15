import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import {LocaleContext} from './LocaleContext';
import {locales} from './LocaleContext';
function App () {

  const [locale,setLocale] = useState(locales.ar);

  const changeLanguage = ()=>{
    setLocale(locales.fr);
  }
  
  return (
    <LocaleContext.Provider value={locale}>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <button onClick={changeLanguage}>change language</button>

    </LocaleContext.Provider >
  );

}

export default App;
