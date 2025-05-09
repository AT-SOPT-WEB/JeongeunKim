import PropTypes from "prop-types";

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

PlayLog.propTypes = {
  logList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PlayLog;
