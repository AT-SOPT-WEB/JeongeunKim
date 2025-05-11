import { useState } from "react";
import { ERROR_MESSAGE, SIGNUP_STEP } from "../constants/signup";
import type { SignupStepType } from "../types/signup";
import { useNavigate } from "react-router";
import {
  IdForm,
  NicknameForm,
  PasswordForm,
} from "../components/signup/SignupForm";
import { PATH } from "../constants/path";
import {
  isStringWithEnglishNumber,
  isStringWithKoreanEnglishNumber,
} from "../utils/string";
import { postSignup } from "../api/auth";

const SignupFormSection = () => {
  const navigate = useNavigate();

  const [loginId, setLoginId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [step, setStep] = useState<SignupStepType>(SIGNUP_STEP.ID);

  const changeStep = (nextStep: SignupStepType) => {
    setStep(nextStep);
  };

  const moveToLogin = async () => {
    const isSuccess = await postSignup({ loginId, password, nickname });

    if (isSuccess) {
      navigate(PATH.LOGIN);
    }
  };

  const handleIdNextClick = () => {
    if (loginId.includes(" ")) alert(ERROR_MESSAGE.BLANK_NOT_ALLOW);
    else if (!isStringWithEnglishNumber(loginId))
      alert(ERROR_MESSAGE.VALID_ID_ERROR);
    else changeStep(SIGNUP_STEP.PASSWORD);
  };

  const handlePasswordNextButtonClick = () => {
    if (loginId.includes(" ")) alert(ERROR_MESSAGE.BLANK_NOT_ALLOW);
    else if (!isStringWithEnglishNumber(loginId))
      alert(ERROR_MESSAGE.VALID_PASSWORD_ERROR);
    else if (password !== checkPassword)
      alert(ERROR_MESSAGE.INCONSISTENCY_PASSWORD);
    else changeStep(SIGNUP_STEP.NICKNAME);
  };

  const handleNicknameNextClick = () => {
    if (loginId.includes(" ")) alert(ERROR_MESSAGE.BLANK_NOT_ALLOW);
    else if (!isStringWithKoreanEnglishNumber(loginId))
      alert(ERROR_MESSAGE.VALID_PASSWORD_ERROR);
    else moveToLogin();
  };

  const stepComponents = {
    [SIGNUP_STEP.ID]: (
      <IdForm
        value={loginId}
        handleValueChange={(e) => setLoginId(e.target.value)}
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
