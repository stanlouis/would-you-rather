import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <React.Fragment>
        <h1>Would You Rather</h1>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { handleInitialData }
)(App);
