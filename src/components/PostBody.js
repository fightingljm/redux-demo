import React from 'react';
import {connect} from 'react-redux';

class PostBody extends React.Component {
  render(){
    return(
      <div className="post-body">
        PostBody
        <div className="comment-num">
          {this.props.comments.length} 评论
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments:state.comments
})

export default connect(mapStateToProps)(PostBody);
