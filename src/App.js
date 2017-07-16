import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'

import firebaseConfig from '../firebase-config'
import reducers from './reducers'

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig)
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Text>Manager</Text>
        </View>
      </Provider>
    )
  }
}
