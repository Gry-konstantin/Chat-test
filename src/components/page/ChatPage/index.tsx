import React, { useState, useEffect } from "react";
import { HeaderChats } from "../../molecules/HeaderChats";
import { DialogItem } from "../../molecules/DialogItem";
import { ChatWrapper } from "../../organisms/ChatWrapper";
import "./styles.scss";
import { useInitWebSocket } from "../../../utils/useInitWebsocket";
import { useStore } from "effector-react";
import { $dialogs, setSelectDialog, $selectDialog } from "./store";
import { ToastContainer } from "react-toastify";

import { createEvent, createStore } from "effector";
import { setMessage, $message } from "./store";

interface IMessage {
  text?: string;
  itsMe?: boolean;
  title?: string;
  size?: string;
}

export const ChatPage: React.FC = () => {
  const { isOpen, getDialogs } = useInitWebSocket();
  const dialogs = useStore($dialogs);
  useEffect(() => {
    if (isOpen) {
      getDialogs();
    }
  }, [isOpen]);
  const selectDialog = useStore($selectDialog);
  const [isLoader, setIsLoader] = useState<boolean>(false);
  return (
    <div className="wrapper">
      <HeaderChats baseClass={`chat ${selectDialog ? "d-none" : ""}`} />
      <div className={`main ${selectDialog ? "isOpen" : ""}`}>
        <div className="main__aside">
          <div className="list">
            {dialogs && dialogs.length > 0 ? (
              dialogs.map((item, index) => (
                <DialogItem
                  baseClass={selectDialog?.id === index ? "active" : ""}
                  key={index}
                  {...item}
                  onClick={() => {
                    setSelectDialog(item);
                  }}
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
          <ChatWrapper
            loader={isLoader}
            onClick={() => setSelectDialog(null)}
          />
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};
