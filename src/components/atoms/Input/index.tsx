import React from "react";
import "./styles.scss";

interface IInput {
  name?: string;
  baseClass?: string;
  errorMesage?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  isError?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  ref?: HTMLInputElement;
  type?: string;
  imgsrc?: string;
}

export const Input: React.FC<IInput> = ({
  name,
  baseClass = "",
  errorMesage,
  label,
  value,
  onChange,
  placeholder,
  children,
  type,
  imgsrc,
}) => {
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div
      className={`${baseClass} container ${
        errorMesage ? "container--error" : ""
      }`}
    >
      {label && <label className="container__label">{label}</label>}
      <div tabIndex={0} className="container__input">
        <input
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleValueChange}
          type={type}
        />
        {errorMesage && <div className="container__image">{children}</div>}
      </div>
      {imgsrc && <img src={imgsrc} />}
      {errorMesage && <p className="container__text--error">{errorMesage}</p>}
    </div>
  );
};
