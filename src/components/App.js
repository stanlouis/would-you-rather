import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

import './App.css';
import Login from './Login';
import { LoadingBar } from 'react-redux-loading';

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
      console.log(this.props)
    return (
      <React.Fragment>
        <LoadingBar />
        <h1>Would You Rather</h1>
        <Login />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { handleInitialData }
)(App);
