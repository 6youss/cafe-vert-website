import React from "react";
import "./Section6.css";
import iconsImg from "./images/icons_01.png";
import womanImg from "./images/women.png";
const Section6 = () => {
  return (
    <section className="section6">
      <div className="section6-1">
        <h2>خسارة الوزن ليست حلمًا على الإطلاق!</h2>
        <h3>
          تفضل السيدات اللاتي ترغبن في خسارة الوزن الوصول إلى الشكل المثالي مع
          <span> Café Vert. </span>
        </h3>
      </div>

      <div className="section6-2">
      <div className="section6-2-body">

      </div>
        <div className="section6-2-circle">
          <h4>أليس وقت</h4>
          <h3>حرق الدهون</h3>
          <h4>الآن؟</h4>
        </div>

        <h3>
          يُباع Café Vert
          <span> في الجزائر الآن! </span>
        </h3>
        <h2>إرشادات</h2>
        <p>
          ابدأ يومك مع فنجان Café Vert قبل 15 دقيقة من وجبة الإفطار. إذا كنت
          ترغب في ذلك، يُمكنك تحضير Café Vert على الطريقة التركية. (لست مضطرًا
          لشرب القهوة المترسبة في الكوب). أو إذا كنت تفضل ذلك، يُمكنك خلط ملعقة
          صغير من Café Vert غير المحمصة مع 2-3 ملعقة كبيرة من الزبادي للتناول.
          في المساء وقبل ساعتين من العشاء، تناول Café Vert مرة أخرى مع الزبادي
          (اخلط ملعقة صغيرة من Café Vert مع 2-3 ملعقة كبيرة من الزبادي. يُمكنك
          زيادة كمية Café Vert حسب عملية التمثيل الغذائي) أو قهوة على الطريقة
          التركية (لست مضطرًا لشرب القهوة المترسبة في الكوب).
        </p>
        <div className="go-box">
          <h4>
            <span> ابدأ خسارة وزنك على الفور! </span>
          </h4>
          <h5>
            <span> جرّب الآن! </span>
          </h5>
        </div>
        <img className="icons-container-woman" src={womanImg} alt="icons" />
      </div>

      <div className="icons-container">
        <img src={iconsImg} alt="icons" />
      </div>
      <div className="section6-3" />
      <div className="section6-4" />
    </section>
  );
};

export default Section6;
