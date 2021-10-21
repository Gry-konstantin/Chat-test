import React from "react";
import "./styles.scss";
import { regex } from "../../../constants/regex";

interface IInput {
  className?: string;
  errorMesage?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  isError?: boolean;
}

export const Input: React.FC<IInput> = ({
  className = "",
  errorMesage,
  label,
  value,
  onChange,
  placeholder,
  children,
}) => {
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div
      className={`${className} container ${errorMesage && "container--error"}`}
    >
      {label && <label className="container__label">{label}</label>}
      <div tabIndex={0} className="container__input">
        <input
          value={value}
          placeholder={placeholder}
          onChange={handleValueChange}
        />
        <div className="container__image">{children}</div>
      </div>
      {errorMesage && <p className="container__text--error">{errorMesage}</p>}
    </div>
  );
};
