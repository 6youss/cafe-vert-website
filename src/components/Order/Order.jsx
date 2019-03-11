import React, { useState,useContext } from "react";
import "./Order.css";
import threeProdPic from "../Section1/images/prod_three.png";
import oneProdPic from "../Section3/images/prod.png";

import Select from "../CustomSelect/CustomSelect";
import Input from "../Input/Input";
import Swal from "sweetalert2";
import { LocaleContext } from "../../LocaleContext";
import wilayaOptions from "./options";

const Order = () => {
  let [shownPic, setShownPic] = useState(oneProdPic);

  let [fields, setFields] = useState({
    costumerName: "",
    costumerPhone: "",
    quantity: 1,
    CostumerWilaya: 1
  });
  const locale = useContext(LocaleContext);

  let [selectedProduct, setSelectedProduct] = useState({ label: locale.oneProd, value: 1 });
  let [selectedWilaya, setSelectedWilaya] = useState(wilayaOptions[0]);

  
  function submit(e) {
    e.preventDefault();
    // formData.append("costumerName", "mehdi");    
    var formData = new FormData();
    formData.append("costumerWilaya", selectedWilaya.value);
    formData.append("quantity", selectedProduct.value);
    Object.keys(fields).forEach(fieldName => {
      formData.append(fieldName, fields[fieldName]);
    });

    let now = new Date();
    formData.append("orderDate", now.toISOString().split("T")[0]);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    Swal.fire({
      confirmButtonColor: "#89b92f",
      onOpen: () => {
        Swal.showLoading();

        return fetch(`http://localhost:80/greenTea/routes/php/sendOrders.php`, {
          method: "POST",
          body: formData
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }

            Swal.hideLoading();
            Swal.update({
              type: "success",
              text:
                "Merci pour la commande, nous allons vous appeler sur le numéro entré"
            });

            return response.json();
          })
          .catch(error => {
            Swal.update({ type: "error", confirmButtonColor: "#f27474" });
            Swal.hideLoading();
            Swal.showValidationMessage(`${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading()
    });

    // fetch(`http://localhost:80/greenTea/routes/php/sendOrders.php`, {
    //   method: "POST",
    //   body: formData
    // })
    //   .then(response => response.json())
    //   .then(json => {
    //     Swal.fire({
    //       title: "Error!",
    //       text: "Do you want to continue",
    //       type: "error",
    //       confirmButtonText: "Cool"
    //     });

    //     console.log(json);
    //   })
    //   .catch(error => {
    //     Swal.fire({
    //       title: "Error!",
    //       text: error,
    //       type: "error",
    //       confirmButtonText: "Cool"
    //     });
    //   });
  }

  function handleChange(event) {
    let new_fields = fields,
      //errors = this.state.errors,
      fieldName = event.target.name,
      //format as first letter upper case
      fieldValue = event.target.value;
    new_fields[fieldName] = fieldValue;

    // if(errors[fieldName]){
    //     delete errors[fieldName];
    // }
    // switch (fieldName){
    //     case "firstName":
    //         if(fieldValue.length!==0 && fieldValue.length<5) {
    //             errors[fieldName]="First name must be longer then 5 letters"
    //         }
    //     break;
    //     case "lastName":
    //         if(fieldValue.length!==0 && fieldValue.length<5) {
    //             errors[fieldName]="Last name must be longer then 5 letters"
    //         }
    //     break;
    //     default:
    //     break;
    // }
    setFields(new_fields);
  }

  function handleSelect(value){
    setSelectedProduct(value);
  }
  function handleWilaya(value){
    setSelectedWilaya(value);
  }

  const productOptions = [
    { label: locale.oneProd , value: 1 },
    { label: locale.twoProd , value: 2 },
    { label: locale.threeProd,value: 3 }
  ];

  return (
    <form id="order" className="order" onSubmit={submit}>
      <div className="order-left">
        <div className="order-left-image">
          <img src={shownPic} alt="" />
        </div>
        <div className="order-left-price neucha">
          <h4> {" 9000 DZD "+locale.freeDelivery} </h4>
        </div>
      </div>
      <div className="order-right">
        <div className="order-select-container">
          <Select
            onChange={handleSelect}
            value={selectedProduct}
            placeholder={productOptions[0].label}
            options={productOptions}
          />
        </div>
        <Input
          handlechange={handleChange}
          disabled={true}
          placeholder={locale.algeria}
          type="text"
        />
        <div className="order-select-container">
          <Select
            onChange={handleWilaya}
            value={selectedWilaya}
            placeholder={selectedWilaya.label}
            options={wilayaOptions}
          />
        </div>
        <Input
          name="costumerName"
          handlechange={handleChange}
          placeholder={locale.name}
          type="text"
        />
        <Input
          name="costumerPhone"
          handlechange={handleChange}
          placeholder={locale.phoneNumber}
          type="text"
        />
        <button className="order-button-form"> {locale.orderNow} </button>
      </div>
    </form>
  );
};

export default Order;
