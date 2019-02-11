import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AnsweredQuestion = ({ question, answer, author }) => {
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  const percentOfOptionOneVotes = (100 * optionOneVotes) / totalVotes;
  const percentOfOptionTwoVotes = (100 * optionTwoVotes) / totalVotes;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-8 mx-auto justify-content-center">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4 className="card-title">Would you rather?</h4>
                <h4 className="text-slanted">by: {author}</h4>
              </div>

              <div className="card-text mt-3">
                <div className="">
                  <h4>{question.optionOne.text}</h4>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success text-dark"
                      role="progressbar"
                      aria-valuenow={percentOfOptionOneVotes}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${percentOfOptionOneVotes}%` }}
                    >
                      {percentOfOptionOneVotes}%
                    </div>
                  </div>
                  <p className="text-center">
                    {optionOneVotes} {optionOneVotes > 1 ? 'votes' : 'vote'}
                  </p>
                </div>

                <h4 className="mt-2">
                  <span className="text-slanted">or </span>{' '}
                  {question.optionTwo.text}
                </h4>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger text-dark"
                    role="progressbar"
                    aria-valuenow={percentOfOptionTwoVotes}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${percentOfOptionTwoVotes}%` }}
                  >
                    {percentOfOptionTwoVotes}%
                  </div>
                </div>
                <p className="text-center">
                  {optionTwoVotes} {optionTwoVotes > 1 ? 'votes' : 'vote'}
                </p>
                <h4 className="font-weight-bold mt-3">
                  Your answer is:{' '}
                  <span className="text-slanted text-danger">
                    {question[answer].text}
                  </span>
                </h4>
              </div>
            </div>

            <Link to="/" className="btn btn-info">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, authedUser, users }, ownProps) => {
  const { id } = ownProps;
  const question = questions[id];
  const authedUserId = authedUser ? authedUser.id : null;
  const author = users[questions[id].author].name;
  const answer = question.optionOne.votes.includes(authedUserId)
    ? 'optionOne'
    : 'optionTwo';

  return {
    question,
    answer,
    author,
  };
};
export default connect(mapStateToProps)(AnsweredQuestion);
