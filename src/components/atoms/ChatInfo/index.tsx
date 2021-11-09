import React from "react";
import "./styles.scss";
import { ReactComponent as Male } from "./../../../assets/male.svg";
import { ReactComponent as Female } from "./../../../assets/female.svg";
import { ReactComponent as Arrow } from "./../../../assets/arrow.svg";

interface ICompanion {
  baseClass?: string;
  title?: string;
  status?: string;
  gender?: string;
  onClick?: () => void;
}

export const ChatInfo: React.FC<ICompanion> = ({
  onClick,
  baseClass = "",
  title,
  status = "Last seen  3 minutes ago",
  gender = "male",
}) => {
  return (
    <div className={`ChatInfo ${baseClass}`}>
      <div className="ChatInfo__arrow" onClick={onClick}>
        {<Arrow />}
      </div>
      <div className="ChatInfo__icon">
        {gender === "male" ? <Male /> : <Female />}
      </div>
      <div className="ChatInfo__title">{title}</div>
      <div className="ChatInfo__status">{status}</div>
    </div>
  );
};
