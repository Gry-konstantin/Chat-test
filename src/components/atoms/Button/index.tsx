import React from "react";
import "./styles.scss";

interface IButton {
  // childrenButton: string;
  classButton?: string;
  isDisabled?: boolean;
}

export const Button: React.FC<IButton> = ({
  children,
  classButton,
  isDisabled = false,
}) => {
  return (
    <button className={classButton} disabled={isDisabled}>
      {children}
    </button>
  );
};
