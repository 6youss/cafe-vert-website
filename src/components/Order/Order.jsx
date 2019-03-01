import React, { useState } from "react";
import "./Order.css";
import threeProdPic from "../Section1/images/prod_three.png";
import oneProdPic from "../Section3/images/prod.png";

import Select from "../CustomSelect/CustomSelect";
import Input from "../Input/Input";
import Swal from "sweetalert2";

const Order = () => {
  let [shownPic, setShownPic] = useState(oneProdPic);
  let [fields, setFields] = useState({
    costumerName: "",
    costumerPhone: "",
    quantity: 1
  });

  function submit(e) {
    e.preventDefault();
    // formData.append("costumerName", "mehdi");
    // formData.append("costumerPhone", "0781630358");
    // formData.append("quantity", "3");
    var formData = new FormData();
    Object.keys(fields).forEach(fieldName => {
      formData.append(fieldName, fields[fieldName]);
    });

    let now = new Date();
    formData.append("orderDate", now.toISOString().split("T")[0]);

    Swal.fire({
      confirmButtonColor: "#89b92f",
      onOpen: () => {
        Swal.showLoading();

        return fetch(`http://localhost:80/greenTea/routes/php/sendOrders.php`, {
          method: "POST",
          body: formData
        })
          .then(response => {
            console.log(response);

            if ( ! response.ok ) {
              throw new Error(response.statusText);
            }
            
            Swal.hideLoading();
            Swal.update({ type: "success", text: "Merci pour la commande, nous allons vous appeler sur le numéro entré" });
            
            return response.json();
          })
          .catch(error => {
            Swal.update({ type: "error" });
            Swal.hideLoading();
            Swal.showValidationMessage(`Request failed: ${error}`);
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

  const options = [
    { value: 1, label: "عبوة واحدة", target: { name: "quantity" } },
    { value: 2, label: "2+1 عبوات", target: { name: "quantity" } },
    { value: 3, label: "3+1 عبوات", target: { name: "quantity" } }
  ];

  return (
    <form id="order" className="order" onSubmit={submit}>
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
          <Select
            onChange={handleChange}
            defaultValue={options[0].value}
            placeholder={options[0].label}
            options={options}
          />
        </div>
        <Input
          handlechange={handleChange}
          disabled={true}
          placeholder={"الجزائر"}
          type="text"
        />
        <Input
          name="costumerName"
          handlechange={handleChange}
          placeholder={"الإسم"}
          type="text"
        />
        <Input
          name="costumerPhone"
          handlechange={handleChange}
          placeholder={"رقم الهاتف"}
          type="text"
        />
        <button className="order-button-form"> اطلب الآن </button>
      </div>
    </form>
  );
};

export default Order;
