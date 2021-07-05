import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './config/history';
import Home from './pages';
import Posts from './pages/posts';
import './assets/scss/index.scss';

const App = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
        </Switch>
      </Router>
    </>
  );
}

export default App;