import React from "react";
import "./styles.scss";

interface IButton {
  childrenButton: string;
  classButton: string;
  isDisabled: boolean;
  onClick: (value: boolean) => void;
}

export const Button: React.FC<IButton> = ({
  childrenButton,
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
      {childrenButton}
    </button>
  );
};
