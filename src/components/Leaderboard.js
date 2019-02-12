import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Leaderboard = ({ usersData, authedUser }) => {
  if (!authedUser) return <Redirect to="/" />;
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-8 mx-auto justify-content-center">
          <h1 className="display-4 text-center mb-3">Leaderboard</h1>
          <table className="table table-striped table-bordered text-center">
            <thead className="default-color-dark white-text">
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Avatar</th>
                <th>Questions</th>
                <th>Answers</th>
                <th>Total Score</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user, key) => (
                <tr key={user.id}>
                  <td>{key + 1}</td>
                  <td>{user.name}</td>
                  <td>
                    <img
                      src={user.avatar}
                      alt="User icon"
                      className="rounded-circle z-depth-0 mr-3"
                      height="35"
                    />
                  </td>
                  <td>{user.questions}</td>
                  <td>{user.answers}</td>
                  <td>{user.questions + user.answers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  let usersData = [];
  Object.keys(users).map(userId =>
    usersData.push({
      id: userId,
      name: users[userId].name,
      avatar: users[userId].avatarURL,
      questions: users[userId].questions.length,
      answers: Object.keys(users[userId].answers).length,
    })
  );

  usersData.sort((a, b) => {
    return b.questions + b.answers - (a.questions + a.answers);
  });
  return {
    usersData,
    authedUser,
  };
};

export default connect(mapStateToProps)(Leaderboard);
