import React, { ChangeEventHandler, FC, FormEvent, useState } from "react";

interface FormProps {
  onCreate: (text: string) => void;
}

const Form: FC<FormProps> = (props) => {
  const { onCreate } = props;
  const [text, setText] = useState<string>("");

  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    setText("");
    onCreate(text);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setText(value);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label>
        Todo
        <input type="text" value={text} onChange={handleChange} />
      </label>
      <button>+ ADD</button>
    </form>
  );
};

export default Form;
