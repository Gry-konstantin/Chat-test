import React, { useState } from "react";
import "./styles.scss";
import { ChatButton } from "../../atoms/ChatButton";
import { ChatInputAddFile } from "../../atoms/ChatInputAddFile";
import { ReactComponent as AddFile } from "../../../assets/addFile.svg";
import { ReactComponent as Send } from "../../../assets/send.svg";

interface IChatInput {
  baseClass?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

export const ChatInput: React.FC<IChatInput> = ({
  baseClass = "",
  value,
  onChange,
  placeholder,
  type,
}) => {
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const [inputFileValue, setInputNameValue] = useState<string>("");

  return (
    <div tabIndex={0} className={`chatinput ${baseClass}`}>
      {/* <ChatInputAddFile
        value={inputFileValue}
        onChange={setInputNameValue}
        type = "file"
      /> */}
      <ChatButton>
        <AddFile />
      </ChatButton>
      <input
        value={value}
        placeholder={placeholder}
        onChange={handleValueChange}
        type={type}
      />
      <ChatButton>
        <Send />
      </ChatButton>
    </div>
  );
};