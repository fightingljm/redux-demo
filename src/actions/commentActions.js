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

function transData(array) {
  let post1Com = array.filter(value => value.postId != '2').map(item => {
    return item.commentBody;
  })
  let post2Com = array.filter(value => value.postId != '1').map(item => {
    return item.commentBody;
  });
  return {
    1:post1Com,
    2:post2Com
  }
}

export function fetchComments() {
  return dispatch => {
    axios.get('http://redux-hello.haoduoshipin.com/comments')
      // .then(res => console.log(res))
      .then(res => {
        // dispatch({type:'LOAD_COMMENTS',comments:res.data.comments})
        console.log('fetchComments',transData(res.data.comments))
        dispatch({type:'LOAD_COMMENTS',comments:transData(res.data.comments)})
      })
  }
}
