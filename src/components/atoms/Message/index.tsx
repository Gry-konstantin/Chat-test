import React from "react";
import "./styles.scss";
import { ReactComponent as File } from "../../../assets/file.svg";

interface IMessage {
  text?: string;
  itsMe?: boolean;
  title?: string;
  size?: string;
}

export const Message: React.FC<IMessage> = ({ text, itsMe, title, size }) => {
  return (
    <div className={itsMe ? `message message--blue` : "message"}>
      <div className="message__wrapper">
        {text ? (
          <p className="message__text">{text}</p>
        ) : (
          <div className="message__file">
            <div className="message__img">
              <File />
            </div>
            <div className="message__content">
              <div className="message__title">{title}</div>
              <div className="message__size">{size}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
