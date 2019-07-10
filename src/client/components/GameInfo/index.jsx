import { connect } from "react-redux";
import GameInfoSub from "./subcomponent";
import { startGame } from "../../actions/actions";

const mapStateToProps = state => {
  return {
    room: state.room,
    isHost: state.player.isHost
  };
};
const actionCreators = { startGame };
const GameInfo = connect(
  mapStateToProps,
  actionCreators
)(GameInfoSub);

export default GameInfo;
