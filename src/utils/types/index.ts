export interface IListItem {
  id: number;
  name: string;
  lastMessage: string;
  male?: boolean;
}
export interface IMessage {
  itsMe: boolean;
  text: string;
  type?: string;
  title?: string;
  size?: string;
}
export type ListItem = {
  id: number;
  name: string;
  lastMessage: string;
  male?: boolean;
  message?: IMessage[];
};
