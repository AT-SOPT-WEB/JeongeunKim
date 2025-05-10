import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { MyPageSort } from "../types/myPage";
import { MY_PAGE_SORT } from "../constants/myPage";
import MyPageFormSection from "../sections/MyPageFormSection";

const toKoreanMyPageTitle = (type: MyPageSort) => {
  switch (type) {
    case MY_PAGE_SORT.CHANGE_NICKNAME:
      return "내 정보 조회하기";
    case MY_PAGE_SORT.SEARCH_MEMBER:
      return "SOPT 회원 조회하기";
    default:
      return "마이페이지";
  }
};

const MyPage = () => {
  const { type } = useParams();

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (type) setTitle(toKoreanMyPageTitle(type as MyPageSort));
  }, [type]);

  return (
    <div className="flex flex-col gap-4 place-content-center items-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      <MyPageFormSection type={type as MyPageSort} />
    </div>
  );
};

export default MyPage;
