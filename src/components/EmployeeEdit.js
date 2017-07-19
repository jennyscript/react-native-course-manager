import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Card, CardSection } from '../components/common'
import EmployeeForm from './EmployeeForm'
import { employeeSave, employeeUpdate } from '../actions'

class EmployeeEdit extends Component {
  constructor(props) {
    super(props)
    this.onSave = this.onSave.bind(this)
  }
  componentWillMount() {
    Object.entries(this.props.employee).forEach(([prop, val]) =>
      this.props.employeeUpdate(prop, val))
  }
  onSave() {
    const { name, phone, shift } = this.props
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onSave}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeSave, employeeUpdate })(EmployeeEdit)
