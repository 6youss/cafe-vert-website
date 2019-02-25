import React, { useState } from "react";
import "./Order.css";
import threeProdPic from "../Section1/images/prod_three.png";
import oneProdPic from "../Section3/images/prod.png";

import Select from "../CustomSelect/CustomSelect";
import Input from "../Input/Input";

const Order = () => {
  const [shownPic, setShownPic] = useState(oneProdPic);

  const options = [
    { value: 1, label: "عبوة واحدة" },
    { value: 2, label: "2+1 عبوات" },
    { value: 3, label: "3+1 عبوات" }
  ];

  return (
    <form className="order">
      <div className="order-left">
        <div className="order-left-image">
          <img src={shownPic} alt="" />
        </div>
        <div className="order-left-price neucha">
          <h4> {" 9000 DZD التوصيل مجانًا"} </h4>
        </div>
      </div>
      <div className="order-right">
        <div className="order-select-container">
          <Select placeholder={options[0].label} options={options} />
        </div>
        <Input disabled={true} placeholder={"الجزائر"} type="text" />
        <Input placeholder={"الإسم"} type="text" />
        <Input placeholder={"رقم الهاتف"} type="text" />
        <button className="order-button-form"> اطلب الآن </button>
      </div>
    </form>
  );
};

export default Order;
