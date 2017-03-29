import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'

const comments = {
  1:["hello1","hello2"],
  2:["hello1111","hello2222"]
}

const posts = [
  {
    id: 1,
    title: 'redux-hello',
    likes: 3
  },
  {
    id: 2,
    title: 'redux-baby',
    likes: 6
  }
]

const defaultState = {
  posts,
  comments
}

let store = createStore(rootReducer,defaultState,compose(applyMiddleware(thunk)))

export default store;
