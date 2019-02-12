import {RECEIVE_USERS} from '../actions/users';
import {ADD_QUESTION, QUESTION_ANSWER} from '../actions/questions';

export const users = (state = {}, action) => {
  const {users, answer, qid, authedUser, question, type} = action;
  switch (type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...users,
      };
    case QUESTION_ANSWER:
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    case ADD_QUESTION:
      const { id, author } = question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id]),
        },
      };
    default:
      return state;
  }
};
