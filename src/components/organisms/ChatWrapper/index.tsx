import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import { Loading } from "../../atoms/Loading";
import { Message } from "../../atoms/Message";
import { ChatInfo } from "../../atoms/ChatInfo";
import { ChatInput } from "../../molecules/ChatInput";
import { Dialog } from "../../../utils/types";
import { $selectDialog } from "../../page/ChatPage/store";
import { useStore } from "effector-react";
import { $message } from "../../page/ChatPage/store";

interface IChatWrapper {
  loader: boolean;
  onClick?: () => void;
}

export const ChatWrapper: React.FC<IChatWrapper> = ({ loader, onClick }) => {
  const selectDialog = useStore($selectDialog);
  const message = useStore($message);
  const anchorMessage = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    anchorMessage.current &&
      anchorMessage.current.scrollIntoView({ behavior: "smooth" });
  });

  if (loader) {
    return <Loading />;
  }
  return (
    <div className="chat-wrapper">
      {selectDialog ? (
        <>
          <ChatInfo
            title={selectDialog.name}
            status={selectDialog.lastMessage}
            gender={selectDialog.gender}
            onClick={onClick}
          />
          <div className="message-wrapper">
            {selectDialog &&
              message.map((infoMessage, index) => (
                <Message
                  key={index}
                  text={infoMessage.text}
                  urlFile={infoMessage.urlFile}
                  name={infoMessage.name}
                  size={infoMessage.size}
                  itsMe={Boolean(infoMessage.target)}
                />
              ))}
            <div ref={anchorMessage} />
          </div>
          <ChatInput placeholder="Write something..." />
        </>
      ) : (
        <div className="chat-wrapper__text">
          <span>Select a chat to stary messaging</span>
        </div>
      )}
    </div>
  );
};
