import React from "react";
import "./styles.scss";

interface IButton {
  className?: string;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "button" | "reset";
}

export const Button: React.FC<IButton> = ({
  onClick,
  children,
  className,
  isDisabled = false,
  type = "button",
}) => {
  return (
    <button
      className={className}
      disabled={isDisabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
