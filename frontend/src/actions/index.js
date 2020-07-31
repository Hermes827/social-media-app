// const COMPUTERACTS = 'COMPUTER_ACTS'
// const PLAYERACTS = 'PLAYER_ACTS'
// const SCOREPOINT = 'SCORE_POINT'
const LOADUSER = "LOAD_USER"
export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export function loadUser(){
  return { type: LOADUSER }
}
//
// export function playerActs(e){
//   return { type: PLAYERACTS, payload: e }
// }
//
// export function scorePoint(arg, arg1){
//   return { type: SCOREPOINT, payload: arg, payload1: arg1 }
// }

// export const addTodo = ({ title, userId }) => {
//   return dispatch => {
//     dispatch(addTodoStarted());
//
//     axios
//       .post(`https://jsonplaceholder.typicode.com/todos`, {
//         title,
//         userId,
//         completed: false
//       })
//       .then(res => {
//         dispatch(addTodoSuccess(res.data));
//       })
//       .catch(err => {
//         dispatch(addTodoFailure(err.message));
//       });
//   };
// };
