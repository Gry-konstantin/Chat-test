import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import { Loading } from "../../atoms/Loading";
import { Message } from "../../atoms/Message";
import { ChatInfo } from "../../atoms/ChatInfo";
import { ChatInput } from "../../molecules/ChatInput";
import { Dialog } from "../../../utils/types";
import { $selectDialog } from "../../page/ChatPage/store";
import { useStore } from "effector-react";

interface IChatWrapper {
  loader: boolean;
  selected?: Dialog;
  onClick?: () => void;
}

export const ChatWrapper: React.FC<IChatWrapper> = ({
  loader,
  selected,
  onClick,
}) => {
  const selectDialog = useStore($selectDialog);
  const anchorMessage = useRef<null | HTMLDivElement>(null);
  const [inputNameValue, setInputNameValue] = useState<string>("");

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
            {selectDialog.message &&
              selectDialog.message.map((infoMessage, index) => (
                <Message key={index} {...infoMessage} />
              ))}
            <div ref={anchorMessage} />
          </div>
          <ChatInput
            value={inputNameValue}
            onChange={setInputNameValue}
            placeholder="Write something..."
          />
        </>
      ) : (
        <div className="chat-wrapper__text">
          <span>Select a chat to stary messaging</span>
        </div>
      )}
    </div>
  );
};
