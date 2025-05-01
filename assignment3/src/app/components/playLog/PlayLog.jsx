import { LogBox, LogBoxContainer } from "./PlayLog.styles";

const PlayLog = ({ logList }) => {
  return (
    <LogBoxContainer>
      {logList.map((play, index) => (
        <LogBox key={play + index}>{play}</LogBox>
      ))}
    </LogBoxContainer>
  );
};

export default PlayLog;
