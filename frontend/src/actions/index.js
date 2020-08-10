export const GET_DATA = 'GET_DATA';
export const getData = (arg) => ({
  type: GET_DATA,
  payload: { arg }
});

export const GET_UPDATES = 'GET_UPDATES';
export const getUpdates = (arg) => ({
  type: GET_UPDATES,
  payload: { arg }
});

export const GET_CHOSENMAIL = 'GET_CHOSENMAIL';
export const getChosenMail = (arg) => ({
  type: GET_CHOSENMAIL,
  payload: { arg }
})

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

export function getAllUpdates(arg) {
  return function(dispatch, getState) {
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };
    fetch("http://localhost:4000/updates", requestOptions)
    .then(response => response.json())
    .then(json => {
      dispatch(getUpdates(json.reverse()))
    })
  };
}
