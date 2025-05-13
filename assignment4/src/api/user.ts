import axios from "axios";
import { API_BASE_URL, END_POINT } from "../constants/api";
import { SESSION_STORAGE_KEY } from "../constants/storage";
import { createQueryParamUrl } from "../utils/string";

interface GetUsersNicknameProps {
  keyword: string;
}
interface PatchUsersNicknameProps {
  nickname: string;
}

export const getNickname = async () => {
  const url = API_BASE_URL + END_POINT.NICKNAME;
  const userId = sessionStorage.getItem(SESSION_STORAGE_KEY.USER_ID);

  try {
    const { data } = await axios({
      url,
      method: "get",
      headers: { userId },
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

export const getUsersNickname = async ({ keyword }: GetUsersNicknameProps) => {
  const url = API_BASE_URL + END_POINT.USERS;
  const paramsUrl = createQueryParamUrl({ url, params: keyword });

  try {
    const { data } = await axios({
      url: paramsUrl,
      method: "get",
    });
    const { success, code, message, data: resultData } = data;

    if (success && code === "SUCCESS") {
      return resultData.nicknameList;
    } else {
      alert(message);

      return [];
    }
  } catch (error) {
    alert(error);
    return [];
  }
};

export const patchUserNickname = async ({
  nickname,
}: PatchUsersNicknameProps) => {
  const url = API_BASE_URL + END_POINT.USERS;
  const userId = sessionStorage.getItem(SESSION_STORAGE_KEY.USER_ID);

  try {
    const { data } = await axios({
      url,
      method: "patch",
      headers: { userId },
      data: { nickname },
    });
    const { success, message } = data;

    if (success) alert(`${nickname}으로 변경되었어요`);
    else alert(message);

    return success;
  } catch (error) {
    alert(error);

    return false;
  }
};
