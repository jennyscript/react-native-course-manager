import {
  EMPLOYEE_UPDATED
} from './types'

export const employeeUpdate = (prop, value) => ({
  type: EMPLOYEE_UPDATED,
  payload: { prop, value }
})
