import { GET_DATA } from '../actions/index.js';
import { GET_UPDATES } from '../actions/index.js';
import { GET_CHOSENMAIL} from '../actions/index.js';

const initialState = {
  currentUser: {},
  updates: [],
  chosenMail: {}
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

  case GET_CHOSENMAIL:
    return Object.assign({}, state, {
      chosenMail: action.payload.arg
    });

    default:
      return state
  }
}
