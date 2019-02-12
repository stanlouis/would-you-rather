import { showLoading, hideLoading } from 'react-redux-loading';

import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

export const handleInitialData = () => async dispatch => {
  const {users, questions } = await getInitialData();
  dispatch(showLoading());
  // return getInitialData().then(({ users, questions }) => {
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(hideLoading());
  // });
};
