import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import userActions from '../actions/userActions'
import Account from './Account'

import Ledger from './Ledger'
import TransactionsContainer from './TransactionsContainer'
/**
 * WeatherSummaryContainer is responsible for fetching weather data from store or initiating action to fetch data
 * data is passed to WeatherSummary component for rendering of data
 */
class LedgerContainer extends Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.accessToken && !this.props.accessToken) {
      //fetch user data
      this.getUserData(nextProps)
    }
  }

  componentDidMount() {
    this.props.checkLoggedInUser()
  }

  render() {
    if(this.props.accessToken) {
      return (
        <div>
          <div className="logout">
            <span>
              Account Summary
            </span>
            <button onClick={this.props.logoutUser}>Logout</button>
          </div>
          <div className="ledger-container">
            <div className="ledger-wrapper">
              <Ledger 
                username={this.props.username}
                accountNumber={this.props.accountId}
                currentBalance={this.props.currentBalance}
                transactionHistory={this.props.transactionHistory}/>
            </div>
            <div>
              <TransactionsContainer />
            </div>
          </div>
        </div>
      )
    } else {
      return <Account 
        loginHandler={this.props.login} 
        newAccountHandler={this.props.createNewAccount}/>
    }
  }

  getUserData(props) {
    this.props.getUser(props.username)
  }
}


const mapStateToProps = (state, ownProps = {}) => {
  return {
    username: state.userReducer.username,
    accessToken: state.userReducer.accessToken,
    transactionHistory: state.accountReducer.transactionHistory,
    currentBalance: state.accountReducer.currentBalance,
    accountId: state.accountReducer.accountId
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(userActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LedgerContainer)