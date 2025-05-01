import { useState } from "react";
import Input from "../components/input/Input";
import GithubCard from "../components/github-card/GithubCard";

const GithubSearchSection = () => {
  const [inputText, setInputText] = useState("");
  const [isShowCard, setIsShowCard] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsShowCard(true);
    }
  };

  const handleCloseButtonClick = () => {
    setIsShowCard((prev) => !prev);
  };

  return (
    <>
      <Input
        text={inputText}
        handleInputChange={(e) => setInputText(e.target.value)}
        placeholder="Github 프로필을 검색해보세요"
        onKeyDown={handleKeyDown}
      />
      {isShowCard && (
        <GithubCard
          imgUrl="https://avatars.githubusercontent.com/u/128335727?v=4"
          name="김정은"
          id="Jeong-Ag"
          bio="🥨"
          githubUrl="https://github.com/Jeong-Ag"
          followers="34"
          following="32"
          handleCloseButton={handleCloseButtonClick}
        />
      )}
    </>
  );
};

export default GithubSearchSection;
