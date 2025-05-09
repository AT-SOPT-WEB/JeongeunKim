import PropTypes from "prop-types";
import SearchLogButton from "./SearchLogButton";
import { deleteLocalStorage, getLocalStorage } from "../../utils/storage";
import {
  LogButtonContainer,
  SearchContainer,
  LogContainer,
} from "./Search.styles";
import { LOCAL_STORAGE } from "../../constants/key";
import { useState } from "react";
import Input from "../Input/Input";

const SearchArea = ({ handleSearch, searchLog, setSearchLog }) => {
  const [inputText, setInputText] = useState("");
  const handleDeleteClick = (index) => {
    deleteLocalStorage(LOCAL_STORAGE.SEARCH_GITHUB, index);
    setSearchLog(getLocalStorage(LOCAL_STORAGE.SEARCH_GITHUB));
  };

  /**
   * Enter 키를 누르면 GitHub 사용자 정보를 요청합니다.
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} e 키보드 이벤트
   */
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim()) {
      handleSearch(inputText.trim());
      setInputText("");
    }
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        text={inputText}
        handleInputChange={(e) => setInputText(e.target.value)}
        placeholder="Github 프로필을 검색해보세요"
        onKeyDown={handleKeyDown}
      />
      <LogContainer>
        {!!searchLog.length && <p>최근 검색어</p>}
        <LogButtonContainer>
          {searchLog
            .slice(0, 3)
            .reverse()
            .map((text, index) => (
              <SearchLogButton
                key={text + index}
                text={text}
                onClick={() => handleSearch(text)}
                handleDeleteClick={() => handleDeleteClick(index)}
              />
            ))}
        </LogButtonContainer>
      </LogContainer>
    </SearchContainer>
  );
};

SearchArea.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  searchLog: PropTypes.array.isRequired,
  setSearchLog: PropTypes.func.isRequired,
};
export default SearchArea;
