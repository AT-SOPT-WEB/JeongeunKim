import PropTypes from "prop-types";
import { VIEW_OPTION } from "../../constants/header";
import Button from "../button/Button";
import { HeaderButtonContainer, HeaderContainer, Title } from "./Header.styles";

const Header = ({ handleRenderView, clickedOption }) => {
  return (
    <HeaderContainer>
      <Title>숫자야구 & 깃허브 검색</Title>
      <HeaderButtonContainer>
        {Object.values(VIEW_OPTION).map((value) => (
          <Button
            key={value}
            text={value}
            onClick={handleRenderView}
            isSelected={clickedOption === value}
          />
        ))}
      </HeaderButtonContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  handleRenderView: PropTypes.func.isRequired,
  clickedOption: PropTypes.oneOf(Object.values(VIEW_OPTION)).isRequired,
};

export default Header;
