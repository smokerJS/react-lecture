import React, { FC, useState } from "react";

/**
 
  화면을 바꾸는 방법
  - state
  - props

 */

/**
  const array1 = ['가', '나', '다'];
  const [val1, val2, val3] = array1;
  val1 '가'
  val2 '나'
  val3 '다'
  useState() => [value, setValue];
  const [value, setValue] = [value, setValue];
 */

/**
  1. 컨테이너패턴
     => 부모가 모든 로직과 state 를 가지고 하위 컴포넌트에 내려주는 방법
        => 부모밑의 모든 컴포넌트가 리렌더링 되는 문제가 있음

  2. 아토믹패턴
     => 컴포넌트를 최대한 분리하여 자기의 역할에 맞는 기능을 자기가 들고있어
        다른 컴포넌트의 리렌더링에 관여하지 않는 방법
          => 관리할 컴포넌트가 많아짐
 */

const StateComponent: FC = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>버튼</button>
      {value}
    </div>
  );
};

interface PropsComponentProps {
  value: number;
}

const PropsComponent: FC<PropsComponentProps> = (props) => {
  const { value } = props;

  return <div>{value}</div>;
};

const Study2PropsComponent: FC = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>프롭스버튼</button>
      <PropsComponent value={value} />
    </div>
  );
};

const Sduty2Page: FC = () => {
  return (
    <div>
      <StateComponent />
      <br />
      <br />
      <Study2PropsComponent />
    </div>
  );
};

export default Sduty2Page;
