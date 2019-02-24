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
    <section className="order">
      <div className="order-left">
        <img src={shownPic} alt="" />
      </div>
      <div className="order-right">
        <Select  placeholder={options[0].label} options={options} />
        <Input  placeholder={options[0].label} type="text" />
      </div> 
    </section>
  );

};

export default Order;
