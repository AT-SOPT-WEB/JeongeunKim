import { VIEW_OPTION } from "../../constants/header";
import {
  HeaderButton,
  HeaderButtonContainer,
  HeaderContainer,
  Title,
} from "./Header.styles";

export default function Header({ handleRenderView, clickedOption }) {
  return (
    <HeaderContainer>
      <Title>숫자야구 & 깃허브 검색</Title>
      <HeaderButtonContainer>
        {Object.values(VIEW_OPTION).map((value) => (
          <HeaderButton
            onClick={handleRenderView}
            value={value}
            isSelected={clickedOption === value}
            key={value}
          >
            {value}
          </HeaderButton>
        ))}
      </HeaderButtonContainer>
    </HeaderContainer>
  );
}
