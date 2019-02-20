import React from "react";
import "./ProductForm.css";
import prodPic from "./images/prod.png";
import threeProdPic from "../Section1/images/prod_three.png";

const ProductForm = ({count}) => {
  let countClass;
  let countPic;
  let titleText;
  let priceText;
  switch(count){
    case 2:
      countClass = "two-products"
      countPic = prodPic;
      titleText = "2+1 عبوات"
      priceText = "9000 DZD"
      break;
    case 3:
      countClass = "three-products"
      countPic = threeProdPic;
      titleText = "3+1 عبوات"
      priceText = "12000 DZD"
      break;
    
    default:
      countClass="";
      countPic = prodPic;
      titleText = "عبوة واحدة"
      priceText = "3990 DZD"
      break;
  }

  return (
    <div className="product-form">
      <div className="pf-head">
        <div className="pf-pay">
          <div>
            <b> Café </b> Vert
          </div>
          <h5 className="green-rounded">الدفع عند الاستلام </h5>
        </div>
        <div className="pf-title">
          <h3>{titleText}</h3>
        </div>
      </div>
      <div className="pf-body neucha">
        <div className={"pf-picture "+countClass}>
          <img src={countPic} alt="product" />
        </div>
        <b>
          {priceText}
          {count > 1 &&
            <span> التوصيل مجانًا</span>
          }
        </b>
        <button className="order-button-form">أطلب الآن</button>
      </div>
    </div>
  );
};

export default ProductForm;
