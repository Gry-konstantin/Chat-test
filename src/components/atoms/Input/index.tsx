import React from "react";
import "./styles.scss";
import { ReactComponent as Refresh } from "../../../assets/refresh.svg";

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
  onClick?: () => void;
  tabIndex?: number;
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
  tabIndex,
  imgsrc,
  onClick,
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
      <div className="container__input">
        <input
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleValueChange}
          type={type}
          tabIndex={tabIndex}
        />
        {errorMesage && <div className="container__image">{children}</div>}
      </div>
      {imgsrc && (
        <div className="captcha__image">
          <img src={imgsrc} />
          <div onClick={onClick} className="captcha__refresh">
            <Refresh />
          </div>
        </div>
      )}
      {errorMesage && <p className="container__text--error">{errorMesage}</p>}
    </div>
  );
};
