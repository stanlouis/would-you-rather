import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PageNotFound from './PageNotFound';
import AnsweredQuestion from './AnsweredQuestion';
import UnansweredQuestion from './UnansweredQuestion';

class QuestionView extends Component {
  render() {
    const { question, isAnswered } = this.props;
    console.log('question', question);
    if (question) {
      return (
        <Fragment>
          <h1>Question View</h1>
          {isAnswered ? (
            <AnsweredQuestion id={question.id} />
          ) : (
            <UnansweredQuestion id={question.id} />
          )}
        </Fragment>
      );
    }
    return <PageNotFound />;
  }
}

const mapStateToProps = ({ questions, authedUser }, ownProps) => {
  const { id } = ownProps.match.params;
  const question = questions[id];
  const authedUserId = authedUser ? authedUser.id : null;

  const isAnswered = question
    ? question.optionOne.votes.includes(authedUserId) ||
      question.optionTwo.votes.includes(authedUserId)
    : null;

  return {
    question,
    authedUserId,
    isAnswered,
  };
};
export default connect(mapStateToProps)(QuestionView);
