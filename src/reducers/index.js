import { combineReducers } from 'redux';
import { users } from './users';
import { questions } from './questions';
import { authedUser } from './authedUser';
import { loadingBarReducer } from 'react-redux-loading';

const rootReducer = combineReducers({
  users,
  authedUser,
  questions,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
