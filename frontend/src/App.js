import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { verifyAuth } from './actions/auth';
import history from './config/history';
import Home from './pages';
import Posts from './pages/posts';
import Searh from './pages/search';
import './assets/scss/index.scss';

const App = props => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => props.verifyAuth(), []);

  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/search/:term" component={Searh} />
        </Switch>
      </Router>
    </>
  );
}

export default connect(null, { verifyAuth })(App);