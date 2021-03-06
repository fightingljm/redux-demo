import React from 'react';
import {Link} from 'react-router'

import {connect} from 'react-redux';
import store from '../store'

class PostBody extends React.Component {
  handleClick(){
    store.dispatch({type:'INCREMENT_LIKES',index:this.props.id -1})
  }
  render(){
    console.log(this.props.posts[this.props.id -1 ].likes);
    return(
      <div className="post-body">
        <Link to={`/posts/${this.props.id}`} className="title">
          {this.props.posts[this.props.id -1 ].title}
        </Link>
        <div className="love-num num" onClick={this.handleClick.bind(this)}>
          {this.props.posts[this.props.id -1 ].likes} 喜欢
        </div>
        <div className="comment-num num">
          {this.props.comments[this.props.id].length} 评论
          {/* {JSON.stringify(this.props.comments).length} 评论 */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments:state.comments,
  posts:state.posts
})

export default connect(mapStateToProps)(PostBody);
