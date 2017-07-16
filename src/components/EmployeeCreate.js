import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Card, CardSection, Input } from '../components/common'
import { employeeUpdate } from '../actions'

class EmployeeCreate extends Component {
  render() {
    const { name, phone } = this.props
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={name}
            onChangeText={val => this.props.employeeUpdate('name', val)}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={phone}
            onChangeText={val => this.props.employeeUpdate('phone', val)}
          />
        </CardSection>
        <CardSection />
        <CardSection>
          <Button>
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate)
