import { atom } from "recoil";

/**
 
한번에 관리하는법
interface BoardForm {
  writer: string;
  title: string;
  content: string;
}

const DEFAULT_BOARD_FORM_STATE: BoardForm = {
  writer: "",
  title: "",
  content: "",
};

const boardFormState = atom<BoardForm>({
  key: "boardFormState",
  default: DEFAULT_BOARD_FORM_STATE,
});
*/

export const boardFormWriterState = atom<string>({
  key: "boardFormWriterState",
  default: "",
});
export const boardFormTitleState = atom<string>({
  key: "boardFormTitleState",
  default: "",
});
export const boardFormContentState = atom<string>({
  key: "boardFormContentState",
  default: "",
});
