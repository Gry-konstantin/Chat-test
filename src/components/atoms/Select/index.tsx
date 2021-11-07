import React, { useEffect, useState } from "react";
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
}
function upperCaseFirst(str = "") {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
export const Selector: React.FC<ISelect> = ({
  onChange,
  name,
  label,
  errorMesage,
}) => {
  const [gender, setGender] = useState<IGender[]>([]);
  useEffect(() => {
    api
      .get("/api/auth")
      .then((response) => {
        const allGender = response.data.genders;
        setGender(allGender);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleValueChange = (newValue: SingleValue<IGender>) => {
    onChange(newValue);
  };

  const options: IGender[] = gender.map((item) => {
    return { value: `${item.id}`, label: upperCaseFirst(item.gender) };
  });
  return (
    <div
      className={`select__container ${errorMesage ? "container--error" : ""}`}
    >
      {label && <label className="container__label">{label}</label>}
      <Select
        classNamePrefix="select"
        placeholder="Your gender"
        name={name}
        options={options}
        onChange={handleValueChange}
      />
      {errorMesage && <p className="container__text--error">{errorMesage}</p>}
    </div>
  );
};
