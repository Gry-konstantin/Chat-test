export interface IMessage {
  itsMe: boolean;
  text?: string;
  type?: string;
  title?: string;
  size?: string;
}
export type Dialog = {
  id?: number;
  gender?: string;
  name?: string;
  lastMessage?: string;
  status?: string;
  message?: IMessage[];
};
export type UserSubmitForm = {
  login: string;
  password: string;
  captcha: string;
};
