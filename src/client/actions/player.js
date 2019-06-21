import socket from "../services/socket-api";
import { joinRoom } from "./room";
import { NEW_PLAYER, CONNECT_PLAYER } from "../../constants/constants";

export const newPlayer = playerName => {
  return dispatch => {
    socket.emit(NEW_PLAYER, playerName, response => {
      if (response.status === "success") {
        dispatch(connectPlayer(playerName));
        dispatch(joinRoom("Lobby"));
      }
    });
  };
};

export const connectPlayer = playerName => ({
  type: CONNECT_PLAYER,
  playerName
});
