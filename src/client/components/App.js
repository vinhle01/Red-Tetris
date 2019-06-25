import React, { useState } from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import EventListener from "react-event-listener";
import Lobby from "./Lobby";
import Header from "./Header";
import Game from "./Game";
import Login from "./Login";
import Popup from "./common/Popup";
import { setConfig } from "react-hot-loader"; //to remove
import { toast } from "react-toastify";
import { handleHash } from "../actions/actions";
import "react-toastify/dist/ReactToastify.css";

setConfig({
  reloadHooks: false
});

toast.configure();

let App = ({ playerName, currentRoom }) => {
  return (
    <div>
      <Header />
      {!playerName ? (
        <Popup open={true} hideBackdrop>
          <Login />
        </Popup>
      ) : !currentRoom ? (
        <Lobby />
      ) : (
        <Game room={currentRoom} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    playerName: state.playerName,
    currentRoom: state.currentRoom
  };
};

App = connect(
  mapStateToProps,
  null
)(App);

export default hot(module)(App);
