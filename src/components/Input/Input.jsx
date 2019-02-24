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
      </div>
    </div>
  );
};

export default Input;
