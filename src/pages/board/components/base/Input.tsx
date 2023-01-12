import React, { ChangeEventHandler, FC } from "react";

interface InputProps {
  text: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = (props) => {
  const { text, value, onChange } = props;
  return (
    <label>
      {text}
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Input;
