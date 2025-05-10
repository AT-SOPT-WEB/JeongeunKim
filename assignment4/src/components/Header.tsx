import { useNavigate } from "react-router";
import { PATH } from "../constants/path";
import { SESSION_STORAGE_KEY } from "../constants/storage";

const navList = [
  { text: "내 정보", path: PATH.MY_PAGE },
  { text: "SOPT 회원 조회하기", path: PATH.MAIN },
];

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_STORAGE_KEY.USER_ID);
    alert("로그아웃되었습니다!");
    navigate(PATH.LOGIN);
  };

  return (
    <header className="bg-sky-300 p-4 flex justify-between">
      <h1 className="font-bold text-white">SOPT 회원 조회 하기</h1>
      <nav>
        <ul className="flex gap-12 text-white">
          {navList.map(({ text, path }) => (
            <li key={text} className="hover:font-bold">
              <a href={path}>{text}</a>
            </li>
          ))}
          <li>
            <button className="hover:font-bold" onClick={handleLogout}>
              로그아웃
            </button>
          </li>
        </ul>
      </nav>
      <p className="font-bold text-white">nickname</p>
    </header>
  );
};

export default Header;
