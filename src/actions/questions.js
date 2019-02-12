import { saveQuestionAnswer, saveQuestion } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

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

export const addQuestion = question => ({
  type: ADD_QUESTION,
  question,
});

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

export const handleAddQuestion = question => {
  return async dispatch => {
    const savedQuestion = await saveQuestion(question);
    dispatch(addQuestion(savedQuestion));
    // dispatch(addQuestion(question));

    // saveQuestion(question)
    //   .then(question => dispatch(addQuestion(question)))
    //   .catch(error => {
    //     console.warn('handleAddQuestion error', error);

    //     alert('Save question failed, Please try again');
    //     saveQuestion(question);
    //   });
  };
};
