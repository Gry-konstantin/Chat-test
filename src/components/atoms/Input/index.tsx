import React from "react";
import "./styles.scss";
import { regex } from "../../../constants/regex";

interface IInput {
  classContainer: string;
  warning?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}

export const Input: React.FC<IInput> = ({
  classContainer,
  warning,
  label,
  value,
  onChange,
  placeholder,
}) => {
  const handleNameField = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value.search(regex) !== -1
      ? event.target.parentElement?.classList.add(
          `${classContainer}__inputWrapper-warning`
        )
      : event.target.parentElement?.classList.remove(
          `${classContainer}__inputWrapper-warning`
        );
    onChange(event.target.value);
  };

  return (
    <div className={`${classContainer}__inputWrapper`}>
      <p className={`${classContainer}__label`}>{label}</p>
      <input
        className={`${classContainer}__input`}
        value={value}
        placeholder={placeholder}
        onChange={handleNameField}
      />
      <p className={`${classContainer}__warning`}>{warning}</p>
    </div>
  );
};
