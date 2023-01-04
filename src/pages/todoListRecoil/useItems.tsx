import Todo from "./types/Todo";
import { useRecoilState } from "recoil";
import itemsState from "./atoms/items";

export interface UseItems {
  items: Todo[];
  handleCreate: (text: string) => void;
  handleDelete: (deleteId: string) => void;
}

const useItems = (): UseItems => {
  const [items, setItems] = useRecoilState(itemsState);

  const handleCreate = (text: string) => {
    setItems([
      ...items,
      {
        id: new Date().toISOString(),
        text,
      },
    ]);
  };

  const handleDelete = (deleteId: string) => {
    setItems(items.filter(({ id }) => id !== deleteId));
  };

  return {
    items,
    handleCreate,
    handleDelete,
  };
};

export default useItems;
