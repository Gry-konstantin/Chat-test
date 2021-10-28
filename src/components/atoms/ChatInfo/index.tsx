import React from "react";
import "./styles.scss";

interface ICompanion {
  baseClass?: string;
  title?: string;
  status?: string;
}

export const ChatInfo: React.FC<ICompanion> = ({
  baseClass = "",
  title,
  status,
}) => {
  return (
    <div className={`ChatInfo ${baseClass}`}>
      <div className="ChatInfo__title">{title}</div>
      <div className="ChatInfo__status">{status}</div>
    </div>
  );
};
