import React from 'react';

import PostBody from './PostBody';
import CommentBox from './CommentBox';

class Post extends React.Component {
  render(){
    // console.log('idddd',this.props);
    return(
      <div>
        <div className="top  clearfix">
          <PostBody id={this.props.params.postId} />
        </div>
        <div className="bottom clearfix">
          <CommentBox id={this.props.params.postId} />
        </div>
      </div>
    )
  }
}

export default Post;
