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
} from "../actions/types";

const INITIAL_STATE = {
  isLoading: false,
  success: false,
  error: null,
  players: {},
  playerSaved: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {

    case GET_PLAYERS_START:
      return { ...state, isLoading: true };
    case GET_PLAYERS_SUCCESS:
      return { ...state, success: true, players: action.data, isLoading: false };
    case GET_PLAYERS_ERROR:
      return { ...state, isLoading: false };

    case SAVE_PLAYERS_START:
      return { ...state, isLoading: true };
    case SAVE_PLAYERS_SUCCESS:
      return { ...state, success: true, playerSaved: action.data, isLoading: false };
    case SAVE_PLAYERS_ERROR:
      return { ...state, isLoading: false };

    case DELETE_PLAYERS_START:
      return { ...state, isLoading: true };
    case DELETE_PLAYERS_SUCCESS:
      return { ...state, success: true, playerDeleted: action.data, isLoading: false };
    case DELETE_PLAYERS_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}