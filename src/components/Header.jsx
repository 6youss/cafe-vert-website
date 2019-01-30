import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className = 'menu'>
      <ul className = 'menu-container'>
        <li className= 'menu-item'>
          <b> Café </b> Vert
        </li>
        <li className= 'menu-item'>
          Café Vert
          <b> حمية </b>
        </li>
        <li className= 'menu-item'>
          Café Vert
          <b> تعليقات العملاء </b>
        </li>
        <li className= 'menu-item'>
          Café Vert
          <b> إرشادات </b>
        </li>
        <li className= 'menu-item'>
          Café Vert
          <b> المكونات </b>
        </li>
        <li className= 'menu-item'>
          Café Vert
          <b> الصفحة الرئيسية </b>
        </li>
        <li className= 'menu-item menu-order-btn'>
          اطلب
        </li>
      </ul>
    </header>
  );
};

export default Header;