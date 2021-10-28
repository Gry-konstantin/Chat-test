import React, { useState } from "react";
import { HeaderChats } from "../../molecules/HeaderChats";
import { ListCompanion } from "../../organisms/ListCompanion";
import { Companion } from "../../molecules/Сompanion";
import { ChatWrapper } from "../../organisms/ChatWrapper";
import "./styles.scss";

import "../../organisms/ListCompanion/styles.scss";

const data = [
  {
    id: 1,
    name: "Konstantin",
    lastMessage: "hello",
    male: true,
    status: "Last seen 3 minutes ago",
    message: [
      {
        itsMe: true,
        text: "HelloworldHelloworld HelloworldHelloworldHelloworld Helloworld",
      },
      {
        itsMe: false,
        text: "HelloworldHelloworld HelloworldHelloworldHelloworld Helloworld",
      },
      {
        itsMe: true,
        title: "Helloworld",
        size: "4.2 MB",
      },
    ],
  },
  {
    id: 2,
    name: "Andrey",
    lastMessage: "hey",
    status: "Last seen 3 minutes ago",
    message: [
      {
        itsMe: true,
        text: "Helloworldbfdbfgbbbbbbbbbb",
      },
      {
        itsMe: false,
        text: "Helloworld",
      },
    ],
  },
];

interface IListItem {
  id: number;
  name: string;
  lastMessage: string;
  male?: boolean;
}

export const ChatPage = () => {
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const [selectCompanion, setSelectCompanion] = useState<IListItem>();
  return (
    <div className="wrapper">
      <HeaderChats baseClass="chat" />
      <div className="main">
        <div className="main__aside">
          <div className="list">
            {data ? (
              data.map((item) => (
                <Companion
                  key={item.id}
                  name={item.name}
                  lastMessage={item.lastMessage}
                  male={item.male}
                  onClick={() => setSelectCompanion(item)}
                />
              ))
            ) : (
              <div className="alone">
                <div className="alone__image" />
                <div className="alone__text">There is no other users yet</div>
              </div>
            )}
          </div>
        </div>
        <div className="main__section">
          <ChatWrapper loader={isLoader} selected={selectCompanion} />
        </div>
      </div>
    </div>
  );
};
