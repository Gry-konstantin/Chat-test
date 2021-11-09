import { useEffect, useRef, useState } from "react";

type Dialog = {
  name: string;
  gender: string;
};

export function useInitWebSocket() {
  const websocket = useRef<WebSocket | null>(null);
  const [dialogs, setDialogs] = useState<Dialog>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    initWebSocket();
    return () => {
      closeWebSocket();
    };
  });

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
        const response = JSON.parse(message.data);
        if (response.type === "users_list") {
          setDialogs(response.data);
          console.log(dialogs);
        }
      };
    }
  };
  const closeWebSocket = () => {
    websocket.current?.onclose = () => {
      setIsOpen(false);
      console.log("close");
    };
    return;
  };
  return {
    websocket,
    dialogs,
    isOpen,
    getDialogs,
  };
}
