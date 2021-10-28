import React from "react";
import "./styles.scss";
import { Loading } from "../../atoms/Loading";
import { ChatInfo } from "../../atoms/ChatInfo";

interface ILoader {
  loader: boolean;
}

export const ChatWrapper: React.FC<ILoader> = ({ loader }) => {
  return (
    <div className="chat-wrapper">
      {loader ? (
        <Loading />
      ) : (
        // <ChatInfo title="hello" status="Last seen  3 minutes ago"/>
        <div className="chat-wrapper__text">
          <span>Select a chat to stary messaging</span>
        </div>
      )}
    </div>
  );
};
