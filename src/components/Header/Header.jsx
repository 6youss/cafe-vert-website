import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./Header.css";
import { LocaleContext } from "../../LocaleContext";

class Header extends Component {
  state = {
    isMobileSize: false,
    showMenu: true
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  resize() {
    let innerWidth = window.innerWidth <= 850;
    if (innerWidth !== this.state.isMobileSize) {
      this.setState({
        isMobileSize: innerWidth,
        showMenu: !innerWidth
      });
    }
  }

  showMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  MenuItems = () => {
    return (
      <LocaleContext.Consumer>
        {locale => (
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
            <li className="menu-item menu-order-btn">اطلب</li>
          </ul>
        )}
      </LocaleContext.Consumer>
    );
  };
  render() {
    return (
      <header className="menu">
        {this.state.isMobileSize && (
          <div className="nav-toggle" onClick={this.showMenu.bind(this)}>
            <div>
              <i />
              <i />
              <i />
            </div>
          </div>
        )}
        <CSSTransition
          key={1}
          in={this.state.showMenu}
          classNames="menu-animation"
          timeout={400}
          unmountOnExit
        >
          <this.MenuItems />
        </CSSTransition>
      </header>
    );
  }
}
export default Header;
