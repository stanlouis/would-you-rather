import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ imageUrl, userName, userID, authedUser }) => {
  const handleLogout = () => {
    authedUser(null);
  };
  return (
    <nav className="mb-1 navbar navbar-expand-lg navbar-dark default-color">
      <ul className="navbar-nav mr-auto nav-flex-icons">
        <li className="nav-item">
          <Link to="/" className="text-uppercase nav-link">
            Dashboard
          </Link>
        </li>

        {userID ? (
          <Fragment>
            <li className="nav-item">
              <Link to="#!" className="text-uppercase nav-link">
                Leader Board
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/add" className="text-uppercase nav-link">
                Add Question
              </Link>
            </li>
          </Fragment>
        ) : null}
      </ul>
      {userID ? (
        <Fragment>
          <div className="avatar text-white">
            Hello, <span className="text-slanted text-white">{userName}</span>
            <img
              src={imageUrl}
              alt="user"
              className="rounded-circle z-depth-0 mx-3"
              height="50"
            />
          </div>
          <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className="text-uppercase nav-link"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </li>
          </ul>
        </Fragment>
      ) : null}
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  const authedUserId = authedUser ? authedUser.id : null;
  if (authedUserId !== null) {
    const user = users[authedUserId];
    return {
      imageUrl: user.avatarURL,
      userName: user.name,
      userID: user.id,
      authedUser,
    };
  }
  return {
    imageUrl: '',
    userName: '',
    userID: '',
  };
};

export default connect(mapStateToProps)(Nav);
