import React from "react";
import "./styles.scss";

interface IButton {
  textButton: string;
  classButton: string;
  isDisabled: boolean;
  onClick: (value: boolean) => void;
}

export const Button: React.FC<IButton> = ({
  textButton,
  classButton,
  isDisabled,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick(true)}
      className={classButton}
      disabled={isDisabled}
    >
      {textButton}
    </button>
  );
};
