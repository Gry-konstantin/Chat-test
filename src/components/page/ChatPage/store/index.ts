import { createEvent, createStore, forward } from "effector";
import { Dialog } from "../../../../utils/types";

const setDialogs = createEvent<Dialog[]>();

const $dialogs = createStore<Dialog[]>([]);
forward({ from: setDialogs, to: $dialogs });

const setSelectDialog = createEvent<Dialog | null>();
const $selectDialog = createStore<Dialog | null>(null);
forward({ from: setSelectDialog, to: $selectDialog });

export { setDialogs, $dialogs, setSelectDialog, $selectDialog };
