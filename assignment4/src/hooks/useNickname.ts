import { useContext } from "react";
import { NicknameContext } from "../contexts/NicknameContext";

export const useNickname = () => {
  const context = useContext(NicknameContext);

  if (!context) {
    throw new Error("context가 없어요");
  }

  return context;
};
