import React, { useContext } from "react";
import { LocaleContext } from "../../LocaleContext";
import { scroller } from "react-scroll";

function Button({ className }) {
  const locale = useContext(LocaleContext);

  return (
    <button
      className={className}
      onClick={() => {
        scroller.scrollTo("orderx", {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart"
        });
      }}
    >
    {locale.orderNow}
    </button>
  );
}
export default Button;
