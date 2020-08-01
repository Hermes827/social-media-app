export const GET_DATA = 'GET_DATA';
export const getData = (arg) => ({
  type: GET_DATA,
  payload: { arg }
});

export function fetchUserData(arg) {
  return function(dispatch, getState) {
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", arg);
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch("http://localhost:4000/api/auth/me", requestOptions)
      .then(response => response.json())
      .then(json => {
        dispatch(getData(json))
      })
  };
}

















// export function scorePoint(arg, arg1){
//   return { type: SCOREPOINT, payload: arg, payload1: arg1 }
// }
