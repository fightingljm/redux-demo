import React from 'react';
import PostBody from './components/PostBody';
import CommentBox from './components/CommentBox';

class App extends React.Component {
  render () {
    return(
      <div>
        app
        <div className="top  clearfix">
          <PostBody/>
        </div>
        <div className="bottom  clearfix">
          <CommentBox/>
        </div>
      </div>
    )
  }
}

export default App;
