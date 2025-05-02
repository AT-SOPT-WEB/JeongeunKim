import PropTypes from "prop-types";
import { DeleteLogButton, LogButton } from "./Search.styles";

const SearchLogButton = ({ text, handleDeleteClick }) => {
  return (
    <LogButton>
      {text}
      <DeleteLogButton onClick={handleDeleteClick}>X</DeleteLogButton>
    </LogButton>
  );
};

SearchLogButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default SearchLogButton;
