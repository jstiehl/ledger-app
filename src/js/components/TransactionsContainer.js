import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LedgerActions from '../actions/LedgerActions'
import Transactions from './Transactions'

class TransactionsContainer extends Component {
  render() {
    return (
      <div className="transactions-container">
          <Transactions 
            transactionHandler={this.props.postTransaction.bind(null, this.props.accountId)}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps = {}) => {
  return {
    accountId: state.accountReducer.accountId
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(LedgerActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer)