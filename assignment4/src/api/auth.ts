import axios from "axios";
import { API_BASE_URL, END_POINT } from "../constants/api";

interface PostSigninProps {
  loginId: string;
  password: string;
}

interface PostSignupProps {
  loginId: string;
  password: string;
  nickname: string;
}

export const postSignin = async ({ loginId, password }: PostSigninProps) => {
  const url = API_BASE_URL + END_POINT.SIGNIN;

  try {
    const { data } = await axios({
      url,
      method: "post",
      data: { loginId, password },
    });
    const { success, message } = data;

    if (!success) {
      alert(message);
    }

    return success;
  } catch (error) {
    alert(error);

    return false;
  }
};

export const postSignup = async ({
  loginId,
  password,
  nickname,
}: PostSignupProps) => {
  const url = API_BASE_URL + END_POINT.SIGNUP;

  try {
    const { data } = await axios({
      url,
      method: "post",
      data: { loginId, password, nickname },
    });
    const { success, code, message, data: resultData } = data;

    if (success && code === "SUCCESS") {
      alert(`${resultData.nickname}님 반가워요!`);
    } else {
      alert(message);
    }

    return success;
  } catch (error) {
    alert(error);
    return false;
  }
};
