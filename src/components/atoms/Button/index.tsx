import React from "react";
import "./styles.scss";

interface IButton {
  baseClass?: string;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "button" | "reset";
}

export const Button: React.FC<IButton> = ({
  onClick,
  children,
  baseClass,
  isDisabled = false,
  type = "button",
}) => {
  return (
    <button
      className={`button  ${baseClass}`}
      disabled={isDisabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
