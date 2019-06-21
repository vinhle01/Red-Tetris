import React from "react";
import PropTypes from "prop-types";
import Button from "../common/Button";
import { StyledContainer, StyledUserGroup } from "./styles";

let HeaderSub = ({
  playerName,
  roomName,
  onLogout,
  onBackHome,
  showBackHome
}) => {
  return (
    <StyledContainer>
      {showBackHome ? (
        <Button onClick={onBackHome}>Back Home</Button>
      ) : (
        <p>Tetris Rouge</p>
      )}
      <p>{roomName}</p>
      <StyledUserGroup>
        <p>{playerName}</p>
        {playerName && <Button onClick={onLogout}>Logout</Button>}
      </StyledUserGroup>
    </StyledContainer>
  );
};

HeaderSub.propTypes = {
  playerName: PropTypes.string.isRequired,
  roomName: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  onBackHome: PropTypes.func.isRequired,
  showBackHome: PropTypes.bool.isRequired
};

export default HeaderSub;
