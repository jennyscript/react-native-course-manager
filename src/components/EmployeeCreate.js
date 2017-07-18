import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Card, CardSection } from '../components/common'
import EmployeeForm from './EmployeeForm'
import { employeeCreate } from '../actions'

class EmployeeCreate extends Component {
  constructor(props) {
    super(props)
    this.onSave = this.onSave.bind(this)
  }
  onSave() {
    const { name, phone, shift } = this.props
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onSave}>
            Create
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

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate)
