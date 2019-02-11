import { saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const QUESTION_ANSWER = 'QUESTION_ANSWER';

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const questionAnswer = ({ qid, authedUser, answer }) => {
  return {
    type: QUESTION_ANSWER,
    qid,
    authedUser,
    answer,
  };
};

export const handleAnswer = answerData => {
  return dispatch => {
    dispatch(questionAnswer(answerData));

    return saveQuestionAnswer(answerData).catch(error => {
      console.warn('handleAnswer error', error);
      dispatch(questionAnswer(answerData));
      alert('Save answer failed, Please try again');
    });
  };
};
