import React from 'react';
import { connect } from 'react-redux';
import { handleAnswer } from '../actions/questions';

const UnansweredQuestion = ({
  author,
  question,
  authedUserId,
  handleAnswer,
  id,
}) => {
  const handleSubmit = option => {
    handleAnswer({
      authedUser: authedUserId,
      qid: id,
      answer: option,
    });
  };

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
              <div className="card-text">
                <div className="d-flex justify-content-between bg-light">
                  <h4 className="my-auto m-2 text-uppercase">
                    {question.optionOne.text}
                  </h4>
                  <button
                    type="submit"
                    className="btn btn-info"
                    onClick={() => handleSubmit('optionTwo')}
                  >
                    Submit
                  </button>
                </div>
                <div className="d-flex justify-content-between bg-light mt-2">
                  <h4 className="my-auto m-2 text-uppercase">
                    {question.optionTwo.text}
                  </h4>
                  <button
                    type="submit"
                    className="btn btn-info"
                    onClick={() => handleSubmit('optionTwo')}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, users, authedUser }, { id }) => {
  const question = questions[id];
  const authedUserId = authedUser ? authedUser.id : null;
  const author = users[questions[id].author].name;
  return {
    question,
    author,
    authedUserId,
  };
};
export default connect(
  mapStateToProps,
  { handleAnswer }
)(UnansweredQuestion);
