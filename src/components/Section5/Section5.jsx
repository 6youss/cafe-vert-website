import React from "react";
import "./Section5.css";
import greenBean from "./images/obj_03.png";
const Section5 = () => {
  return (
    <section className="section5">
      <div className="section5-left">
        <div>
          <h2>?Café Vert</h2>
          <p>
            {" "}
            تُعد Café Vert نوع خاص من القهوة غير المحمصة. بما أنها غير محمصة فهي
            تحتوي على مواد مضادة للأكسدة وفيتامينات وأحماض أمينية أكثر مقارنة
            بالقهوة السوداء. <h3>تظهر نتائجها بسرعة.</h3> نظرًا للمفهوم ثلاثي
            الجوانب، يظهر تأثير Café Vert في التمثيل الغذائي وتنظّم جسمك منذ
            بداية العلاج.
          </p>
        </div>
        <div className="green-bean-form">
          <img src={greenBean} alt="green bean" />
          <h4>
            <span> يُمكن تناول</span>
            <span>Café Vert مع</span>
            <span>الزبادي أو في المشروبات!</span>
          </h4>
          <span>استمتع بخسارة الوزن مع مذاق جيد!</span>
        </div>
      </div>
      <div className="section5-right" />
    </section>
  );
};

export default Section5;
