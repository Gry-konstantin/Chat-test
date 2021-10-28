import React from "react";
import "./styles.scss";
import { ReactComponent as Male } from "./../../../assets/male.svg";
import { ReactComponent as Female } from "./../../../assets/female.svg";

interface ICompanion {
  baseClass?: string;
  name?: string;
  lastMessage?: string;
  male?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Companion: React.FC<ICompanion> = ({
  onClick,
  name = "Konstantin Konstantinopolski",
  baseClass = "",
  male = true,
  lastMessage = "hey",
}) => {
  return (
    <div className={`companion ${baseClass}`} onClick={onClick}>
      <div className="companion__icon">{male ? <Male /> : <Female />}</div>
      <div className="companion__text">
        <p className="text__name">{name}</p>
        <span className="text__lastMessage">{lastMessage}</span>
      </div>
    </div>
  );
};
