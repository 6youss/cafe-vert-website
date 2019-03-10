import React, { useState,useContext } from "react";
import "./Order.css";
import threeProdPic from "../Section1/images/prod_three.png";
import oneProdPic from "../Section3/images/prod.png";

import Select from "../CustomSelect/CustomSelect";
import Input from "../Input/Input";
import Swal from "sweetalert2";
import { LocaleContext } from "../../LocaleContext";

const Order = () => {
  let [shownPic, setShownPic] = useState(oneProdPic);

  let [fields, setFields] = useState({
    costumerName: "",
    costumerPhone: "",
    quantity: 1,
    CostumerWilaya: 1
  });
  const locale = useContext(LocaleContext);
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

  const productOptions = [
    { label: locale.oneProd, target: { value: 1, name: "quantity" } },
    { label: locale.twoProd, target: { value: 2, name: "quantity" } },
    { label: locale.threeProd, target: { value: 3, name: "quantity" } }
  ];
  
  const wilayaOptions = [
    { label: "Adrar", target: { value: 1, name: "CostumerWilaya" } },
    { label: "Chlef", target: { value: 2, name: "CostumerWilaya" } },
    { label: "Laghouat", target: { value: 3, name: "CostumerWilaya" } },
    { label: "Oum El Bouaghi", target: { value: 4, name: "CostumerWilaya" } },
    { label: "Batna", target: { value: 5, name: "CostumerWilaya" } },
    { label: "Béjaïa", target: { value: 6, name: "CostumerWilaya" } },
    { label: "Biskra", target: { value: 7, name: "CostumerWilaya" } },
    { label: "Béchar", target: { value: 8, name: "CostumerWilaya" } },
    { label: "Blida", target: { value: 9, name: "CostumerWilaya" } },
    { label: "Bouira", target: { value: 10, name: "CostumerWilaya" } },
    { label: "Tamanrasset", target: { value: 11, name: "CostumerWilaya" } },
    { label: "Tébessa", target: { value: 12, name: "CostumerWilaya" } },
    { label: "Tlemcen", target: { value: 13, name: "CostumerWilaya" } },
    { label: "Tiaret", target: { value: 14, name: "CostumerWilaya" } },
    { label: "Tizi Ouzou", target: { value: 15, name: "CostumerWilaya" } },
    { label: "Alger", target: { value: 16, name: "CostumerWilaya" } },
    { label: "Djelfa", target: { value: 17, name: "CostumerWilaya" } },
    { label: "Jijel", target: { value: 18, name: "CostumerWilaya" } },
    { label: "Sétif", target: { value: 19, name: "CostumerWilaya" } },
    { label: "Saïda", target: { value: 20, name: "CostumerWilaya" } },
    { label: "Skikda", target: { value: 21, name: "CostumerWilaya" } },
    { label: "Sidi Bel Abbès", target: { value: 22, name: "CostumerWilaya" } },
    { label: "Annaba", target: { value: 23, name: "CostumerWilaya" } },
    { label: "Guelma", target: { value: 24, name: "CostumerWilaya" } },
    { label: "Constantine", target: { value: 25, name: "CostumerWilaya" } },
    { label: "Médéa", target: { value: 26, name: "CostumerWilaya" } },
    { label: "Mostaganem", target: { value: 27, name: "CostumerWilaya" } },
    { label: "M'Sila", target: { value: 28, name: "CostumerWilaya" } },
    { label: "Mascara", target: { value: 29, name: "CostumerWilaya" } },
    { label: "Ouargla", target: { value: 30, name: "CostumerWilaya" } },
    { label: "Oran", target: { value: 31, name: "CostumerWilaya" } },
    { label: "El Bayadh", target: { value: 32, name: "CostumerWilaya" } },
    { label: "Illizi", target: { value: 33, name: "CostumerWilaya" } },
    {
      label: "Bordj Bou Arreridj",
      target: { value: 34, name: "CostumerWilaya" }
    },
    { label: "Boumerdès", target: { value: 35, name: "CostumerWilaya" } },
    { label: "El Tarf", target: { value: 36, name: "CostumerWilaya" } },
    { label: "Tindouf", target: { value: 37, name: "CostumerWilaya" } },
    { label: "Tissemsilt", target: { value: 38, name: "CostumerWilaya" } },
    { label: "El Oued", target: { value: 39, name: "CostumerWilaya" } },
    { label: "Khenchela", target: { value: 40, name: "CostumerWilaya" } },
    { label: "Souk Ahras", target: { value: 41, name: "CostumerWilaya" } },
    { label: "Tipaza", target: { value: 42, name: "CostumerWilaya" } },
    { label: "Mila", target: { value: 43, name: "CostumerWilaya" } },
    { label: "Aïn Defla", target: { value: 44, name: "CostumerWilaya" } },
    { label: "Naâma", target: { value: 45, name: "CostumerWilaya" } },
    { label: "Témouchent", target: { value: 46, name: "CostumerWilaya" } },
    { label: "Ghardaïa", target: { value: 47, name: "CostumerWilaya" } },
    { label: "Relizane", target: { value: 48, name: "CostumerWilaya" } }
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
            onChange={handleChange}
            defaultValue={productOptions[0].value}
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
            onChange={handleChange}
            defaultValue={wilayaOptions[0].value}
            placeholder={wilayaOptions[0].label}
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
