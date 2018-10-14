import React from 'react'
import moment from 'moment'

const Ledger = props => {
  return (
    <div className="ledger">
      <h2>Welcome, {props.username}!</h2>
      <h5>Account Number: {props.accountNumber}</h5>
      <h2>Current Balance: ${props.currentBalance}</h2>
      <div>
        {buildTransactionHistory(props.transactionHistory)}
      </div>
    </div>
  )
}

export default Ledger

const buildTransactionHistory = transactions => {
  let history =  transactions.reverse().map((transaction, index) => {
    return (
      <div key={index} className="transaction-item">
        <div className="transaction-item__child">{moment(transaction.transactionDate).format('YYYY-MM-DD')}</div>
        <div className="transaction-item__child">{transaction.transactionType}</div>
        <div className="transaction-item__child">${transaction.transactionAmount}</div>
        <div className="transaction-item__child">${transaction.balance}</div>
      </div>
    )
  })
  let header = (
    <div key="header" className="transaction-item transaction-header">
      <div className="transaction-item__child">Date</div>
      <div className="transaction-item__child">Transaction Type</div>
      <div className="transaction-item__child">Transaction Ammount</div>
      <div className="transaction-item__child">Account Balance</div>
    </div>
  )
  history.unshift(header)
  return history
}