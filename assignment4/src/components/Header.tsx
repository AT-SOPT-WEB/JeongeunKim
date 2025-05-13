import { Link, useNavigate } from "react-router";
import { PATH } from "../constants/path";
import { SESSION_STORAGE_KEY } from "../constants/storage";
import { MY_PAGE_SORT } from "../constants/myPage";
import { useNickname } from "../hooks/useNickname";
import { getNickname } from "../api/user";
import { useEffect } from "react";
import { createPathUrl } from "../utils/string";

const navList = [
  { text: "내 정보", path: MY_PAGE_SORT.CHANGE_NICKNAME },
  { text: "SOPT 회원 조회하기", path: MY_PAGE_SORT.SEARCH_MEMBER },
];

const Header = () => {
  const navigate = useNavigate();
  const { nickname, setNickname } = useNickname();

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_STORAGE_KEY.USER_ID);
    alert("로그아웃되었습니다!");
    navigate(PATH.LOGIN);
  };

  useEffect(() => {
    const fetchNickname = async () => {
      const nickname = await getNickname();
      setNickname(nickname);
    };
    fetchNickname();
  }, [setNickname]);

  return (
    <header className="bg-primary p-4 flex justify-between">
      <h1 className="font-bold text-white">SOPT 회원 조회 하기</h1>
      <nav>
        <ul className="flex gap-12 text-white">
          {navList.map(({ text, path }) => (
            <li key={text} className="hover:font-bold">
              <Link to={createPathUrl([PATH.MY_PAGE, path])}>{text}</Link>
            </li>
          ))}
          <li>
            <button className="hover:font-bold" onClick={handleLogout}>
              로그아웃
            </button>
          </li>
        </ul>
      </nav>
      <p className="font-bold text-white">{nickname}</p>
    </header>
  );
};

export default Header;
