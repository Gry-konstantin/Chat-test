import React from "react";
import "./styles.scss";

interface IChatButton {
  baseClass?: string;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "button" | "reset";
}

export const ChatButton: React.FC<IChatButton> = ({
  onClick,
  children,
  baseClass,
  type = "button",
}) => {
  return (
    <button
      className={`chat-button  ${baseClass}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
