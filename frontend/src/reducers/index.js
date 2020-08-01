import { GET_DATA } from '../actions/index.js';

const initialState = {
  currentUser: {}
}

export function reducer(state = initialState, action) {
  // console.log('reducer', state, action);
  switch(action.type){

  case GET_DATA:
    return Object.assign({}, state, {
      currentUser: action.payload.arg
    });

    default:
      return state
  }
}
