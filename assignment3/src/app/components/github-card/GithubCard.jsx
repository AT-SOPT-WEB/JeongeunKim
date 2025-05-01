/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types";
import Button from "../button/Button";
import { Avatar, Chip, ChipContainer, Card } from "./GithubCard.styles";
import { css } from "@emotion/react";

const buttonPosition = css`
  width: fit-content;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const githubName = css`
  font-weight: 500;
  font-size: 1.5em;
  color: white;
`;

const githubLink = css`
  color: white;
  text-decoration: underline;
  margin-bottom: 1rem;
  display: inline-block;
  font-size: 1rem;
`;

const GithubCard = ({
  imgUrl,
  name,
  id,
  bio,
  githubUrl,
  followers,
  following,
  handleCloseButton,
}) => {
  return (
    <Card>
      <Avatar src={imgUrl} alt="깃허브 프로필 이미지" />
      <div>
        <Button text="X" css={buttonPosition} onClick={handleCloseButton} />
        <a
          css={githubName}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
        <p>{id}</p>
        <p>{bio}</p>
        <a
          css={githubLink}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {githubUrl}
        </a>
        <ChipContainer>
          <Chip>
            <p>followers</p>
            <p>{followers}</p>
          </Chip>
          <Chip>
            <p>following</p>
            <p>{following}</p>
          </Chip>
        </ChipContainer>
      </div>
    </Card>
  );
};

GithubCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired,
  handleCloseButton: PropTypes.func.isRequired,
};

export default GithubCard;
