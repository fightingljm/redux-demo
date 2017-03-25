import {createStore} from 'redux';

let comments = [
  "hello1",
  "hello2"
]

function commentReducer(state=[],action) {
  return state;
}

let store = createStore(commentReducer,comments)

export default store;
