import React, { ChangeEventHandler } from "react";
import { useRecoilState } from "recoil";
import { boardFormTitleState } from "../../atoms/board";
import Input from "../base/Input";

const Title = () => {
  const [title, setTitle] = useRecoilState(boardFormTitleState);
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setTitle(value);
  };

  return <Input text="제목" value={title} onChange={handleChange} />;
};

export default Title;
