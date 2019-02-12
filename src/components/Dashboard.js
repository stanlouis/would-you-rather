import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import QuestionList from './QuestionList';

class Dashboard extends Component {
  state = {
    unanswered: true,
  };

  render() {
    const {
      authedUser,
      users,
      questions,
      unansweredQuestionsIds,
      answeredQuestionsIds,
    } = this.props;

    const { unanswered } = this.state;

    const questionsIdsToDisplay =
      unanswered && unansweredQuestionsIds.length > 0
        ? unansweredQuestionsIds
        : answeredQuestionsIds;

    return !authedUser ? (
      <Login />
    ) : (
      <Fragment>
        <div className="container">
          <div className="text-center my-5">
            <h1 className="Display-1 text-capitalize">Would you rather?</h1>
            <button
              disabled={this.state.unanswered}
              onClick={() => this.setState({ unanswered: true })}
              className="btn btn-default"
            >
              Unanswered
            </button>

            <button
              disabled={!this.state.unanswered}
              onClick={() => this.setState({ unanswered: false })}
              className="btn btn-default"
            >
              answered
            </button>
            {questionsIdsToDisplay.map(id => (
              <QuestionList
                id={id}
                key={id}
                users={users}
                questions={questions}
                authedUser={authedUser}
              />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

let getAnsweredQuestionsIds = function(questions, authedUserId) {
  return Object.keys(questions)
    .filter(
      id =>
        questions[id].optionOne.votes.includes(authedUserId) ||
        questions[id].optionTwo.votes.includes(authedUserId)
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
};

let getUnansweredQuestionsIds = function(questions, authedUserId) {
  return Object.keys(questions)
    .filter(
      id =>
        !questions[id].optionOne.votes.includes(authedUserId) &&
        !questions[id].optionTwo.votes.includes(authedUserId)
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
};

const mapStateToProps = ({ authedUser, questions, users }) => {
  const authedUserId = authedUser ? authedUser.id : null;

  const answeredQuestionsIds = getAnsweredQuestionsIds(questions, authedUserId);

  const unansweredQuestionsIds = getUnansweredQuestionsIds(
    questions,
    authedUserId
  );

  return {
    users,
    authedUser,
    questions,
    answeredQuestionsIds,
    unansweredQuestionsIds,
  };
};

export default connect(mapStateToProps)(Dashboard);
