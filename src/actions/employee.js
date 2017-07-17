import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

import {
  EMPLOYEE_CREATED,
  EMPLOYEE_UPDATED
} from './types'

export const employeeUpdate = (prop, value) => ({
  type: EMPLOYEE_UPDATED,
  payload: { prop, value }
})

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth()
  return dispatch =>
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        Actions.employeeList({ type: 'reset' })
        dispatch({ type: EMPLOYEE_CREATED })
      })
}
