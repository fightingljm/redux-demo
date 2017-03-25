import React from 'react';
import store from '../store';

class PostBody extends React.Component {
  constructor() {
    super();
    this.state={
      num:store.getState().length
    }
  }
  render(){
    return(
      <div className="post-body">
        PostBody
        <div className="comment-num">
          {this.state.num} 评论
        </div>
      </div>
    )
  }
}

export default PostBody;
