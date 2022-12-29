import { useState } from "react";
import Todo from "./types/Todo";
import Items from "./Items";
import Form from "./Form";

function App() {
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

  return (
    <div>
      <Items items={items} onDelete={handleDelete} />
      <Form onCreate={handleCreate} />
    </div>
  );
}

export default App;
