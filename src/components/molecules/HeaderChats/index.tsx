import React from "react";
import "./styles.scss";
import { ReactComponent as Logotype } from "./../../../assets/logo.svg";
import { ReactComponent as Chaticon } from "./../../../assets/chaticon.svg";

interface IHeader {
  baseClass?: string;
  title?: string[] | string;
  subTitle?: string;
}

export const HeaderChats: React.FC<IHeader> = ({ baseClass = "" }) => {
  return (
    <header className={`headerChat ${baseClass}`}>
      <div className="headerChat__logo">
        <Logotype />
      </div>
      <div className="headerChat__chaticon">
        <Chaticon />
      </div>
    </header>
  );
};
