import { SET_AUTH_USER } from '../actions/authedUser';

export const authedUser = (state = null, { type, id }) => {
  switch (type) {
    case SET_AUTH_USER:
      return {...state, id};
    default:
      return state;
  }
};