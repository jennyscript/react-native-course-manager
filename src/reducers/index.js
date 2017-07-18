import { combineReducers } from 'redux'

import auth from './auth'
import employees from './employees'
import employeeForm from './employeeForm'

export default combineReducers({
  auth,
  employees,
  employeeForm
})
