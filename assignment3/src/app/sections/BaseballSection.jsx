/** @jsxImportSource @emotion/react */

import { useRef, useState } from "react";
import Input from "../components/input/Input";
import { isDuplicate } from "../utils/string";
import { CHANCE, LENGTH, MESSAGE } from "../constants/baseball";
import PlayLog from "../components/play-log/PlayLog";
import { css } from "@emotion/react";
import { colors } from "../constants/colors";
import { Section } from "./Section.styles";

const error = css`
  color: red;
`;

const win = css`
  color: ${colors.secondary};
  font-weight: 600;
`;

/**
 * 중복되지 않는 랜덤 숫자를 생성합니다.
 * @param {number} - 생성할 숫자 개수 (기본값 LENGTH)
 * @returns {Array<Number>} 생성한 랜덤 숫자 배열
 */
const generateAnswerNumber = (length = LENGTH) => {
  const answer = [];
  while (answer.length < length) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (!answer.includes(randomNumber)) answer.push(randomNumber);
  }

  return answer;
};

const BaseballSection = () => {
  const [inputText, setInputText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [resultText, setResultText] = useState("");
  const [playLog, setPlayLog] = useState([]);
  const answer = useRef(generateAnswerNumber());
  const [playCnt, setPlayCnt] = useState(1);
  /**
   * 입력값이 변경된 경우 유효성 검사를 진행하고 통과되면 상태를 업데이트 합니다.
   * @param {React.ChangeEvent<HTMLInputElement>} e - 입력 이벤트
   */
  const handleInputChange = (e) => {
    const value = e.target.value;

    setErrorMessage("");

    if (/[^0-9]/.test(value)) {
      setErrorMessage(MESSAGE.ONLY_NUMBER);
    } else if (value.length > LENGTH) {
      setErrorMessage(MESSAGE.CHECK_MAX_LENGTH);
    } else if (value.length === LENGTH && isDuplicate(value.split("")))
      setErrorMessage(MESSAGE.DUPLICATED_NUMBER);

    setInputText(value);
  };

  /**
   * 엔터 키 입력 시 결과를 체크합니다.
   * @param {React.KeyboardEvent<HTMLInputElement>} e - 키보드 이벤트
   */
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (errorMessage) return;
      const { strike, ball } = checkResult();
      showResult({ strike, ball });
      setInputText("");
    }
  };

  /**
   * 현재 입력값과 정답을 비교하여 스트라이크와 볼을 계산합니다.
   * @returns {{strike: number, ball: number}} 게임 결과
   */
  const checkResult = () => {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < LENGTH; i++) {
      const number = Number(inputText[i]);
      if (number === answer.current[i]) {
        strike++;
      } else if (answer.current.includes(number)) ball++;
    }

    return { strike, ball };
  };

  /**
   * 계산된 결과를 화면에 출력하고 승리 시 상태를 초기화합니다.
   * @param {{ strike: number, ball: number }} - 게임 결과 객체
   */
  const showResult = ({ strike, ball }) => {
    if (strike === 3) {
      setResultText(MESSAGE.WIN);

      setTimeout(() => {
        setInputText("");
        setErrorMessage("");
        setResultText("");
        setPlayLog([]);
        setPlayCnt(1);
        answer.current = generateAnswerNumber();
      }, 3000);
    } else {
      setResultText(`${strike} 스트라이크 ${ball} 볼`);
    }

    const logText = `${inputText} - ${strike}S ${ball}B`;
    setPlayLog((prev) => [...prev, logText]);

    setPlayCnt((prev) => prev + 1);

    checkValidPlayChange();
  };

  const checkValidPlayChange = () => {
    console.log(playCnt);
    if (playCnt >= CHANCE) {
      setResultText(MESSAGE.LOSE);

      setTimeout(() => {
        setInputText("");
        setErrorMessage("");
        setPlayLog([]);
        setResultText("");
        answer.current = generateAnswerNumber();
        setPlayCnt(1);
      }, 5000);
    }
  };

  return (
    <Section>
      <Input
        type="number"
        text={inputText}
        handleInputChange={handleInputChange}
        placeholder="세 자리 숫자를 입력해주세요"
        onKeyDown={handleKeyDown}
      />
      {errorMessage && <p css={error}>{errorMessage}</p>}
      {resultText && <p css={win}>{resultText}</p>}
      <PlayLog logList={playLog} />
    </Section>
  );
};

export default BaseballSection;
