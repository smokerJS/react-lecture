import React, {
  useState,
  ChangeEventHandler,
  MouseEventHandler,
  FormEventHandler,
} from "react";

/**
  eventHandler
   - input
   - button
   - form
 */

const ButtonComponent = () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    console.log("누름");
  };

  return <button onClick={handleClick}>누를게요</button>;
};

const InputTextComponent = () => {
  const [value, setValue] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return <input type="text" name="id" value={value} onChange={handleChange} />;
};

const Sduty4Page = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("id"));
    console.log(formData.get("password"));
  };

  return (
    <div>
      <InputTextComponent />
      <br />
      <ButtonComponent />
      <br />

      <form onSubmit={handleSubmit}>
        <label>
          id:
          <input type="text" name="id" />
        </label>
        <br />
        <label>
          password:
          <input type="text" name="password" />
        </label>

        <button>보내기</button>
      </form>
    </div>
  );
};

export default Sduty4Page;

// 숙제. Typescript로 todolist 만들기
/*
 *
 *  입력, 삭제, 리스트
 *
 */
