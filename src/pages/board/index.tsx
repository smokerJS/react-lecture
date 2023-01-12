import classes from "./BoardForm.module.css";
import { RecoilRoot } from "recoil";
import Writer from "./components/bordForm/Writer";
import Title from "./components/bordForm/Title";
import Content from "./components/bordForm/Content";
import SubmitButton from "./components/bordForm/SubmitButton";

/**
  숙제
  글쓰기
  글삭제
  글리스트 가져오기 구현하기
 */

function BoardFormPage() {
  return (
    <RecoilRoot>
      <div className={classes.form}>
        <Writer />
        <br />
        <Title />
        <br />
        <Content />
        <br />
        <SubmitButton />
      </div>
    </RecoilRoot>
  );
}

export default BoardFormPage;
