import React, { useContext } from "react";
import { LocaleContext } from "../../LocaleContext";
import { ProductContext } from "../../App";
import { scroller } from "react-scroll";

function Button({ className , productCount }) {
  const [locale] = useContext(LocaleContext);

  const productOptions = [
    { label: locale.oneProd, value: 1 },
    { label: locale.twoProd, value: 2 },
    { label: locale.threeProd, value: 3 }
  ];

  const [selectedProduct , setSelectedProduct] = useContext(ProductContext);

  return (
    <button
      className={className}
      onClick={() => {
        scroller.scrollTo("orderx", {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart"
        });
        setSelectedProduct( productOptions[productCount] );
      }}
    >
    {locale.orderNow}
    </button>
  );
}
export default Button;
