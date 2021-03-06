import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
  handleUserLogin = id => {
    this.props.setAuthedUser(id);
  };

  render() {
    const { userData } = this.props;
    return (
      <div className="container my-5">
        <div className="text-center">
          <h1>Login Page</h1>
          <h4 className="text-muted mt-3">
            Please login to play Would You Rather <br />
          </h4>
          <p className="text-muted">
            <small>Click on your profile card to signin</small>
          </p>
        </div>

        <div className="d-flex">
          <div className="list-group mx-auto justify-content-center mt-5">
            {userData.map(user => (
              <button
                key={user.userID}
                className="list-group-item list-group-item-action btn"
                onClick={() => this.handleUserLogin(user.userID)}
              >
                <p className="mb-0">
                  <img
                    src={user.imageUrl}
                    alt="user"
                    className="rounded-circle z-depth-0 mr-3"
                    height="75"
                  />

                  {user.userName}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const userData = Object.keys(users).map(user => ({
    imageUrl: users[user].avatarURL,
    userName: users[user].name,
    userID: users[user].id,
  }));

  return {
    userData,
  };
};

export default connect(
  mapStateToProps,
  { setAuthedUser }
)(Login);
