import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import AnsweredQuestion from './AnsweredQuestion';
import UnansweredQuestion from './UnansweredQuestion';

const QuestionView = props => {
  const {question, isAnswered, authedUser} = props;

  if (!authedUser) return <Redirect to="/"/>;
  return (
      <Fragment>
        {isAnswered ? (
            <AnsweredQuestion id={question.id}/>
        ) : (
            <UnansweredQuestion id={question.id}/>
        )}
      </Fragment>
  );
};

const mapStateToProps = ({ questions, authedUser }, ownProps) => {
  const { id } = ownProps.match.params;
  const question = questions[id];

  const isAnswered = question
    ? question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
    : null;

  return {
    question: question ? question : null,
    authedUser,
    isAnswered,
  };
};
export default connect(mapStateToProps)(QuestionView);
