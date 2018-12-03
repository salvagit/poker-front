import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactTable from "react-table";
import "react-table/react-table.css";

class PlayersTable extends Component {

  constructor(props){
    super(props);
    this.renderEditable = this.renderEditable.bind(this);
    this.renderActions = this.renderActions.bind(this);
  }

  renderEditable(cellInfo) {
    let { players } = this.props;
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...players];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.props.savePlayer(cellInfo.original);
        }}
        dangerouslySetInnerHTML={{
          __html: players[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }

  renderActions(cellInfo) {
    return (
      <div>
        <button
          onClick={ () => this.props.deletePlayer(cellInfo.original) }
          className="btn btn-danger"
        >remove</button>
      </div>
    );
  }

  renderAvatar(cellInfo) {
    if (!cellInfo.original.avatar) return false;
    return (
      <img src={cellInfo.original.avatar} height="50" width="50" />
    );
  }

  renderFlag(cellInfo) {
    if (!cellInfo.original.flag) return false;
    return (
      <img src={cellInfo.original.flag} height="50" width="80" />
    );
  }

  render() {
    let { players } = this.props;
    let columns = [{
      Header: "Avatar",
      id: "name",
      Cell: this.renderAvatar
    }, {
      Header: "Player",
      id: "name",
      accessor: "name",
      Cell: this.renderEditable
    }, {
      Header: "Winnings",
      accessor: "winnings",
      Cell: this.renderEditable
    }, {
      Header: "",
      id: "flag",
      Cell: this.renderFlag
    }, {
      Header: "NativeOf",
      accessor: "nativeOf",
      Cell: this.renderEditable
    }, {
      Header: "actions",
      Cell: this.renderActions
    }];

    return (
      <div>
        {
          players.length > 0 &&
          <ReactTable
            data={players}
            filterable={false}
            columns={columns}
            loading={false}
            defaultSorted={[
              {
                id: "name",
                desc: true
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        }
      </div>
    );
  }
}

PlayersTable.propTypes = {
  getPlayers: PropTypes.func.isRequired,
  savePlayer: PropTypes.func.isRequired,
  deletePlayer: PropTypes.func.isRequired,
  players: PropTypes.object
};

PlayersTable.defaultProps = {
  players: {}
};

export default PlayersTable;