export function _addComment(data) {
  return {
    type:'ADD_COMMENT',
    comment:data.comment,
    postId:data.postId
  }
}

export function addComment(data) {
  return dispatch => {
    dispatch(_addComment(data));
  }
}
