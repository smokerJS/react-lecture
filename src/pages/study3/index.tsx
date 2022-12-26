import Path from "model/Path";
import React, { FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/**
 
  리액트를 동작시키는 방법
  - lifecycle useEffect 훅으로 관리해보기
    - didmount: 컴포넌트가 그려진 다음
    - update (state, props): 관찰하고 있는 값이 변했을때
    - unmount: 컴포넌트가 화면에서 사라진 다음


    useEffect, useRef, useState
    이외의 훅을 사용해야만 하는 상황이라면
    애시당초 코드를 잘못짠것
    거기서 뭔가 더 덧붙이면 돌이킬수없음
 */

interface LifecycleComponentProps {
  value: number;
}

const LifecycleComponent: FC<LifecycleComponentProps> = (props) => {
  const { value } = props;

  const 함수 = () => {};

  const 변수 = 1234;

  /**
   * didmount
   * useEffect의 두번째 매개변수에 빈 배열을 넣기 []
   *
   * 컴포넌트가 안착할곳을 찾은 뒤 디드마운트 => 이후 실제 컨텐츠가 렌더링
   */
  useEffect(() => {
    // window.alert("didmount");
    // api호출 혹은 마운트 된 이후에 참조 가능한것들 (window 객체 등)
    return () => {
      // window.alert("unmount");
      // store 값 초기화 혹은 전역셋팅값 초기화
      // 이 컴포넌트가 사라졌을때 해야만 하는것들
    };
  }, []);

  useEffect(() => {
    console.log(value);
    // value가 특정값이 되었을때를 탐지해야할때
    // 예: value > 100 && window.alert('그만누르세요');
  }, [value]);

  /**
   *
   * useEffect는 렌더링하기위한 return 바로 위에 선언
   *
   */

  return <div>컴포넌트입니다 {value}</div>;
};

const Sduty3Page = () => {
  const [value, setValue] = useState(0);

  /**
   * ref 는 리렌더링을 발생시키지 않는다.
   * 그렇기때문에 화면에 노출하는일이 없는것이 좋다.
   * ref는 컴포넌트 내부에서 사용하는 변수를 담는 용도
   */
  const number = useRef(0);
  let number2 = 0; // 그냥 변수는 리렌더링 될때 초기화됨

  const $div = useRef(null);

  const handleClick = () => {
    setValue(value + 1);
  };

  const handleRefClick = () => {
    number.current = number.current + 1;
    number2 = number2 + 1;
  };

  return (
    <div ref={$div}>
      {/* 돔 요소의 프롭스에 ref를 담으면 돔 요소가 담김 */}
      <Link to={Path.STUDY2}>스터디2로 가기</Link>
      가나다라
      <br />
      <br />
      <button onClick={handleClick}>클릭!</button>
      <button onClick={handleRefClick}>ref 클릭!</button>
      <br />
      <div>ref 값: {number.current}</div>
      <div>그냥변수: {number2}</div>
      <LifecycleComponent value={value} />
    </div>
  );
};

export default Sduty3Page;
