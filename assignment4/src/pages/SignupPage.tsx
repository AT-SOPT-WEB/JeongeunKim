import { Link } from "react-router";
import { PATH } from "../constants/path";
import SignupFormSection from "../sections/SignupFormSection";

const SignupPage = () => {
  return (
    <div className="flex flex-col gap-4 place-content-center items-center">
      <h2 className="text-2xl font-bold">회원가입</h2>
      <SignupFormSection />
      <p>
        이미 회원이신가요?{" "}
        <Link to={PATH.LOGIN} className="hover:underline text-sm text-sky-600">
          로그인
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
