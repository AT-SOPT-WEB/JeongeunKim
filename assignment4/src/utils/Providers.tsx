import { useState } from "react";
import { NicknameContext } from "../contexts/NicknameContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [nickname, setNickname] = useState("");

  return (
    <NicknameContext.Provider value={{ nickname, setNickname }}>
      {children}
    </NicknameContext.Provider>
  );
};
