import React, { Component } from 'react'

class Transactions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transactionType: "deposit",
      transactionAmount: 0
    }
  }

  render() {
    return (
      <div>
          <h2>Make A Transaction</h2>
          <div className="transaction-form">
            <div className="transaction-form__item">
              <p>Please enter amount for your {this.state.transactionType}</p>
            </div>
            <div className="transaction-form__item">
              <span>$</span><input onChange={this._updateInput.bind(this, "transactionAmount")} value={this.state.transactionAmount} placeholder="e.g 500"/>
              <button onClick={this.handleTransaction.bind(this)} disabled={this._checkDisabled()}>Submit</button>
            </div>
            <div className="transaction-form__item">
              <input type="checkBox" onChange={this._toggleTransactionType.bind(this)} checked={this.state.transactionType === 'withdrawal'}/>Withdrawal
              <span className="instructions">Check box if your transaction is a withdrawal</span>
            </div>
          </div>
      </div>
    )
  }

  handleTransaction(e) {
    e.preventDefault()
    this.props.transactionHandler(this.state.transactionType, this.state.transactionAmount)
    //reset to initial state
    this.setState({
      transactionType: "deposit",
      transactionAmount: 0
    })
  }

  //check to make sure only numbers entered for transaction amount and disable submit button if not
  _checkDisabled() {
    let amount = this.state.transactionAmount
    let regex = /^\d+$/
    let allNumbers = regex.test(amount)
    if(allNumbers && amount !== 0){
      return false
    }

    return true
  }

  //updates input state
  _updateInput(name, e) {
    e.preventDefault()
    let newState ={}
    let value = e.target.value
    newState[name] = value
    this.setState(newState)
  }

  //toggle between deposit and withdrawal type depending on checkbox state
  _toggleTransactionType(e) {
    let checked = e.target.checked
    let type = checked ? "withdrawal" : "deposit"
    this.setState({
      transactionType: type
    })
  }
}

export default Transactions