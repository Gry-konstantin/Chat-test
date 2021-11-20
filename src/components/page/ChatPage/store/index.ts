import { createEvent, createStore, forward } from "effector";
import { Dialog } from "../../../../utils/types";

type Message = {
  type: string;
  text: string;
  target: number;
};

const setDialogs = createEvent<Dialog[]>();

const $dialogs = createStore<Dialog[]>([]);
forward({ from: setDialogs, to: $dialogs });

const setMessage = createEvent<Message>();
const $message = createStore<Message[]>([]).on(setMessage, (state, payload) => {
  return [...state, payload];
});

const setSelectDialog = createEvent<Dialog | null>();
const $selectDialog = createStore<Dialog | null>(null);
forward({ from: setSelectDialog, to: $selectDialog });

export {
  setDialogs,
  $dialogs,
  setSelectDialog,
  $selectDialog,
  setMessage,
  $message,
};
