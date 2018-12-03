import {
  GET_PLAYERS_START,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_ERROR,
  SAVE_PLAYERS_START,
  SAVE_PLAYERS_SUCCESS,
  SAVE_PLAYERS_ERROR,
  DELETE_PLAYERS_START,
  DELETE_PLAYERS_SUCCESS,
  DELETE_PLAYERS_ERROR,
} from "./types";

// Get
export const onGetPlayersStart = () => ({ type: GET_PLAYERS_START });
export const onGetPlayersSuccess = data => ({ type: GET_PLAYERS_SUCCESS, data });
export const onGetPlayersError = error => ({ type: GET_PLAYERS_ERROR, error });

// Save
export const onSavePlayersStart = () => ({ type: SAVE_PLAYERS_START });
export const onSavePlayersSuccess = data => ({ type: SAVE_PLAYERS_SUCCESS, data });
export const onSavePlayersError = error => ({ type: SAVE_PLAYERS_ERROR, error });

// Delete
export const onDeletePlayersStart = () => ({ type: DELETE_PLAYERS_START });
export const onDeletePlayersSuccess = data => ({ type: DELETE_PLAYERS_SUCCESS, data });
export const onDeletePlayersError = error => ({ type: DELETE_PLAYERS_ERROR, error });

export function getPlayers() {
  return dispatch => {
    dispatch(onGetPlayersStart());
    fetch("http://localhost:3000/api/players")
    .then(data => data.json())
    .then(data => {
      dispatch(onGetPlayersSuccess(data));
    })
    .catch(error => dispatch(onGetPlayersError(error)));
  };
}

export function savePlayer(data) {
  return dispatch => {
    dispatch(onSavePlayersStart());
    fetch(
      "http://localhost:3000/api/players",
      {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    )
    .then(data => data.json())
    .then(data => {
      if (data.success) {
        dispatch(onSavePlayersSuccess(data));
        if (!data._id) dispatch(getPlayers());
      }
    })
    .catch(error => dispatch(onSavePlayersError(error)));
  };
}

export function deletePlayer(data) {
  return dispatch => {
    dispatch(onDeletePlayersStart());
    fetch(
      "http://localhost:3000/api/players",
      {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    )
    .then(data => data.json())
    .then(data => {
      if (data.success) {
        dispatch(onDeletePlayersSuccess(data));
        dispatch(getPlayers());
      }
    })
    .catch(error => dispatch(onDeletePlayersError(error)));
  };
}