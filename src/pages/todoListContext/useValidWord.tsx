import { useRef } from "react";

const useValidWord = () => {
  const wordSet = useRef<Set<string>>(new Set());
  const lastWord = useRef("");

  const checkValidWord = (text: string) => {
    if (wordSet.current.has(text)) {
      return {
        error: true,
        message: "중복 경고! 새로운 단어를 입력해주세요",
      };
    }

    if (
      lastWord.current &&
      lastWord.current[lastWord.current.length - 1] !== text[0]
    ) {
      return {
        error: true,
        message: "끝말 경고",
      };
    }

    wordSet.current.add(text);
    lastWord.current = text;
    return {
      error: false,
      message: "성공",
    };
  };

  return { checkValidWord };
};

export default useValidWord;
