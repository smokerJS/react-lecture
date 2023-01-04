import { useState } from "react";
import Todo from "./types/Todo";

/**
    리액트 라이프사이클을 다루는 집합을 훅이라고 함

 */

export interface UseItems {
  items: Todo[];
  handleCreate: (text: string) => void;
  handleDelete: (deleteId: string) => void;
}

const useItems = (): UseItems => {
  const [items, setItems] = useState<Todo[]>([]);

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
