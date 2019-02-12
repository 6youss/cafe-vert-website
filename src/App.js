import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import {LocaleContext} from './LocaleContext';
import {locales} from './LocaleContext';
class App extends Component {
  state = {
    locale:locales.ar
  }
  changeLanguage = ()=>{
    this.setState({
      locale:locales.fr
    });
  }
  render() {
    
    return (
      <LocaleContext.Provider value={this.state.locale}>
        <Header/>
        <Section1/>
        <Section2/>
        {/* <button onClick={this.changeLanguage}>change language</button> */}

      </LocaleContext.Provider >
    );
  }
}

export default App;
