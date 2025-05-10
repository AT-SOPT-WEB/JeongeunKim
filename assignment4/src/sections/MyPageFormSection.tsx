import { useState } from "react";
import {
  MyInfoForm,
  SearchNicknameForm,
} from "../components/myPage/MyPageInputs";
import { MY_PAGE_SORT } from "../constants/myPage";
import type { MyPageSort } from "../types/myPage";

interface Props {
  type: MyPageSort;
}

const MyPageFormSection = ({ type }: Props) => {
  const [newNickname, setNewNickname] = useState("");
  const [searchNickname, setSearchNickname] = useState("");

  const handleNewNicknameClick = () => {};
  const handleSearchNicknameClick = () => {};

  const renderContent = {
    [MY_PAGE_SORT.CHANGE_NICKNAME]: (
      <MyInfoForm
        value={newNickname}
        handleValueChange={(e) => setNewNickname(e.target.value)}
        handleButtonClick={handleNewNicknameClick}
      />
    ),
    [MY_PAGE_SORT.SEARCH_MEMBER]: (
      <SearchNicknameForm
        value={searchNickname}
        handleValueChange={(e) => setSearchNickname(e.target.value)}
        handleButtonClick={handleSearchNicknameClick}
      />
    ),
  };

  return <div className="flex flex-col gap-4">{renderContent[type]}</div>;
};

export default MyPageFormSection;
