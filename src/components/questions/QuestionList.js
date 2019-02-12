import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const QuestionList = ({ authedUser, questions, id, users }) => {
  const imageUrl = users[questions[id].author].avatarURL;
  const userName = users[questions[id].author].name;

  return (
    <Fragment>
      <div className="container my-5">
        <div className="row">
          <div className="col-8 mx-auto justify-content-center">
            <div className="card flex-row flex-wrap">
              <div className="card-header border-0">
                <img
                  src={imageUrl}
                  alt="user"
                  className="rounded-circle z-depth-0 mr-3"
                  height="75"
                />
                <small>
                  {userName} <br /> Would you rather?
                </small>
              </div>
              <div className="card-block text-left p-2">
                <h4>
                  {questions[id].optionOne.text}{' '}
                  <span className="text-slanted">or</span>
                </h4>
                <h4>{questions[id].optionTwo.text}</h4>
                <Link to={`/questions/${id}`} className="btn btn-default rounded">
                  View Poll
                </Link>
              </div>
              {/* <div className="w-50" /> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default QuestionList;
