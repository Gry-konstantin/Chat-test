import React from "react";
import "./styles.scss";
import { ReactComponent as Logotype } from "./../../../assets/logo.svg";

interface IHeader {
  baseClass?: string;
  title?: string[];
  subTitle?: string;
}

export const Header: React.FC<IHeader> = ({
  baseClass = "",
  title,
  subTitle,
}) => {
  return (
    <header className={`header ${baseClass}`}>
      <div className="header__logo">
        <Logotype />
      </div>
      <div className="header__title">
        <h1>
          {title && title[0]}
          <span>{title && title[1]}</span>
          <span>{title && title[2]}</span>
        </h1>
        <h2>{subTitle}</h2>
      </div>
    </header>
  );
};
