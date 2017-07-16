import {
  EMPLOYEE_UPDATED
} from '../actions/types'

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATED:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state
  }
}
