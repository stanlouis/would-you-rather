import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import AnsweredQuestion from './AnsweredQuestion';
import UnansweredQuestion from './UnansweredQuestion';

class QuestionView extends Component {
  render() {
    const { question, isAnswered, id } = this.props;
    return (
      <Fragment>
        <h1>Question View</h1>
        {isAnswered ? <AnsweredQuestion /> : <UnansweredQuestion />}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }, props) => {
  const { id } = props.match.params;
  const question = questions[id];
  const authedUserId = authedUser ? authedUser.id : null;
  console.log('authedUserId', authedUserId);

  const isAnswered = question
    ? question.optionOne.votes.includes(authedUserId) ||
      question.optionTwo.votes.includes(authedUserId)
    : null;

  return {
    question,
    id,
    authedUserId,
    isAnswered,
  };
};
export default connect(mapStateToProps)(QuestionView);
