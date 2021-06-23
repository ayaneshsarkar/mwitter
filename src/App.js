import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './config/history';
import Home from './pages';

const App = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;