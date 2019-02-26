import React, { useContext, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Header.css";
import { LocaleContext } from "../../LocaleContext";
import Languages from '../Languages/Languages'

function Header(props) {
  
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const locale = useContext(LocaleContext);
  useEffect(didMount);

  function didMount() {
    window.addEventListener("resize",resize);
    resize();
    return ()=>{
      window.removeEventListener("resize",resize);
    }
  }

  function resize() {
    let innerWidth = window.innerWidth <= 850;
    if (innerWidth !== isMobileSize) {
      setIsMobileSize(innerWidth);
      setShowMenu(!innerWidth);
    }
  }

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  function MenuItems () {
    return (
      <ul className={"menu-container"}>
        <li className="menu-item logo-box">
          <b> Café </b> Vert
        </li>
        <li className="menu-item">
          {locale.title}
          <b> {locale.menuItem1} </b>
        </li>
        <li className="menu-item">
          Café Vert
          <b> تعليقات العملاء </b>
        </li>
        <li className="menu-item">
          Café Vert
          <b> إرشادات </b>
        </li>
        <li className="menu-item">
          Café Vert
          <b> المكونات </b>
        </li>
        <li className="menu-item">
          Café Vert
          <b> الصفحة الرئيسية </b>
        </li>
        <li onClick={()=>{
          window.location.href='#order';
        }} className="menu-item menu-order-btn">اطلب</li>
      </ul>
    );
  };

  
  return (
    <header className="menu">
      <Languages changeLanguage = {props.changeLanguage}/>
      {isMobileSize && (
        <div className="nav-toggle" onClick={handleShowMenu}>
          <div>
            <i />
            <i />
            <i />
          </div>
        </div>
      )}
      <CSSTransition
        key={1}
        in={showMenu}
        classNames="menu-animation"
        timeout={400}
        unmountOnExit
      >
        <MenuItems />
      </CSSTransition>
    </header>
  );
}
export default Header;
