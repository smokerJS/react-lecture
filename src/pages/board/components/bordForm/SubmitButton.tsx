import React from "react";
import { useRecoilValue } from "recoil";
import {
  boardFormWriterState,
  boardFormTitleState,
  boardFormContentState,
} from "../../atoms/board";
import axios from "axios";

const SubmitButton = () => {
  const writer = useRecoilValue(boardFormWriterState);
  const title = useRecoilValue(boardFormTitleState);
  const content = useRecoilValue(boardFormContentState);

  const isDisabled = !writer.length || !title.length || !content.length;

  const handleClick = async () => {
    axios.post("//localhost:3001/board", {
      writer,
      title,
      content,
    });
  };

  return (
    <button onClick={handleClick} disabled={isDisabled}>
      + ADD
    </button>
  );
};

export default SubmitButton;
