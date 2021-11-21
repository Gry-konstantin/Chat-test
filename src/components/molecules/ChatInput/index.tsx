import React, { useState } from "react";
import "./styles.scss";
import { Button } from "../../atoms/Button";
import { InputFile } from "../../atoms/InputFile";
import { ReactComponent as AddFile } from "../../../assets/addFile.svg";
import { ReactComponent as Send } from "../../../assets/send.svg";
import { UserSubmitForm } from "../../../utils/types";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { sendMessage } from "../../../api/sendMessage";
import { useInitWebSocket } from "../../../utils/useInitWebsocket";
interface IChatInput {
  baseClass?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
}
export const ChatInput: React.FC<IChatInput> = ({
  baseClass = "",
  placeholder,
  type,
}) => {
  const { websocket } = useInitWebSocket();
  const [contentMessage, setContentMessage] = useState<string>("");
  const [urlFile, setUrlFile] = useState<string>("");
  const [fileInfo, setFileInfo] = useState<any>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (contentMessage) {
      const message = JSON.stringify({
        type: "message",
        text: `${contentMessage}`,
        target: 0,
      });
      setContentMessage("");
      websocket.current?.send(`"${message}"`);
    } else if (urlFile) {
      const message = JSON.stringify({
        type: "message",
        urlFile: `${urlFile}`,
        name: fileInfo.name,
        size: fileInfo.size,
        target: 0,
      });
      setUrlFile("");
      websocket.current?.send(`"${message}"`);
    }
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContentMessage(event.target.value);
  };
  const handleInputFileChange = (value: EventTarget & HTMLInputElement) => {
    const formData = new FormData();
    if (value.files) {
      setFileInfo(value.files[0]);
      formData.append("0", value.files[0]);
      sendMessage(formData)
        .then((response) => {
          setUrlFile(response.data);
        })
        .catch((error) => {
          if (axios.isAxiosError(error)) {
            setUrlFile("");
            const { response } = error;
            response && response.data
              ? toast.error(`${response && response.data}`)
              : toast.error(`${response}`);
          }
        });
    }
  };
  return (
    <form
      name="subscribeForm"
      method="post"
      encType="multipart/form-data"
      onSubmit={onSubmit}
    >
      <div tabIndex={0} className={`chatinput ${baseClass}`}>
        <InputFile name="file" onChange={handleInputFileChange}>
          <AddFile />
        </InputFile>
        <input
          value={contentMessage}
          placeholder={placeholder}
          onChange={handleValueChange}
          type={type}
        />
        <Button baseClass="chat__button" type="submit">
          <Send />
        </Button>
      </div>
      <ToastContainer />
    </form>
  );
};
