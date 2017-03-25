import React from 'react';

import PostBody from './components/PostBody';
import CommentBox from './components/CommentBox';

import {Provider} from 'react-redux';
import store from './store'

class App extends React.Component {
  render () {
    return(
      <Provider store={store}>
        <div>
          <div className="top  clearfix">
            <PostBody/>
          </div>
          <div className="bottom  clearfix">
            <CommentBox/>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;
