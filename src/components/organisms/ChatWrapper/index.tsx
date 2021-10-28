import React, { useState } from "react";
import "./styles.scss";
import { Loading } from "../../atoms/Loading";
import { Message } from "../../atoms/Message";
import { ChatInfo } from "../../atoms/ChatInfo";
import { ChatInput } from "../../molecules/ChatInput";

interface IListItem {
  id: number;
  name: string;
  lastMessage: string;
  male?: boolean;
  message?: {
    itsMe: boolean;
    text: string;
    type?: string;
    title?: string;
    size?: string;
  }[];
}
interface ILoader {
  loader: boolean;
  selected?: IListItem;
}

export const ChatWrapper: React.FC<ILoader> = ({ loader, selected }) => {
  selected &&
    selected.message &&
    selected.message.map((item) => {
      console.log(item.itsMe);
    });
  const [inputNameValue, setInputNameValue] = useState<string>("");
  return (
    <div className="chat-wrapper">
      {loader ? (
        <Loading />
      ) : selected ? (
        <>
          <ChatInfo title={selected.name} status={selected.lastMessage} />
          <div className="message-wrapper">
            {selected.message &&
              selected.message.map((infoMessage, index) => (
                <Message
                  key={index}
                  itsMe={infoMessage.itsMe}
                  text={infoMessage.text}
                  title={infoMessage.title}
                  size={infoMessage.size}
                ></Message>
              ))}
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
