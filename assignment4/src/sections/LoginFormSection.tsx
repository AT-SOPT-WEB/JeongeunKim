import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router";
import { PATH } from "../constants/path";
import { postSignin } from "../api/auth";
import { MY_PAGE_SORT } from "../constants/myPage";

const LoginFormSection = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginButtonClick = async () => {
    const isSuccess = await postSignin({ loginId, password });

    if (isSuccess) navigate(PATH.MY_PAGE + `/${MY_PAGE_SORT.CHANGE_NICKNAME}`);
  };

  return (
    <div className="text-center gap-2 flex flex-col">
      <Input
        id="아이디"
        placeholder="아이디"
        value={loginId}
        onChange={(e) => setLoginId(e.target.value)}
      />
      <Input
        id="비밀번호"
        placeholder="비밀번호"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button text="로그인" onClick={handleLoginButtonClick} />
    </div>
  );
};

export default LoginFormSection;
