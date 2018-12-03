import React, {Component} from "react";
import PropTypes from "prop-types";
import PlayersTable from "../components/players/Table";
import NewPlayersForm from "../components/players/Form";
import { connect } from "react-redux";
import { getPlayers, savePlayer, deletePlayer } from "../actions/players.actions";

class Players extends Component {
  constructor(props){
    super(props);
    this.props.getPlayers();
  }

  render() {
    let { players, savePlayer, deletePlayer } = this.props;
    return (
      <div>
        <h3>New Player</h3>
        <NewPlayersForm
          onSubmit = { data => savePlayer(data) }
        />
        <h3>Poker Players</h3>
        <small>to edit click on the table's fields.</small>
        <PlayersTable
          players={players}
          savePlayer={savePlayer}
          deletePlayer={deletePlayer}
        />
      </div>
    );
  }
};

const mapStateTopProps = state => ({
  players: state.players.players.data,
  state
});

const mapDispatchTopProps = dispatch => ({
  getPlayers: () => dispatch(getPlayers()),
  savePlayer: player => dispatch(savePlayer(player)),
  deletePlayer: player => dispatch(deletePlayer(player)),
});

Players.propTypes = {
  getPlayers: PropTypes.func.isRequired,
  savePlayer: PropTypes.func.isRequired,
  deletePlayer: PropTypes.func.isRequired,
  players: PropTypes.object
};

Players.defaultProps = {
  players: {}
};

export default connect(mapStateTopProps, mapDispatchTopProps)(Players);
