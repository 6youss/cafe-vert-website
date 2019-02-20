import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import {LocaleContext} from './LocaleContext';
import {locales} from './LocaleContext';
function App () {

  const [locale,setLocale] = useState(locales.ar);

  const changeLanguage = ()=>{
    if(locale === locales.fr){
      setLocale(locales.ar);
    }else{
      setLocale(locales.fr);
    }
  }
  
  return (
    <LocaleContext.Provider value={locale}>
      <Header changeLanguage = {changeLanguage} />
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
    </LocaleContext.Provider >
  );

}

export default App;
