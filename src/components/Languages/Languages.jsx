import React, { useState } from "react";
import "./Languages.css";
import algerie from "./algerie.png";
import france from "./france.png";

function Languages(props) {

  const [selectedLanguage, setSelectedLanguage] = useState(france);
  
  function handleClick(){
    if(selectedLanguage === france){
      setSelectedLanguage(algerie);
      props.changeLanguage();
    }else{
      setSelectedLanguage(france);
      props.changeLanguage();
    }
  }

  return (
    <img className="select-lang" src={selectedLanguage} alt="select lang" onClick={handleClick}/>
  );
}
export default Languages;
