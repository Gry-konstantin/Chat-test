import { useEffect, useRef, useState } from "react";
import { setDialogs } from "../components/page/ChatPage/store";

export function useInitWebSocket() {
  const websocket = useRef<WebSocket | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    initWebSocket();
    return () => {
      closeWebSocket();
    };
  }, []);

  const getDialogs = () => {
    websocket.current?.send('{"type":"users_list"}');
  };
  const initWebSocket = () => {
    const key = localStorage.getItem("connect_key");
    if (key) {
      websocket.current = new WebSocket(
        `ws://109.194.37.212:2346?type=test&ws_id=${key}`
      );
      websocket.current.onopen = () => {
        console.log("open");
        setIsOpen(true);
      };
      websocket.current.onmessage = (message) => {
        // if (message.type === "message"){
        //   const response = JSON.parse(message.data);
        //   if (response.type === "users_list") {
        //     setDialogs(response.data)
        //   }
        // }else{
        //   console.log(message.data)
        // }
        const response = JSON.parse(message.data);
        if (response.type === "users_list") {
          setDialogs(response.data);
        } else if (response.type === "error") {
          //???
          console.log(response.data);
        }
      };
      websocket.current.onclose = () => {
        setIsOpen(false);
      };
      //???
      websocket.current.onerror = (error) => {
        console.log(error);
      };
    }
  };
  const closeWebSocket = () => {
    websocket.current?.close;
    return;
  };
  return {
    websocket,
    isOpen,
    getDialogs,
  };
}
