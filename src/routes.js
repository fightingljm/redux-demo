import React, { PropTypes } from 'react';
import { Router,Route,browserHistory,IndexRoute } from 'react-router';

import App from './App.js'
import Home from './components/Home.js'
import Post from './components/Post.js'

export default function () {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path="/posts/:postId" component={Post} />
      </Route>
    </Router>
  )
}
