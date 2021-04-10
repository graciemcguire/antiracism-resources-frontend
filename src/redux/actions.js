// constant API URLS

const BASE_URL = 'http://localhost:3000'
const USERS_URL = BASE_URL + '/users'
const PERSIST_URL = BASE_URL + '/persist'
const LOGIN_URL = BASE_URL + '/login'
const SPECIFIC_USER_URL = id => USERS_URL + '/' + id


//redux actions

const setUserAction = userObj => ({
  type: 'SET_USER',
  payload: userObj
})

const clearUserAction = () => ({
  type: 'CLEAR_USER'
})


//fetchies

const newUserToDB = userObj => dispatch => {
  // debugger
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  };

  fetch(USERS_URL, config)
  .then(r => r.json())
  .then(data => {
    dispatch(setUserAction(data.user))
    localStorage.setItem('token', data.token)
    console.log(data)
  })
}

const deleteUserFromDB = userId => dispatch => {

  const config = {
    method: 'DELETE'
  };

  fetch(SPECIFIC_USER_URL(userId), config)
  .then(r => {
    dispatch(clearUserAction())
    localStorage.clear()
  })
}

const loginUserToDB = userCredentials => dispatch => {
  // debugger
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userCredentials)
  };

  fetch(LOGIN_URL, config)
  .then(r => r.json())
  .then(data => {
    dispatch(setUserAction(data.user))
    localStorage.setItem('token', data.token)
    localStorage.setItem('id', data.user.id);
  });

}

const persistUser = () => dispatch => {

  const config = {
    method: 'GET',
    headers: {
      'Authorization': `bearer ` + localStorage.token
    }
  }

  fetch(PERSIST_URL, config)
  .then(r => r.json())
  .then(userInstance => {
    dispatch(setUserAction(userInstance))
  })

}

const logoutUser = () => dispatch => {
  dispatch(clearUserAction())
  localStorage.clear()
}

export default {
  newUserToDB,
  deleteUserFromDB,
  loginUserToDB,
  persistUser,
  logoutUser
}
