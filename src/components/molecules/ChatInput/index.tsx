import React from "react";
import "./styles.scss";
import { Button } from "../../atoms/Button";
import { InputFile } from "../../atoms/InputFile";
import { ReactComponent as AddFile } from "../../../assets/addFile.svg";
import { ReactComponent as Send } from "../../../assets/send.svg";
import { UserSubmitForm } from "../../../utils/types";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { sendMessage } from "../../../api/sendMessage";
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
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  const handleInputFileChange = async (
    value: EventTarget & HTMLInputElement
  ) => {
    const formData = new FormData();
    if (value.files) formData.append("0", value.files[0]);
    try {
      const response = await sendMessage(formData);
      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        response && response.data
          ? toast.error(`${response && response.data}`)
          : toast.error(`${response}`);
      }
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
          value={value}
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
