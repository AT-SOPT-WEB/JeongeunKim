import PropTypes from "prop-types";
import { LogButton } from "./Search.styles";

const SearchLogButton = ({ text, handleDeleteClick, ...props }) => {
  return (
    <LogButton {...props}>
      {text}
      <span
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteClick();
        }}
      >
        X
      </span>
    </LogButton>
  );
};

SearchLogButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default SearchLogButton;
