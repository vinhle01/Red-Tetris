import React from "react";
import PropTypes from "prop-types";
import { StyledContainer, StyledButton, StyledRoomName } from "./styles";
import { MAX_PLAYER } from "../../../constants/constants";

//TODO : MUST CHANGE THE START GAME BUTTON

const GameInfoSub = ({ room, isHost }) => {
  const { playersCount, name: roomName, isStarted } = room;

  return (
    <StyledContainer id="game-info">
      <StyledRoomName>{roomName}</StyledRoomName>
      <p>
        [{playersCount}/{MAX_PLAYER} Players]
      </p>
      {isHost && !isStarted ? (
        <StyledButton>Press Enter to start</StyledButton>
      ) : (
        <div id="empty"></div>
      )}
      {!isHost && !isStarted ? (
        <StyledButton>Waiting for host to start</StyledButton>
      ) : (
        <div id="empty"></div>
      )}
    </StyledContainer>
  );
};

GameInfoSub.propTypes = {
  room: PropTypes.object.isRequired
};

export default GameInfoSub;
