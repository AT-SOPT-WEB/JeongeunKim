import { useState } from "react";
import SearchArea from "../../components/search/SearchArea";
import { addLocalStorage, getLocalStorage } from "../../utils/storage";
import { Section } from "../Section.styles";
import { getUserInfo } from "../../api/github";
import { LOCAL_STORAGE } from "../../constants/key";
import { ERROR_MESSAGE } from "../../constants/github";
import GithubCard from "../../components/GithubCard/GithubCard";

const GithubSearchSection = () => {
  const [isShowCard, setIsShowCard] = useState(false);
  const [searchLog, setSearchLog] = useState(
    getLocalStorage(LOCAL_STORAGE.SEARCH_GITHUB)
  );
  const [userInfo, setUserInfo] = useState({});
  const [message, setMessage] = useState("");

  /**
   * 검색 요청 후 데이터를 핸들링합니다.
   *
   */
  const handleSearch = async (text) => {
    const trimmedInputText = text.trim();

    addLocalStorage(LOCAL_STORAGE.SEARCH_GITHUB, trimmedInputText);
    setSearchLog(getLocalStorage(LOCAL_STORAGE.SEARCH_GITHUB));

    const data = await getUserInfo(trimmedInputText);

    if (data) {
      setMessage("");
      setUserInfo(data);
      setIsShowCard(true);
    } else {
      setIsShowCard(false);
      setMessage(ERROR_MESSAGE.NOT_FOUND_USER);
    }
  };

  /**
   * 카드 닫기 버튼 클릭 시 상태를 토글합니다.
   */
  const handleCloseButtonClick = () => {
    setIsShowCard((prev) => !prev);
  };

  const {
    login: id,
    html_url: githubUrl,
    avatar_url,
    bio,
    followers,
    following,
    name,
  } = userInfo || {};

  return (
    <Section>
      <SearchArea
        handleSearch={handleSearch}
        searchLog={searchLog}
        setSearchLog={setSearchLog}
      />
      {isShowCard ? (
        <GithubCard
          avatarUrl={avatar_url}
          name={name}
          id={id}
          bio={bio}
          githubUrl={githubUrl}
          followers={followers}
          following={following}
          handleCloseButton={handleCloseButtonClick}
        />
      ) : (
        <p>{message}</p>
      )}
    </Section>
  );
};

export default GithubSearchSection;
