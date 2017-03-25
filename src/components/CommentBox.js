import React from 'react';

class CommentBox extends React.Component {
  constructor() {
    super();
    this.state={
      comments:[
        "hello1",
        "hello2"
      ]
    }
  }
  render(){
    let  commentList = this.state.comments.map(item => {
      return(
        <div key={Math.random()} className="comment">{item}</div>
      )
    })
    return(
      <div className="comment-box">
        CommentBox
        {commentList}
      </div>
    )
  }
}

export default CommentBox;
