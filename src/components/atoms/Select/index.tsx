import React from "react";
import Select, { SingleValue } from "react-select";
import api from "../../../api";
import "./styles.scss";

interface IGender {
  id?: number;
  gender?: string;
  value: string;
  label?: string;
}
interface ISelect {
  onChange: (value: SingleValue<IGender>) => void;
  name: string;
  label: string;
  errorMesage?: string;
  option: IGender[];
}
export const Selector: React.FC<ISelect> = ({
  onChange,
  name,
  label,
  option,
  errorMesage,
}) => {
  const handleGenderValueChange = (newValue: SingleValue<IGender>) => {
    onChange(newValue);
  };
  return (
    <div
      className={`select__container ${errorMesage ? "container--error" : ""}`}
    >
      {label && <label className="container__label">{label}</label>}
      <Select
        classNamePrefix="select"
        placeholder="Your gender"
        name={name}
        options={option}
        onChange={handleGenderValueChange}
      />
      {errorMesage && <p className="container__text--error">{errorMesage}</p>}
    </div>
  );
};
