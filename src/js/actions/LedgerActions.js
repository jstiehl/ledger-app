import request from 'superagent'

const LedgerActions = {
  postTransaction: (accountId, transactionType, transactionAmount) => {
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
      return request.post('http://localhost:5000/v1/accounts/' + accountId)
        .set(headers)
        .send({ transactionType, transactionAmount })
        .end((err, res) => {
          if (err) {
            console.log(err)
            //this is where we would handle errors
            return
          }
          return dispatch(LedgerActions.receiveAccount(res.body))
        })
    }
  },

  receiveAccount(account) {
    return {
      type: 'ACCOUNT_DETAILS_RECEIVED',
      payload: account,
    }
  },
}
export default LedgerActions