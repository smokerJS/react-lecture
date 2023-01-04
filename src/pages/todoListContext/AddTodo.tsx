import React, {
  ChangeEventHandler,
  FC,
  FormEvent,
  useContext,
  useState,
} from "react";
import classes from "./AddTodo.module.css";
import ItemsContext from "./ItemContext";

import useValidWord from "./useValidWord";

const AddTodo: FC = () => {
  const { handleCreate } = useContext(ItemsContext)!;
  const [text, setText] = useState<string>("");
  const { checkValidWord } = useValidWord();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text.trim().length) {
      window.alert("할 일을 입력해주세요");
      return;
    }

    const { error, message } = checkValidWord(text);
    if (error) {
      window.alert(message);
      return;
    }

    handleCreate(text);
    setText("");
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setText(value);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label>
        Todo
        <input type="text" value={text} onChange={handleChange} />
      </label>
      <button>+ ADD</button>
    </form>
  );
};

export default AddTodo;
