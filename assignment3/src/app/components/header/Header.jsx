import { VIEW_OPTION } from "../../constants/header";
import Button from "../button/Button";
import { HeaderButtonContainer, HeaderContainer, Title } from "./Header.styles";

export default function Header({ handleRenderView, clickedOption }) {
  return (
    <HeaderContainer>
      <Title>숫자야구 & 깃허브 검색</Title>
      <HeaderButtonContainer>
        {Object.values(VIEW_OPTION).map((value) => (
          <Button
            onClickButton={handleRenderView}
            isSelected={clickedOption === value}
            key={value}
            text={value}
          />
        ))}
      </HeaderButtonContainer>
    </HeaderContainer>
  );
}
