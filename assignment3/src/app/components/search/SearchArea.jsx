import PropTypes from "prop-types";
import SearchLogButton from "./SearchLogButton";
import { deleteLocalStorage, getLocalStorage } from "../../utils/storage";
import Input from "../input/Input";
import {
  LogButtonContainer,
  SearchContainer,
  LogContainer,
} from "./Search.styles";
import { LOCAL_STORAGE } from "../../constants/key";

const SearchArea = ({
  inputText,
  handleInput,
  handleKeyDown,
  searchLog,
  setSearchLog,
}) => {
  const handleDeleteClick = (index) => {
    deleteLocalStorage(LOCAL_STORAGE.SEARCH_GITHUB, index);
    setSearchLog(getLocalStorage(LOCAL_STORAGE.SEARCH_GITHUB));
  };

  return (
    <SearchContainer>
      <Input
        text={inputText}
        handleInputChange={handleInput}
        placeholder="Github 프로필을 검색해보세요"
        onKeyDown={handleKeyDown}
      />
      <LogContainer>
        {!!searchLog.length && <p>최근 검색어</p>}
        <LogButtonContainer>
          {searchLog.map((text, index) => (
            <SearchLogButton
              key={text + index}
              text={text}
              handleDeleteClick={() => handleDeleteClick(index)}
            />
          ))}
        </LogButtonContainer>
      </LogContainer>
    </SearchContainer>
  );
};

SearchArea.propTypes = {
  inputText: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  searchLog: PropTypes.array.isRequired,
  setSearchLog: PropTypes.func.isRequired,
};
export default SearchArea;
