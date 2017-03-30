import axios from 'axios'

export function _addComment(data) {
  return {
    type:'ADD_COMMENT',
    comment:data.commentBody,
    postId:data.postId
  }
}

export function addComment(data) {
  return dispatch => {
    axios.post('http://redux-hello.haoduoshipin.com/comment',data)
      .then(dispatch(_addComment(data)))
  }
}
