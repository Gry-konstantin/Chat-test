import { useEffect, useRef, useState } from "react";
import { setDialogs } from "../components/page/ChatPage/store";
import { toast } from "react-toastify";
import { Dialog } from "./types";
import { setMessage } from "../components/page/ChatPage/store";
type Message = {
  type: string;
  text?: string;
  target: number;
  urlFile?: string;
  name?: string;
  size?: number;
};
export function useInitWebSocket() {
  const websocket = useRef<WebSocket | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    initWebSocket();
    return () => {
      closeWebSocket();
    };
  }, []);

  const putMessageLocalStorage = (message: Message) => {
    const oldMessage = localStorage.getItem("message");
    if (oldMessage) {
      const newMessage = JSON.parse(oldMessage);
      newMessage.push(message);
      localStorage.setItem("message", JSON.stringify(newMessage));
    } else {
      localStorage.setItem("message", JSON.stringify([message]));
    }
  };

  const getDialogs = () => {
    websocket.current?.send('{"type":"users_list"}');
  };
  const initWebSocket = () => {
    const key = localStorage.getItem("connect_key");
    websocket.current = new WebSocket(
      `ws://109.194.37.212:2346?type=test&ws_id=${key}`
    );
    websocket.current.onopen = () => {
      setIsOpen(true);
    };
    websocket.current.onmessage = (message) => {
      //TODO: Невозможно обработать ошибку, т.к. бек не как меня не оповещает об этом, приходиться делать такой костыль
      if (message.data.indexOf("wrong") <= 0) {
        if (message.data.indexOf("message") > 0) {
          const parseMessage = message.data.slice(1, message.data.length - 1);
          setMessage(JSON.parse(parseMessage));
          putMessageLocalStorage(JSON.parse(parseMessage));
        } else {
          const response = JSON.parse(message.data);
          if (response.type === "users_list") {
            response.data.map((item: Dialog, index: number) => {
              item.id = index;
            });
            setDialogs(response.data);
          }
        }
      } else {
        toast.error(`${message.data}`);
        setIsOpen(false);
      }
    };
    websocket.current.onclose = () => {
      setIsOpen(false);
    };
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
