import axios from "axios";
import { API_BASE_URL, END_POINT } from "../constants/api";
import { SESSION_STORAGE_KEY } from "../constants/storage";

export const getNickname = async () => {
  const url = API_BASE_URL + END_POINT.NICKNAME;
  const userId = sessionStorage.getItem(SESSION_STORAGE_KEY.USER_ID);

  try {
    const { data } = await axios({
      url,
      method: "get",
      headers: { userId: userId },
    });
    const { success, code, message, data: resultData } = data;

    if (success && code === "SUCCESS") {
      return resultData.nickname;
    } else {
      alert(message);

      return "";
    }
  } catch (error) {
    alert(error);
    return "";
  }
};
