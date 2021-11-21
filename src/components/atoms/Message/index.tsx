import React from "react";
import "./styles.scss";
import { ReactComponent as File } from "../../../assets/file.svg";

interface IMessage {
  text?: string;
  itsMe?: boolean;
  name?: string;
  size?: number;
  urlFile?: string;
}

export const Message: React.FC<IMessage> = ({
  text,
  itsMe,
  name,
  size,
  urlFile,
}) => {
  if (text && urlFile) {
    return (
      <div className={itsMe ? `message message--blue` : "message"}>
        <div className="message__wrapper">
          <p className="message__text message__text--margin-bottom">{text}</p>
          <div className="message__file">
            <a
              download="image.png"
              target="_blank"
              rel="noreferrer"
              href={`http://109.194.37.212:93${urlFile}`}
            >
              <div className="message__img">
                <File />
              </div>
              <div className="message__content">
                <div className="message__title">{name}</div>
                <div className="message__size">
                  {size && size / Math.pow(10, 6) + " MB"}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={itsMe ? `message message--blue` : "message"}>
      <div className="message__wrapper">
        {text ? (
          <p className="message__text">{text}</p>
        ) : (
          <div className="message__file">
            <a
              download="image.png"
              target="_blank"
              rel="noreferrer"
              href={`http://109.194.37.212:93${urlFile}`}
            >
              <div className="message__img">
                <File />
              </div>
              <div className="message__content">
                <div className="message__title">{name}</div>
                <div className="message__size">
                  {size && size / Math.pow(10, 6) + " MB"}
                </div>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
