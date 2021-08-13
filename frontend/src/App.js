import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { verifyAuth } from './actions/auth';
import history from './config/history';
import Home from './pages';
import Posts from './pages/posts';
import Post from './pages/post'; 
import Searh from './pages/search';
import Tag from './pages/tag';
import EditProfile from './pages/editProfile';
import Explore from './pages/explore';
import './assets/scss/index.scss';

const App = ({ verifyAuth }) => {
  useEffect(() => verifyAuth(), [ verifyAuth ]);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/edit-profile" component={EditProfile} />
        <Route exact path="/explore" component={Explore} />
        <Route path="/post/:id" component={Post} />
        <Route path="/search/:term" component={Searh} />
        <Route path="/tag/:tag" component={Tag} />
      </Switch>
    </Router>
  );
}

export default connect(null, { verifyAuth })(App);