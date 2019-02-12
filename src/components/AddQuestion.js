import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { withRouter } from 'react-router-dom';

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { authedUserId, history, handleAddQuestion } = this.props;
    console.log('id', authedUserId);
    const { optionOneText, optionTwoText } = this.state;
    handleAddQuestion({ optionOneText, optionTwoText, author: authedUserId });
    history.push('/');
  };

  render() {
    return (
      <Fragment>
        <h1 className="display-4 text-center mt-5">Add Question</h1>
        <div className="container my-5">
          <div className="row">
            <div className="col-8 mx-auto justify-content-center">
              <form onSubmit={this.handleSubmit}>
                <div className="card text-center">
                  <div className="card-header border-0">
                    <h4>Would you rather?</h4>
                  </div>
                  <div className="card-body">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Option One
                        </span>
                      </div>
                      <input
                        type="text"
                        id="optionOneText"
                        className="form-control"
                        placeholder="Option"
                        aria-label="Option"
                        aria-describedby="basic-addon1"
                        value={this.state.optionOneText}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Option Two
                        </span>
                      </div>
                      <input
                        type="text"
                        id="optionTwoText"
                        className="form-control"
                        placeholder="Option"
                        aria-label="Option"
                        aria-describedby="basic-addon1"
                        value={this.state.optionTwoText}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-default btn-block mt-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  const authedUserId = authedUser ? authedUser.id : null;
  return {
    authedUserId,
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { handleAddQuestion }
  )(AddQuestion)
);
