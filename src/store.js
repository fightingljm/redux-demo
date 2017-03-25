import {createStore} from 'redux';

let comments = [
  "hello1",
  "hello2"
]

function commentReducer(state=[],action) {
  console.log(state,action);
  switch (action.type) {
    case 'ADD_COMMENT':
      console.log([...state,action.comment]);
      return [...state,action.comment]
    default:
      return state;
  }
}

let store = createStore(commentReducer,comments)

export default store;
