import { Link } from "react-router";
import LoginFormSection from "../sections/LoginFormSection";
import { PATH } from "../constants/path";

const LoginPage = () => {
  return (
    <div className="flex flex-col gap-4 place-content-center items-center">
      <h2 className="text-2xl font-bold">로그인</h2>
      <LoginFormSection />
      <Link to={PATH.SIGN_UP} className="hover:underline text-sm text-sky-600">
        회원가입
      </Link>
    </div>
  );
};

export default LoginPage;
