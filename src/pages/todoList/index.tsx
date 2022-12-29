import { useState } from "react";
import Todo from "./types/Todo";
import Items from "./Items";
import Form from "./Form";

/**
    함수, 변수 네이밍 맞추기
    변수명 줄이기 금지 e 금지 무조건 event 풀로 쓰기
    모든 타입 선언은 interface 로 작성하도록 연습하기 (FC<여기에 작성하면 안돼요>)


    다음숙제
    끝말잇기 만들어오기
 */
// function solution(N: number) {
//     const binary = N.toString(2);
//     const firstBinaryNum = binary.indexOf("1") + 1;
//     const binaryGap = binary.slice(firstBinaryNum, binary.lastIndexOf("1") + 1);
//     const count = binaryGap.split("1").map((zero) => zero.length);
//     return count ? Math.max(...count) : 0;

//   const binary = N.toString(2);
//   let result = 0;

//   binary.split("1").forEach((str) => {
//     str.length >= result && (result = str.length);
//   });
//   return result;

//   1. 문제에서 원하는게 무엇인지 파악
//   => 1과 1사이에 0 개수가 가장 큰것이 길이가 몇인가?
//     => 1과 1사이 = split
//     => 0 개수 = length
// }

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
