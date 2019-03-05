import React from "react";
import "./Section7.css";
import coffeeGirl from "./images/girl_coffee.png";
import normalCoffeePic from "./images/green_01.png";
import greenCoffeePic from "./images/green_02.png";

const Section7 = () => {
  return (
    <section className="section7">
      <div className="coffee-girl-container">
        <div className="coffee-girl">
          <img src={coffeeGirl} alt="coffee girl" />
        </div>
        <div className="section7-body">
          <h3>Café Vert</h3>
          <h2>يتميز عند مقارنته بقرائنه</h2>
          <p>
            بينما معظم أنواع القهوة الخضراء الموجودة في السوق أو في الأعشاب نسبة
            حمض الكلوروجينيك بها 20% أو أقل، أما في Café Vert فهي أكثر من 70%.
            وهذا أكثر ما يميز Café Vert. بينما تحتاج 8 أو 9 أكواب من أنواع
            القهوة الخضراء الأخرى للوصول إلى نتائج، كوبين فقط من Café Vert كافية
            للوصل إلى النتائج المطلوبة. قد يسبب تناول 8 أو 9 أكواب من أنواع
            القهوة الخضراء الأخرى للحصول على نفس تأثير Café Vert تسمم الكافيين.
            كوبين من Café Vert يوميًا بهما كمية الكافيين ذاتها الموجودة في كوب
            قهوة تركية، إضافة إلى أن حرق الدهون والشعور بالامتلاء يبدأ في اليوم
            الأول من العلاج. يتم تسليم Café Vert في برطامان زجاج حيث تُخلط مع
            الأعشاب الأخرى، يُعزز تناول المنتج عملية التمثيل الغذائي من اليوم
            الأول للعلاج. تساعد Café Vert في تخلص الجسم من الوذمات والسموم؛
            وبالتالي يبدأ التحول إلى أسلوب حياة أكثر صحة.
          </p>
        </div>
      </div>

      <div className="section7-green">
        <div className="section7-green-images">
          <div className="green-coffee-pic">
            <img src={greenCoffeePic} alt="green coffee" />
            <span className="green-coffee-title"> Café Vert </span>
          </div>
          <div className="normal-coffee-pic">
            <img src={normalCoffeePic} alt="normal coffee" />
            <span className="green-coffee-title"> القهوة العادية </span>
          </div>
        </div>

        <div className="section7-green-titles">
          <h2>تحتوي Café Vert على حمض الكلوروجينيك بنسبة 50% أكثر</h2>
          <h3>مقارنة بأنواع القهوة الأخرى</h3>
          <h4>يساعد حمض الكلوروجينيك في خسارة الوزن.</h4>
        </div>
      </div>
      <div className="section7-black">
        <h2>يُوصي المتخصصون بـ Café Vert!</h2>
        <h3>
          يُوصى معظم المتخصصين بـ Café Vert لخسارة الوزن، ولذا جربها الآن وشاهد
          الفارق!
        </h3>
      </div>
    </section>
  );
};

export default Section7;
