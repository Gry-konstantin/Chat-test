import React, { useState } from "react";
import { HeaderChats } from "../../molecules/HeaderChats";
import { ListCompanion } from "../../organisms/ListCompanion";
import { ChatWrapper } from "../../molecules/ChatWrapper";
import "./styles.scss";

const data = [
  {
    id: 1,
    name: "Konstantin",
    lastMessage: "hello",
    male: true,
    status: "Last seen 3 minutes ago",
  },
  {
    id: 2,
    name: "Andrey",
    lastMessage: "hey",
    status: "Last seen 3 minutes ago",
  },
];

export const ChatPage = () => {
  const [isLoader, setIsLoader] = useState<boolean>(false);
  return (
    <div className="wrapper">
      <HeaderChats baseClass="chat" />
      <div className="main">
        <div className="main__aside">
          <ListCompanion companionArray={data} />
        </div>
        <div className="main__section">
          <ChatWrapper loader={isLoader} />
        </div>
      </div>
    </div>
  );
};
