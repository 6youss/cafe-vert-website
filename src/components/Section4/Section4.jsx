import React from "react";
import "./Section4.css";
import prodPic from "../Section1/images/prod_three.png";

const Section4 = () => {
  return (
    <section className="section4">
      <div className="prod-pic-4">
        <img src={prodPic} alt="product" />
      </div>
      <div className="prod-info-4">
        <div className="">
          <div className="price_info_box">
            <h3>4+1 عبوات</h3>
            <h4>
              <span className="green-rounded">الدفع عند الاستلام دينار </span>
            </h4>
          </div>
          <div className="price_box neucha">
            <b>
              <span>15000</span> DZD
            </b>
            <p> التوصيل مجانًا </p>
          </div>
          <div className="btn_box">
            <button className="order-button-form">اطلب الآن</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
