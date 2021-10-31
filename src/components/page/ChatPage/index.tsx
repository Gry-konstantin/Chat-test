import React, { useState } from "react";
import { HeaderChats } from "../../molecules/HeaderChats";
import { DialogItem } from "../../molecules/DialogItem";
import { ChatWrapper } from "../../organisms/ChatWrapper";
import "./styles.scss";
import { Dialog } from "../../../utils/types";
import { Dialogs } from "../../../constants/mok";

export const ChatPage: React.FC = () => {
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const [selectCompanion, setSelectCompanion] = useState<Dialog>();
  return (
    <div className="wrapper">
      <HeaderChats baseClass="chat" />
      <div className="main">
        <div className="main__aside">
          <div className="list">
            {Dialogs.length > 0 ? (
              Dialogs.map((item, index) => (
                <DialogItem
                  baseClass={selectCompanion?.id === index ? "active" : ""}
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
