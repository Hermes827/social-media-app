import { GET_DATA } from '../actions/index.js';
import { GET_UPDATES } from '../actions/index.js';
import { GET_COMMENTS } from '../actions/index.js';

const initialState = {
  currentUser: {},
  updates: [],
  comments: []
}

export function reducer(state = initialState, action) {
  // console.log('reducer', state, action);
  switch(action.type){

  case GET_DATA:
    return Object.assign({}, state, {
      currentUser: action.payload.arg
    });

  case GET_UPDATES:
    return Object.assign({}, state, {
      updates: action.payload.arg
    });

  case GET_COMMENTS:
    return Object.assign({}, state, {
      comments: action.payload.arg
    });

    default:
      return state
  }
}
