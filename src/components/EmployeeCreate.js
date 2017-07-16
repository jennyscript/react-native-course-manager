import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Picker, Text } from 'react-native'

import { Button, Card, CardSection, Input } from '../components/common'
import { employeeUpdate } from '../actions'

class EmployeeCreate extends Component {
  render() {
    const { name, phone, shift } = this.props
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
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.shiftLabel}>
            Shift
          </Text>
          <Picker
            selectedValue={shift}
            onValueChange={val => this.props.employeeUpdate('shift', val)}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  shiftLabel: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate)
