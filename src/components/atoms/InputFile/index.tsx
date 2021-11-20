import React from "react";
import "./styles.scss";

interface IInputFile {
  name?: string;
  baseClass?: string;
  value?: string;
  onChange: (value: EventTarget & HTMLInputElement) => void;
  ref?: HTMLInputElement;
  tabIndex?: number;
}

export const InputFile: React.FC<IInputFile> = ({
  name,
  baseClass = "",
  value,
  onChange,
  children,
  tabIndex,
}) => {
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target);
  };

  return (
    <div className={`input__container ${baseClass}`}>
      <label>
        {children}
        <input
          className="input__file"
          name={name}
          value={value}
          onChange={handleValueChange}
          type="file"
          tabIndex={tabIndex}
        />
      </label>
    </div>
  );
};
