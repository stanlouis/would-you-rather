import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';

class Dashboard extends Component {
  render() {
    const { authedUser } = this.props;
    if (!authedUser) return <Login />;
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default connect(({ authedUser }) => ({
  authedUser,
}))(Dashboard);
