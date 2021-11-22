import React, { useState } from "react";
import "./styles.scss";
import { Button } from "../../atoms/Button";
import { InputFile } from "../../atoms/InputFile";
import { ReactComponent as AddFile } from "../../../assets/addFile.svg";
import { ReactComponent as Send } from "../../../assets/send.svg";
import axios from "axios";
import { toast } from "react-toastify";
import { sendFile } from "../../../api/sendFile";
import { useInitWebSocket } from "../../../utils/useInitWebsocket";
import { fileType } from "../../../constant";
interface IChatInput {
  baseClass?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
}
interface IFile extends File {
  urlFile?: string;
}
export const ChatInput: React.FC<IChatInput> = ({
  baseClass = "",
  placeholder,
  type,
}) => {
  const { sendMessage } = useInitWebSocket();
  const [contentMessage, setContentMessage] = useState<string>("");
  const [fileInfo, setFileInfo] = useState<IFile>();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(contentMessage, fileInfo);
    setFileInfo(undefined);
    setContentMessage("");
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContentMessage(event.target.value);
  };
  const handleInputFileChange = (value: EventTarget & HTMLInputElement) => {
    try {
      if (value.files) {
        const currentFile = value.files[0];
        if (currentFile.size > 2 * Math.pow(10, 6)) {
          toast.error("no more than 2mb");
        } else if (fileType.includes(currentFile.type)) {
          const formData = new FormData();
          formData.append("0", value.files[0]);
          sendFile(formData)
            .then((response) => {
              const infoFile: IFile = value.files![0];
              infoFile.urlFile = response.data;
              setFileInfo(infoFile);
            })
            .catch((error) => {
              if (axios.isAxiosError(error)) {
                setFileInfo(undefined);
                const { response } = error;
                toast.error(`${response && response.data}`);
              }
            });
        } else {
          toast.error(
            "desired file permission: mp4/ogg/webm/mpeg/jpg/gif/png/svg"
          );
        }
      }
    } catch (error) {
      toast.error("cancel file upload");
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
    </form>
  );
};
