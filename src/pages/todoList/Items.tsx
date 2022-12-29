import React, { FC } from "react";
import Todo from "pages/todoList/types/Todo";

interface ItemHandler {
  onDelete: (deleteId: string) => void;
}

interface ItemProps extends ItemHandler, Todo {}

const Item: FC<ItemProps> = (props) => {
  const { text, id, onDelete } = props;

  return (
    <li>
      {text}
      <span onClick={() => onDelete(id)}>삭제</span>
    </li>
  );
};

interface ItemsProps extends ItemHandler {
  items: Todo[];
}

const Items: FC<ItemsProps> = (props) => {
  const { items, onDelete } = props;

  return (
    <div>
      <ul>
        {items.map(({ id, text }) => (
          <Item key={id} id={id} text={text} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default Items;

/**
  .icon {
    display: block;
    width: 22px;
    height: 22px;
    background-image: url('아이콘이미지 주소');
    background-size: cover;
  }
 */
{
  /* <i className="icon" />; */
}
