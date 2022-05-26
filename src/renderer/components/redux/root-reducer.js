import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import GameReducer from './game/game.reducer';

export default combineReducers({
  user: userReducer,
  game: GameReducer,
});
