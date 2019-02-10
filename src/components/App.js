import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import LoadingBar from 'react-redux-loading';
import Dashboard from './Dashboard';
import PageNotFound from './PageNotFound';

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    console.log(this.props);
    return (
      <BrowserRouter>
        <React.Fragment>
          <LoadingBar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route component={PageNotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { handleInitialData }
)(App);
