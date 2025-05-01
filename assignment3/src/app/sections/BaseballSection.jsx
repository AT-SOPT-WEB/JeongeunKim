/** @jsxImportSource @emotion/react */

import { useRef, useState } from "react";
import Input from "../components/input/Input";
import { isDuplicate } from "../utils/string";
import { ERROR_MESSAGE, LENGTH } from "../constants/baseball";
import PlayLog from "../components/playLog/PlayLog";
import { css } from "@emotion/react";
import { colors } from "../constants/colors";

const container = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 4rem;
  align-items: center;
  justify-content: center;
`;

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

  /**
   * 입력값이 변경된 경우 유효성 검사를 진행하고 통과되면 상태를 업데이트 합니다.
   * @param {React.ChangeEvent<HTMLInputElement>} e - 입력 이벤트
   */
  const handleInputChange = (e) => {
    const value = e.target.value;

    setErrorMessage("");

    if (/[^0-9]/.test(value)) {
      setErrorMessage(ERROR_MESSAGE.ONLY_NUMBER);
    } else if (value.length > LENGTH) {
      setErrorMessage(ERROR_MESSAGE.CHECK_MAX_LENGTH);
    } else if (value.length === LENGTH && isDuplicate(value.split("")))
      setErrorMessage(ERROR_MESSAGE.DUPLICATED_NUMBER);

    setInputText(value);
  };

  return (
    <div css={container}>
      <Input
        type="number"
        text={inputText}
        handleInputChange={handleInputChange}
        placeholder="세 자리 숫자를 입력해주세요"
      />
      {errorMessage && <p css={error}>{errorMessage}</p>}
      {resultText && <p css={win}>{resultText}</p>}
      <PlayLog logList={playLog} />
    </div>
  );
};

export default BaseballSection;
