import Items from "./Items";
import AddTodo from "./AddTodo";
import { ItemsProvider } from "./ItemContext";

/**
  store
  Context Api
  Redux
  Mobx
  Recoil
 */

function App() {
  return (
    <ItemsProvider>
      <div>
        <Items />
        <AddTodo />
      </div>
    </ItemsProvider>
  );
}

export default App;
