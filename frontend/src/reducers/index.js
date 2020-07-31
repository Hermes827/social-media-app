import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from './productActions';

const initialState = {
  currentUser: {},
  loading: false,
  error: null
  // playerTurn: false,
  // computerTurn: true,
  // computerPicks: [],
  // score: 0,
  // computerTurnNow: false
}

export function reducer(state = initialState, action) {
  console.log('reducer', state, action);
  switch(action.type){

     case 'LOAD_USER':
     var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

case FETCH_PRODUCTS_BEGIN:
    // Mark the state as "loading" so we can show a spinner or something
    // Also, reset any errors. We're starting fresh.
    return {
      ...state,
      loading: true,
      error: null
    };

  case FETCH_PRODUCTS_SUCCESS:
    // All done: set loading "false".
    // Also, replace the items with the ones from the server
    return {
      ...state,
      loading: false,
      // items: action.payload.products
    };

  case FETCH_PRODUCTS_FAILURE:
    // The request failed. It's done. So set loading to "false".
    // Save the error, so we can display it somewhere.
    // Since it failed, we don't have items to display anymore, so set `items` empty.
    //
    // This is all up to you and your app though:
    // maybe you want to keep the items around!
    // Do whatever seems right for your use case.
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      // items: []
    };

// fetch("http://localhost:4000/users/5f22b19a5514a15165362a9b", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
//      console.log("hello")
//      break
    //  return Object.assign({}, state, {
    //   computerPicks: [...state.computerPicks, randomDiv.slice(4,5)],
    //   playerTurn: state.playerTurn = true,
    //   computerTurn: state.computerTurn = false
    // });

   //  case 'COMPUTER_ACTS':
   //  let randomDiv = `.div${(Math.floor(Math.random()*4) + 1)}`
   //  if(state.computerPicks.length === 0){
   //    combinedFunction(randomDiv)
   //  } else if(state.computerPicks.length !== 0){
   //    computerTurn(state, randomDiv)
   //  }
   //  return Object.assign({}, state, {
   //   computerPicks: [...state.computerPicks, randomDiv.slice(4,5)],
   //   playerTurn: state.playerTurn = true,
   //   computerTurn: state.computerTurn = false
   // });
   //
   // case 'PLAYER_ACTS':
   //  const divClassName = "." + action.payload.target.classList[0]
   //  combinedFunction(divClassName)
   //  return Object.assign({}, state, {
   //   computerTurn: state.computerTurn = true
   //  })
   //
   // case 'SCORE_POINT':
   // if(action.payload === action.payload1){
   //   return Object.assign({}, state, {
   //    score: state.score + 100,
   //    computerTurnNow: state.computerTurnNow = true,
   //    playerTurn: state.playerTurn = false,
   //    computerTurn: state.computerTurn = true
   //   })
   // } else {
   //   alert("wrong, please play again")
   //   return Object.assign({}, state, {
   //    score: state.score = 0,
   //    computerPicks: [],
   //    computerTurnNow: state.computerTurnNow = false,
   //    computerTurn: state.computerTurn = true,
   //    playerTurn: state.playerTurn = false
   //   })
   // }

    default:
      return state
  }
}
