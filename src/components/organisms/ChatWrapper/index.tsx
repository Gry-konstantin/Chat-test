import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import { Loading } from "../../atoms/Loading";
import { Message } from "../../atoms/Message";
import { ChatInfo } from "../../atoms/ChatInfo";
import { ChatInput } from "../../molecules/ChatInput";

interface IMessage {
  itsMe: boolean;
  text: string;
  type?: string;
  title?: string;
  size?: string;
}
type ListItem = {
  id: number;
  name: string;
  lastMessage: string;
  male?: boolean;
  message?: IMessage[];
};
interface IChatWrapper {
  loader: boolean;
  selected?: ListItem;
}

export const ChatWrapper: React.FC<IChatWrapper> = ({ loader, selected }) => {
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
      {selected ? (
        <>
          <ChatInfo title={selected.name} status={selected.lastMessage} />
          <div className="message-wrapper">
            {selected.message &&
              selected.message.map((infoMessage, index) => (
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
