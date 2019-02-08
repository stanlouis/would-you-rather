import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
  render() {
    const { userData } = this.props;
    console.log('props', userData);
    return (
      <div className="container">
        <h1 className="text-center">Login Page</h1>
        <h4 className="text-center">Please login to play Would You Rather</h4>
        <ul className="list-group">
          {userData.map(user => (
            <li key={user.userID} className="list-group-item">
              {user.userName}
            </li>
          ))}
        </ul>
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
