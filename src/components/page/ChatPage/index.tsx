import React, { useState, useEffect } from "react";
import { HeaderChats } from "../../molecules/HeaderChats";
import { DialogItem } from "../../molecules/DialogItem";
import { ChatWrapper } from "../../organisms/ChatWrapper";
import "./styles.scss";
import { Dialog } from "../../../utils/types";

import { Dialogs } from "../../../constants/mok";

import { useInitWebSocket } from "../../../utils/useInitWebsocket";

export const ChatPage: React.FC = () => {
  const { websocket, dialogs, isOpen } = useInitWebSocket();
  const [companions, setCompanions] = useState<Dialog[]>();
  // useEffect(() => {
  //   if (!websocket.current) return;
  //   if(!isOpen) return
  //   websocket.current?.send('{"type":"users_list"}')
  //   console.log(dialogs,websocket)
  // });
  useEffect(() => {
    const key = localStorage.getItem("connect_key");
    const socket = new WebSocket(
      `ws://109.194.37.212:2346/?type=test123154&ws_id=${key}`
    );
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: "users_list" }));
    };
    socket.onmessage = (message) => {
      const response = JSON.parse(message.data);
      if (response.type === "users_list") {
        setCompanions(response.data);
      }
    };
  }, []);

  const [isLoader, setIsLoader] = useState<boolean>(false);
  const [selectCompanion, setSelectCompanion] = useState<Dialog | undefined>();
  console.log(selectCompanion && Object.keys(selectCompanion).length);
  return (
    <div className="wrapper">
      <HeaderChats baseClass={`chat ${selectCompanion ? "d-none" : ""}`} />
      <div className={`main ${selectCompanion ? "isOpen" : ""}`}>
        <div className="main__aside">
          <div className="list">
            {companions && companions.length > 0 ? (
              companions.map((item, index) => (
                <DialogItem
                  baseClass={selectCompanion?.id === index ? "active" : ""}
                  key={index}
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
          <ChatWrapper
            loader={isLoader}
            selected={selectCompanion}
            onClick={() => setSelectCompanion(undefined)}
          />
        </div>
      </div>
    </div>
  );
};
