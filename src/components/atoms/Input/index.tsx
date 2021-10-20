import React from "react";
import "./styles.scss";

interface IInput {
  classContainer: string;
  classLabel: string;
  classInput: string;
  classWarning: string;
  warning?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}

export const Input: React.FC<IInput> = ({
  classContainer,
  classLabel,
  classInput,
  classWarning,
  warning,
  label,
  value,
  onChange,
  placeholder,
}) => {
  const regex = /[^a-zA-ZА-Яа-яЁё]/gi;
  const handleNameField = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value.search(regex) !== -1
      ? event.target.parentElement?.classList.add(
          "authorization__inputWrapper-warning"
        )
      : event.target.parentElement?.classList.remove(
          "authorization__inputWrapper-warning"
        );
    onChange(event.target.value);
  };

  return (
    <div className={classContainer}>
      <p className={classLabel}>{label}</p>
      <input
        className={classInput}
        value={value}
        placeholder={placeholder}
        onChange={(event) => {
          handleNameField(event);
        }}
      />
      <p className={classWarning}>{warning}</p>
    </div>
  );
};
