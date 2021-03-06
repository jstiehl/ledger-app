import React, { Component } from 'react'

class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      login: true
    }
  }

  render() {
    return (
      <div className="account-wrapper">
        <h1>{this.state.login ? 'Login' : 'Create New Account'}</h1>
        <div className="account-item">
          <label>Username</label>
          <input onChange={this._updateInput.bind(this, "username")} />
        </div>
        <div className="account-item">
          <label>Password</label>
          <input onChange={this._updateInput.bind(this, "password")} />
        </div>
        <div className="account-item">
          <input type="checkBox" onChange={this._createNewAccount.bind(this)} />Create New Account
        </div>
        <div className="account-item">
          <button onClick={this.actionHandler.bind(this)}>{this.state.login ? 'Login' : 'Create New Account'}</button>
        </div>
      </div>
    )
  }

  actionHandler(e) {
    e.preventDefault()
    if(this.state.login) {
      this.props.loginHandler(this.state.username, this.state.password)
    } else {
      this.props.newAccountHandler(this.state.username, this.state.password)
    }
  }

  _createNewAccount(e) {
    this.setState({
      login: !e.target.checked
    })
  }

  _updateInput(name, e) {
    e.preventDefault()
    let newState ={}
    let value = e.target.value
    newState[name] = value
    this.setState(newState)
  }
}

export default Account