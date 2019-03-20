import React, { useContext, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Header.css";
import { LocaleContext } from "../../LocaleContext";
import Languages from "../Languages/Languages";
import {
  Events,
  scroller
} from "react-scroll";
function Header(props) {
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const locale = useContext(LocaleContext);
  useEffect(didMount);

  function didMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });

    window.addEventListener("resize", resize);
    resize();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("resize", resize);
    };
  }

  function resize() {
    let innerWidth = window.innerWidth <= 1080;
    if (innerWidth !== isMobileSize) {
      setIsMobileSize(innerWidth);
      setShowMenu(!innerWidth);
    }
  }

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  function MenuItems() {
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
          <b> {locale.menuItem2} </b>
        </li>
        <li className="menu-item">
          Café Vert
          <b> {locale.menuItem3} </b>
        </li>
        <li className="menu-item">
          Café Vert
          <b> {locale.menuItem4} </b>
        </li>
        <li className="menu-item">
          Café Vert
          <b> {locale.menuItem5} </b>
        </li>

        <li
          className="menu-item menu-order-btn"
          onClick={() => {
            scroller.scrollTo('orderx', {
              duration: 500,
              delay: 0,
              smooth: 'easeInOutQuart'
            });
            //window.location.href = "#order";
          }}
        >
          {locale.menuItem6}
        </li>
      </ul>
    );
  }

  return (
    <header className="menu">
      <Languages changeLanguage={props.changeLanguage} />
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
