import React from 'react';
import PostBody from './components/PostBody';
import CommentBox from './components/CommentBox';

class App extends React.Component {
  render () {
    return(
      <div>
        app
        <PostBody/>
        <CommentBox/>
      </div>
    )
  }
}

export default App;
