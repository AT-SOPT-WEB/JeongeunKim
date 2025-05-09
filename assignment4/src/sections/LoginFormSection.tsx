import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router";
import { PATH } from "../constants/path";

const LoginFormSection = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginButtonClick = () => {
    // 로그인 로직 추가
    navigate(PATH.MY_PAGE);
  };

  return (
    <div className="text-center gap-2 flex flex-col">
      <Input
        id="아이디"
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
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
