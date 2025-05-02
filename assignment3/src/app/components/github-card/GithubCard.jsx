/** @jsxImportSource @emotion/react */

import PropTypes from "prop-types";
import Button from "../button/Button";
import {
  Avatar,
  Chip,
  ChipContainer,
  Card,
  InfoContainer,
} from "./GithubCard.styles";
import { css } from "@emotion/react";

const buttonPosition = css`
  width: fit-content;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const githubName = css`
  font-weight: 500;
  font-size: 1.5rem;
  color: white;
`;

const GithubCard = ({
  avatarUrl,
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
      <Avatar src={avatarUrl} alt="깃허브 프로필 이미지" />
      <InfoContainer>
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
      </InfoContainer>
    </Card>
  );
};

GithubCard.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  handleCloseButton: PropTypes.func.isRequired,
};

export default GithubCard;
