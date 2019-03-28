import React from "react";
import "./Input.css";
const Input = ({
  name,
  type,
  placeholder,
  handlechange,
  error,
  init,
  ...rest
}) => {
  console.log(error);
  const err = error ? " error-style" : "";
  return (
    <div>
      <div className="input-container">
        {error && <span className={"input-icon"}>!</span>}
        <input
          {...rest}
          className={"perso-input-text" + err}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handlechange} 
          defaultValue={init}
        />
        {error && <p className="input-error-text">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
