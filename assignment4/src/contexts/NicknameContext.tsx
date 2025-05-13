import { createContext, type Dispatch, type SetStateAction } from "react";

export interface NicknameContextType {
  nickname: string;
  setNickname: Dispatch<SetStateAction<string>>;
}

export const NicknameContext = createContext<NicknameContextType | undefined>(
  undefined
);
