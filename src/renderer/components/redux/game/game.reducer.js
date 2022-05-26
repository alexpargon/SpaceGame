import GameActionTypes from './game.types';

const INITIAL_STATE = {
  events: [],
};

const GameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GameActionTypes.GET_GAME_DATA:
      return {
        ...state,
        events: action.payload.events,
      };
    default:
      return state;
  }
};

export default GameReducer;
