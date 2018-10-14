import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import './App.css';

import LedgerContainer from './js/components/LedgerContainer'
import rootReducer from './js/reducers/index'
let store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
)
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Worlds Greatest Bank Ledger</h1>
        </header>
        <Provider store={store}>
          <LedgerContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
