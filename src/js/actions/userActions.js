import request from 'superagent'

const userActions = {
  login: (username, password) => {
   //redux-thunk middleware takes care of passing the dispatch arg
    return dispatch => {
      return request.post('http://localhost:5000/v1/users/login')
        .send({ username, password })
        .end((err, res) => {
          if (err) {
            return dispatch(userActions.tokenValidationFailed())
          }
          let accessToken = res.body.accessToken
          window.localStorage.setItem(
            'token',
            JSON.stringify({ access_token: accessToken }),
          )
          window.localStorage.setItem(
            'user',
            JSON.stringify({ username: username }),
          )
          return dispatch(userActions.receiveUser({ username, accessToken }))
        })
    }
  },

  createNewAccount: (username, password) => {
    //redux-thunk middleware takes care of passing the dispatch arg
    return dispatch => {
      return request.post('http://localhost:5000/v1/users')
        .send({ username, password })
        .end((err, res) => {
          if (err) {
            return dispatch(userActions.tokenValidationFailed())
          }
          let accessToken = res.body.accessToken
          window.localStorage.setItem(
            'token',
            JSON.stringify({ access_token: accessToken }),
          )
          window.localStorage.setItem(
            'user',
            JSON.stringify({ username: username }),
          )
          return dispatch(userActions.receiveUser({ username, accessToken }))
        })
    }
  },

  getUser: username => {
    let token
    try {
      token = JSON.parse(window.localStorage.getItem('token')).access_token
    } catch (e) {
      //add an action for handling error
      console.log("No access token")
    }
    let headers = {}
    headers['Authorization-Ledger'] = token
    //redux-thunk middleware takes care of passing the dispatch arg
    return dispatch => {
      return request.get('http://localhost:5000/v1/users/' + username)
        .set(headers)
        .end((err, res) => {
          if (err) {
            console.log(err)
            //this is where we would handle errors
            return
          }
          return dispatch(userActions.receiveAccount(res.body))
        })
    }
  },

  receiveUser(user) {
    return {
      type: 'RECEIVE_USER',
      payload: user,
    }
  },

  receiveAccount(account) {
    return {
      type: 'ACCOUNT_DETAILS_RECEIVED',
      payload: account,
    }
  },

  logoutUser() {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
    return {
      type: 'REMOVE_USER',
    }
  },

  checkLoggedInUser() {
    let token
    let user = {}

    try {
      user = JSON.parse(window.localStorage.getItem('user')).username
      token = JSON.parse(window.localStorage.getItem('token')).access_token
    } catch (e) {
      console.log('No user found in local storage')
    }
    if (user && token) {
      user = {
        username: user,
        accessToken: token
      }  
    }

    return {
      type: 'CHECK_LOGGED_IN',
      payload: user,
    }
  },
}
export default userActions