//Initial state will define our data model
const initialState = {
  username: '',
  transactionHistory: [],
  currentBalance: 0,
  accountId: undefined
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TRANSACTION_SUCCESSFUL':
    case 'ACCOUNT_DETAILS_RECEIVED':
      state = Object.assign({}, state, action.payload)
      break
  }
  return state
}

export default userReducer