import React from "react";
import "./Section5.css";
import greenBean from "./images/obj_03.png";
import greenBean2 from "./images/obj_05.png";
import prodPic from "../Section3/images/prod.png";
import woman from "./images/women_tea.png";
import checkPic from "../Section1/images/check_03.png";
const Section5 = () => {
  return (
    <section className="section5">
      <div className="section5-1">
        <div className="section5-left">
          <div>
            <h2>?Café Vert</h2>
            <p>
              {" "}
              تُعد Café Vert نوع خاص من القهوة غير المحمصة. بما أنها غير محمصة
              فهي تحتوي على مواد مضادة للأكسدة وفيتامينات وأحماض أمينية أكثر
              مقارنة بالقهوة السوداء. <h3>تظهر نتائجها بسرعة.</h3> نظرًا للمفهوم
              ثلاثي الجوانب، يظهر تأثير Café Vert في التمثيل الغذائي وتنظّم جسمك
              منذ بداية العلاج.
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
          <div>
            <h3>ناولها باستمرار لنتائج تدوم لفترة طويلة.</h3>
            <p>
              يجب تناول Café Vert بانتظام لخسارة الوزن الزائد وتعود دومًا إلى
              شكلك المثالي.
              <h3>كيف يساعدك Café Vert في خسارة وزنك؟</h3>
              يساعدك Café Vert في خسارة وزنك بتعزيز التمثيل الغذائي مع حمض
              الكلوروجينيك الموجود في محتواها.
              <br />
              حمض الكلوروجينيك، يُنصح بشدة للذين يريدون خسارة الوزن، كما يقي
              الجسم ضد عدد كبير من الأمراض الأيضية المزمنة مثل السكر، وأمراض
              القلب والأوعية الدموية، والسرطان، وكذلك بعض الاضطرابات العصبية
              الخطيرة بما في ذلك مرض الزهايمر ومرض باركنسون.
            </p>
          </div>
        </div>
        <div className="section5-right">
          <div className="section5-right-woman">
            <img src={woman} alt="woman tea" />
            <div>
              <h3>عبير</h3>
              <h2>النحافة!</h2>
              <h4>جرّب الآن!</h4>
              <p>
                ابدأ يومك مع فنجان Café Vert قبل 15 دقيقة من وجبة الإفطار. إذا
                كنت ترغب في ذلك، يُمكنك تحضير Café Vert على الطريقة التركية.
              </p>
            </div>
          </div>

          <div className="section5-right-bg">
            <div className="section5-right-titles">
              <div>
                <img src={checkPic} alt="check" />
                <p>يحرق الدهون. </p>
              </div>
              <div>
                <img src={checkPic} alt="check" />
                <p>يساعد في خسارة الوزن. </p>
              </div>
              <div>
                <img src={checkPic} alt="check" />
                <p>يقي من الأمراض. </p>
              </div>
              <div>
                <img src={checkPic} alt="check" />
                <p>ينظم التمثيل الغذائي. </p>
              </div>
            </div>
            <div className="section5-right-prod">
              <div className="section5-right-prod-price neucha">
                <p>3990 DZD</p>
                <button className="order-button-form">اطلب الآن</button>
              </div>
              <div className="section5-right-prod-img">
                <img src={prodPic} alt="product" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section5-2">
        <div className="section5-2-header">
          <h3>التخلص من السموم عن طريق شرب القهوة</h3>
          <h2>حرق الدهون عن طريق شرب القهوة</h2>
        </div>
        <div className="section5-2-body">
          <div className="section5-2-body-left">
            <h3> <b>Café</b> Vert </h3>
            <p>
              تناول يوميًا قبل الإفطار وبعد ساعتين من العشاء في المساء... تنشّط
              الجسم عن طريق توفير الطاقة. تزيد معدل حرق الدهون 5 مرات. تقلل
              الشهية بإعطاء الشعور بالامتلاء. لها خصائص قوية مضادة للأكسدة. جيدة
              خاصة لأولئك الذين يعانون ينظِّم ضغط الدم عند تناوله بانتظام. تقلل
              من خطر الإصابة بالمرض بحماية الجهاز المناعي للجسم. يسرع كل من
              والكافيين حرق الدهون ويساعدان في خسارة الوزن.
            </p>
          </div>
          <div className="section5-2-body-right">
            <h3>المتخصصون</h3>
            <h4>يوصون به</h4>
            <h3>لنتائجه الفعالة</h3>
            <button className="order-button-form">اطلب الآن</button>
            <img src={greenBean2} alt="green bean"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
