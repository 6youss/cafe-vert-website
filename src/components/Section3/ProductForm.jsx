import React from "react";
import "./ProductForm.css";
import prodPic from "./images/prod.png"

const ProductForm = () => {
  return (
    <div className="product-form">
      <div className="pf-head">
        <div className="pf-pay">
          <div><b> Café </b> Vert</div>
          <h5>الدفع عند الاستلام </h5>
        </div>
        <div className="pf-title">
          <h3>عبوة واحدة</h3>
        </div>
      </div>
      <div className="pf-body">
        <img className="pf-picture" src={prodPic} alt="product"/>
      </div>
    </div>
  );
};

export default ProductForm;
