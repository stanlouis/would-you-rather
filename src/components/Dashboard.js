import React, { Component } from 'react';
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

    const questionsIdsToDisplay = unanswered
      ? answeredQuestionsIds
      : unansweredQuestionsIds;

    return !authedUser ? (
      <Login />
    ) : (
      <div className="text-center my-5">
        <h1>Dashboard</h1>
        <button
          onClick={() => this.setState({ unanswered: true })}
          className="btn btn-outline-cyan"
        >
          Unanswered
        </button>

        <button
          onClick={() => this.setState({ unanswered: false })}
          className="btn btn-outline-primary"
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
    );
  }
}

const mapStateToProps = ({ authedUser, questions, users }) => {
  const authedUserId = authedUser ? authedUser.id : null;

  const answeredQuestionsIds = Object.keys(questions)
    .filter(
      id =>
        questions[id].optionOne.votes.includes(authedUserId) ||
        questions[id].optionTwo.votes.includes(authedUserId)
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  const unansweredQuestionsIds = Object.keys(questions)
    .filter(
      id =>
        !questions[id].optionOne.votes.includes(authedUserId) &&
        !questions[id].optionTwo.votes.includes(authedUserId)
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    users,
    authedUser,
    questions,
    answeredQuestionsIds,
    unansweredQuestionsIds,
  };
};

export default connect(mapStateToProps)(Dashboard);
