import { useState } from "react";
import { SIGNUP_STEP } from "../constants/signup";
import type { SignupStepType } from "../types/signup";
import { useNavigate } from "react-router";
import {
  IdForm,
  NicknameForm,
  PasswordForm,
} from "../components/signup/SignupInputs";
import { PATH } from "../constants/path";
import { isValidId } from "../utils/string";

const SignupFormSection = () => {
  const navigate = useNavigate();

  const [idInput, setIdInput] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [step, setStep] = useState<SignupStepType>(SIGNUP_STEP.ID);

  const changeStep = (nextStep: SignupStepType) => {
    setStep(nextStep);
  };
  const moveToLogin = () => {
    alert(`${nickname}님 반가워요!`);
    navigate(PATH.LOGIN);
  };
  const handleIdNextClick = () => {
    if (idInput.includes(" ")) alert("아이디에 공백은 존재할 수 없어요.");
    else if (!isValidId(idInput))
      alert("아이디는 대소문자와 숫자만 입력할 수 있어요.");
    else changeStep(SIGNUP_STEP.PASSWORD);
  };
  const handlePasswordNextButtonClick = () => {
    if (password === checkPassword) changeStep(SIGNUP_STEP.NICKNAME);
    else alert("비밀번호를 확인해주세요.");
  };
  const handleNicknameNextClick = () => {
    moveToLogin();
  };

  const stepComponents = {
    [SIGNUP_STEP.ID]: (
      <IdForm
        value={idInput}
        handleValueChange={(e) => setIdInput(e.target.value)}
        handleNextButtonClick={handleIdNextClick}
      />
    ),
    [SIGNUP_STEP.PASSWORD]: (
      <PasswordForm
        value={password}
        handleValueChange={(e) => setPassword(e.target.value)}
        checkValue={checkPassword}
        handleCheckValueValue={(e) => setCheckPassword(e.target.value)}
        handleNextButtonClick={handlePasswordNextButtonClick}
      />
    ),
    [SIGNUP_STEP.NICKNAME]: (
      <NicknameForm
        value={nickname}
        handleValueChange={(e) => setNickname(e.target.value)}
        handleNextButtonClick={handleNicknameNextClick}
      />
    ),
  };

  return (
    <div className="text-center gap-4 flex flex-col">
      {stepComponents[step]}
    </div>
  );
};

export default SignupFormSection;
