import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import LoadingBar from 'react-redux-loading';
import Dashboard from './Dashboard';
import PageNotFound from './PageNotFound';
import QuestionView from './QuestionView';

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
          {this.props.loadingBar === 1 ? null : (
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/:id" component={QuestionView} />
              <Route component={PageNotFound} />
            </Switch>
          )}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ authedUser, loadingBar }) => {
  return {
    loading: loadingBar
  };
};
export default connect(
  mapStateToProps,
  { handleInitialData }
)(App);
