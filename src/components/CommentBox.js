import React from 'react';
import {connect} from 'react-redux';
import {addComment,fetchComments} from '../actions/commentActions'

class CommentBox extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    // store.dispatch({type:'ADD_COMMENT',comment:this.refs.content.value,postId:this.props.id});
    let data = {
      commentBody:this.refs.content.value,
      postId:this.props.id
    }
    this.props.addComment(data)
    this.refs.commentForm.reset();
  }
  componentWillMount(){
    this.props.fetchComments();
  }
  render(){
    // console.log(this.props.id);
    let  commentList = this.props.comments[this.props.id].map(item => {
      return(
        <div key={Math.random()} className="comment">{item}</div>
      )
    })
    // let  commentList = JSON.stringify(this.props.comments)
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
CommentBox.propTypes = {
  addComment:React.PropTypes.func.isRequired,
  fetchComments:React.PropTypes.func.isRequired,
  comments:React.PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  comments:state.comments
})
export default connect(mapStateToProps,{addComment,fetchComments})(CommentBox);
