import { useState } from "react";
import {
  MyInfoForm,
  SearchNicknameForm,
} from "../components/myPage/MyPageForm";
import { MY_PAGE_SORT } from "../constants/myPage";
import type { MyPageSort } from "../types/myPage";
import NicknameList from "../components/myPage/NicknameList";
import { getUsersNickname } from "../api/user";

interface Props {
  type: MyPageSort;
}

const MyPageRenderSection = ({ type }: Props) => {
  const [newNickname, setNewNickname] = useState("");
  const [searchNickname, setSearchNickname] = useState("");
  const [userList, setUserList] = useState([]);

  const handleNewNicknameClick = () => {};
  const handleSearchNicknameClick = async () => {
    const list = await getUsersNickname({ keyword: searchNickname });
    setUserList(list);
  };

  const renderContent = {
    [MY_PAGE_SORT.CHANGE_NICKNAME]: (
      <MyInfoForm
        value={newNickname}
        handleValueChange={(e) => setNewNickname(e.target.value)}
        handleButtonClick={handleNewNicknameClick}
      />
    ),
    [MY_PAGE_SORT.SEARCH_MEMBER]: (
      <div className="flex flex-col gap-8 justify-center">
        <SearchNicknameForm
          value={searchNickname}
          handleValueChange={(e) => setSearchNickname(e.target.value)}
          handleButtonClick={handleSearchNicknameClick}
        />
        <NicknameList userList={userList} />
      </div>
    ),
  };

  return <div className="flex flex-col gap-4">{renderContent[type]}</div>;
};

export default MyPageRenderSection;
