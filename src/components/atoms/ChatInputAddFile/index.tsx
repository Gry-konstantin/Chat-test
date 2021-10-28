import React from "react";
import "./styles.scss";

interface IChatInputAddFile {
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

export const ChatInputAddFile: React.FC<IChatInputAddFile> = ({
  value,
  onChange,
  type,
}) => {
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div tabIndex={0} className={`chatinput-add-file`}>
      <input value={value} onChange={handleValueChange} type={type} />
    </div>
  );
};
