import { atom } from "recoil";
import Todo from "../types/Todo";

export const DEFAULT_ITEMS_STATE = [];

const itemsState = atom<Todo[]>({
  key: "itemsState",
  default: DEFAULT_ITEMS_STATE,
});

export default itemsState;
