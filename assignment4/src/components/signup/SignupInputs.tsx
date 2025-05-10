import { type ChangeEventHandler } from "react";
import { VALID_ID, VALID_PASSWORD } from "../../constants/signup";
import Input from "../Input";
import Button from "../Button";

interface InputProps {
  value: string;
  handleValueChange: ChangeEventHandler<HTMLInputElement>;
  handleNextButtonClick: () => void;
}

interface PasswordInputProps extends InputProps {
  checkValue: string;
  handleCheckValueValue: ChangeEventHandler<HTMLInputElement>;
}

export const IdForm = ({
  value,
  handleValueChange,
  handleNextButtonClick,
}: InputProps) => {
  return (
    <>
      <Input
        label="아이디"
        placeholder="아이디를 입력해주세요 (8~20자, 대소문자/숫자만 가능)"
        id="아이디"
        value={value}
        onChange={handleValueChange}
        minLength={VALID_ID.MIN}
        maxLength={VALID_ID.MAX}
      />
      <Button
        text="다음"
        onClick={handleNextButtonClick}
        disabled={!value.trim()}
      />
    </>
  );
};

export const PasswordForm = ({
  value,
  handleValueChange,
  checkValue,
  handleCheckValueValue,
  handleNextButtonClick,
}: PasswordInputProps) => {
  return (
    <>
      <Input
        label="비밀번호 입력"
        placeholder="비밀번호를 입력해주세요"
        id="비밀번호 입력"
        value={value}
        type="password"
        onChange={handleValueChange}
        maxLength={VALID_PASSWORD.MAX}
        minLength={VALID_PASSWORD.MIN}
      />
      <Input
        label="비밀번호 확인"
        placeholder="설정한 비밀번호를 재입력 해주세요"
        id="비밀번호 확인"
        type="password"
        value={checkValue}
        onChange={handleCheckValueValue}
      />
      <Button
        text="다음"
        onClick={handleNextButtonClick}
        disabled={!value.trim().length || !checkValue.trim().length}
      />
    </>
  );
};

export const NicknameForm = ({
  value,
  handleValueChange,
  handleNextButtonClick,
}: InputProps) => {
  return (
    <>
      <Input
        label="닉네임"
        placeholder="닉네임을 입력해주세요"
        id="닉네임"
        value={value}
        onChange={handleValueChange}
      />
      <Button
        text="회원가입 하기"
        onClick={handleNextButtonClick}
        disabled={!value.trim()}
      />
    </>
  );
};
