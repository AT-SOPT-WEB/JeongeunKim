/** @jsxImportSource @emotion/react */

import Input from "../components/input/Input";
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
