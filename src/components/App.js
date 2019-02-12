import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import LoadingBar from 'react-redux-loading';
import Dashboard from './Dashboard';
import PageNotFound from './PageNotFound';
import QuestionView from './questions/QuestionView';
import AddQuestion from './questions/AddQuestion';
import Nav from './Nav';
import Leaderboard from './Leaderboard';

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
          <Nav />
          {this.props.loadingBar === true ? null : (
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/add" component={AddQuestion} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/questions/:id" component={QuestionView} />
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
    loading: authedUser === null,
  };
};
export default connect(
  mapStateToProps,
  { handleInitialData }
)(App);
