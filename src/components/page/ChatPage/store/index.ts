import { createEvent, createStore, forward } from "effector";
import { Dialog } from "../../../../utils/types";

const setDialogs = createEvent<Dialog[]>();

const $dialogs = createStore<Dialog[]>([]);
forward({ from: setDialogs, to: $dialogs });

const setSelectDialog = createEvent<Dialog | undefined>();
const $selectDialog = createStore<Dialog | undefined>({});
forward({ from: setSelectDialog, to: $selectDialog });

export { setDialogs, $dialogs, setSelectDialog, $selectDialog };
