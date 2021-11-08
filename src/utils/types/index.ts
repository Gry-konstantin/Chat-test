export interface IMessage {
  itsMe: boolean;
  text?: string;
  type?: string;
  title?: string;
  size?: string;
}
export type Dialog = {
  id: number;
  name: string;
  lastMessage: string;
  male?: boolean;
  status?: string;
  message?: IMessage[];
};
export type UserSubmitForm = {
  login: string;
  password: string;
  captcha: string;
};
