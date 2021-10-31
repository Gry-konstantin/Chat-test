import React, { useState } from "react";
import { HeaderChats } from "../../molecules/HeaderChats";
import { DialogItem } from "../../molecules/DialogItem";
import { ChatWrapper } from "../../organisms/ChatWrapper";
import "./styles.scss";
import { IListItem } from "../../../utils/types";

const data = [
  {
    id: 0,
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
    id: 1,
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

export const ChatPage: React.FC = () => {
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const [selectCompanion, setSelectCompanion] = useState<IListItem>();
  return (
    <div className="wrapper">
      <HeaderChats baseClass="chat" />
      <div className="main">
        <div className="main__aside">
          <div className="list">
            {data.length > 0 ? (
              data.map((item, index) => (
                <DialogItem
                  baseClass={
                    selectCompanion && selectCompanion.id === index
                      ? "active"
                      : ""
                  }
                  key={item.id}
                  {...item}
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
