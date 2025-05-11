import axios from "axios";
import { API_BASE_URL, END_POINT } from "../constants/api";

interface PostSignupProps {
  loginId: string;
  password: string;
  nickname: string;
}
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
