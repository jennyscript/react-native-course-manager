import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import firebase from 'firebase'

import firebaseConfig from '../firebase-config'
import reducers from './reducers'
import Router from './router'

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig)
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(reduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
