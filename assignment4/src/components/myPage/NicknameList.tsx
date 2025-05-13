interface Props {
  userList: Array<string>;
}

const NicknameList = ({ userList }: Props) => {
  return (
    <div className="flex flex-col gap-4 max-h-112 overflow-scroll text-center">
      {userList.length ? (
        userList.map((nickname, index) => (
          <p key={nickname + index} className="hover:text-sky-400">
            {nickname}
          </p>
        ))
      ) : (
        <p>검색된 사용자가 없어요</p>
      )}
    </div>
  );
};

export default NicknameList;
