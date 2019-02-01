import React from "react";
import "./Body.css";
import girlsImg from "./images/girls.png";
import prodBox from "./images/prod_three.png";

const Body = () => {
  const orderClickHandler = ()=>{
  }
  return (
    <section className="body-container">
      <div className="girls">
        <img src={girlsImg} alt="girls pic" />
      </div>
      <div className="body-poster">
        <h3>حرق الدهون</h3>
        <h2>شراب</h2>
        <h1>قهوة!</h1>
        <div className="fast_eff">
          <h4>أكثر فعالية وأسرع 5 مرات</h4>
        </div>
        <ul className="fast_item">
          <li>
            يساعد في خسارة الوزن.
            <p> يساعد في رشاقة الجسم وخسارة الوزن. </p>
          </li>
          <li>
            في حرق الدهون عن الطرق العادية.
            <p> يقي من المشكلات مثل السيلوليت. </p>
          </li>
          <li>
            ينظم التمثيل الغذائي.
            <p> يساعدك في خسارة الوزن. </p>
          </li>
          <li>
            يساعد في الوقاية من الأمراض.
            <p> يقوي جهاز المناعة. </p>
          </li>
        </ul>
        <div className="prod-info-box">
          <div className="prod-info-img">
            <img src={prodBox} alt="prod pic"/>
            <button className='order-button' onClick={orderClickHandler}>أطلب الآن</button>
          </div>
          <div className="prod-info-price">
            <h5>دينار جزائري</h5>
            <div className="price_box neucha">
              <span>3990</span> DZD
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
