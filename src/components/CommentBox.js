import React from 'react';
import store from '../store';
import {connect} from 'react-redux'

class CommentBox extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    store.dispatch({type:'ADD_COMMENT',comment:this.refs.content.value,postId:this.props.id});
    this.refs.commentForm.reset();
  }
  render(){
    console.log(this.props.id);
    let  commentList = this.props.comments[this.props.id].map(item => {
      return(
        <div key={Math.random()} className="comment">{item}</div>
      )
    })
    return(
      <div className="comment-box">
        CommentBox
        {commentList}
        <form className="comment-form" ref='commentForm' onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" className="input" ref='content'/>
          <button type="submit" className="submit-btn">提 交</button>
        </form>
        <div className="underline"></div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  comments:state.comments
})
export default connect(mapStateToProps)(CommentBox);
