import type { ChangeEventHandler } from "react";
import Input from "../Input";
import Button from "../Button";

interface InputProps {
  value: string;
  handleValueChange: ChangeEventHandler<HTMLInputElement>;
  handleButtonClick: () => void;
}

export const MyInfoForm = ({
  value,
  handleValueChange,
  handleButtonClick,
}: InputProps) => {
  return (
    <>
      <Input
        label="새 닉네임"
        placeholder="새 닉네임을 입력하세요"
        id="새 닉네임"
        value={value}
        onChange={handleValueChange}
      />
      <Button
        text="저장"
        onClick={handleButtonClick}
        disabled={!value.trim()}
      />
    </>
  );
};

export const SearchNicknameForm = ({
  value,
  handleValueChange,
  handleButtonClick,
}: InputProps) => {
  return (
    <>
      <Input
        label="닉네임"
        placeholder="검색할 닉네임을 입력하세요"
        id="닉네임"
        value={value}
        onChange={handleValueChange}
      />
      <Button
        text="확인"
        onClick={handleButtonClick}
        disabled={!value.trim()}
      />
    </>
  );
};
