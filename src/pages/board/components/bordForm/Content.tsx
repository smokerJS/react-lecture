import React, { ChangeEventHandler } from "react";
import { useRecoilState } from "recoil";
import { boardFormContentState } from "../../atoms/board";
import Input from "../base/Input";

const Content = () => {
  const [content, setContent] = useRecoilState(boardFormContentState);
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setContent(value);
  };

  return <Input text="내용" value={content} onChange={handleChange} />;
};

export default Content;
