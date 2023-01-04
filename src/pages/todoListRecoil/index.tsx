import Items from "./Items";
import AddTodo from "./AddTodo";
import { RecoilRoot } from "recoil";

import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useResetRecoilState,
} from "recoil";

/**
  useRecoilState = set get 둘다있음 useState
  useRecoilValue = get 만있음
  useSetRecoilState = set 만있음
  const resetItems = useResetRecoilState();
  resetItems();
 */

function App() {
  return (
    <RecoilRoot>
      <div>
        <Items />
        <AddTodo />
      </div>
    </RecoilRoot>
  );
}

export default App;
