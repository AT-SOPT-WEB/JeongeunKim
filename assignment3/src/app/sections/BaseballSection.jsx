/** @jsxImportSource @emotion/react */

import Input from "../components/input/Input";
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
