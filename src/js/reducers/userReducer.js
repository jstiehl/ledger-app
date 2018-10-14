//Initial state will define our data model
const initialState = {
  username: '',
  accessToken: '',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
    case 'CHECK_LOGGED_IN':
      state = Object.assign({}, state, action.payload)
      break
    case 'REMOVE_USER':
    case 'LOGIN_FAILED':
      state = initialState
      break
  }
  return state
}

export default userReducer