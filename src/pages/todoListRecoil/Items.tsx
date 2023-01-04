import React, { FC } from "react";
import Todo from "pages/todoList/types/Todo";
import { useRecoilState } from "recoil";
import itemsState from "./atoms/items";
import useItems from "./useItems";

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
  // const [items, setItems] = useRecoilState(itemsState)!;
  // const handleDelete = (deleteId: string) => {
  //   setItems(items.filter(({ id }) => id !== deleteId));
  // };

  const { items, handleDelete } = useItems();

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
