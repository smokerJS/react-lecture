import React, { ChangeEventHandler } from "react";
import { useRecoilState } from "recoil";
import { boardFormWriterState } from "../../atoms/board";
import Input from "../base/Input";

const Writer = () => {
  const [writer, setWriter] = useRecoilState(boardFormWriterState);
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setWriter(value);
  };

  return <Input text="이름" value={writer} onChange={handleChange} />;
};

export default Writer;
