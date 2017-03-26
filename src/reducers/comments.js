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

export default commentReducer;
