import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Body from './components/Body/Body';
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
        <Body/>
        <button onClick={this.changeLanguage}>change language</button>
      </LocaleContext.Provider >
    );
  }
}

export default App;
