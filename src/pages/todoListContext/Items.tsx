import React, { FC, useContext } from "react";
import Todo from "pages/todoList/types/Todo";
import ItemsContext from "./ItemContext";

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

const Items: FC = () => {
  const { items, handleDelete } = useContext(ItemsContext)!;

  return (
    <div>
      <ul>
        {items.map(({ id, text }) => (
          <Item key={id} id={id} text={text} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default Items;
