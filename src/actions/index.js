import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './types'

const loginSuccess = dispatch => user => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
  Actions.main()
}

const loginFail = dispatch => dispatch({
  type: LOGIN_USER_FAIL
})

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text
})

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text
})

export const loginUser = ({ email, password }) => dispatch => {
  dispatch({ type: LOGIN_USER })
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(loginSuccess(dispatch))
    .catch(() =>
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(loginSuccess(dispatch))
        .catch(() => loginFail(dispatch))
    )
}
