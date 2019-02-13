import {ADD_QUESTION, QUESTION_ANSWER, RECEIVE_QUESTIONS,} from '../actions/questions';

export const questions = (state = {}, action) => {
  const {type, questions: questions1, question} = action;
  switch (type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...questions1,
      };
    case QUESTION_ANSWER:
      const { qid, authedUser, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [question.id]: question,
      };
    default:
      return state;
  }
};