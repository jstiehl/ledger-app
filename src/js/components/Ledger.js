import React from 'react'

const Ledger = props => {
  return (
    <div className="ledger">
      <h3>Welcome, {props.username}!</h3>
      <h5>Account Number: {props.accountNumber}</h5>
      <div>Current Balance: {props.currentBalance}</div>
      <div>
        {buildTransactionHistory(props.transactionHistory)}
      </div>
    </div>
  )
}

export default Ledger

const buildTransactionHistory = transactions => {
  let history =  transactions.map((transaction, index) => {
    return (
      <div key={index} className="transaction-item">
        <div className="transaction-item__child">5/16/18</div>
        <div className="transaction-item__child transaction-type">{transaction.transactionType}</div>
        <div className="transaction-item__child">{transaction.transactionAmount}</div>
        <div className="transaction-item__child">{transaction.balance || 200}</div>
      </div>
    )
  })
  let header = (
    <div key="header" className="transaction-item">
      <div className="transaction-item__child">Date</div>
      <div className="transaction-item__child transaction-type">Transaction Type</div>
      <div className="transaction-item__child">Transaction Ammount</div>
      <div className="transaction-item__child">Account Balance</div>
    </div>
  )
  history.unshift(header)
  return history
}