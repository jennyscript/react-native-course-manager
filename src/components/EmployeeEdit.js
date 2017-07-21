import React, { Component } from 'react'
import { connect } from 'react-redux'
import { text } from 'react-native-communications'

import { Button, Card, CardSection, Confirm } from '../components/common'
import EmployeeForm from './EmployeeForm'
import { employeeDelete, employeeSave, employeeUpdate } from '../actions'

class EmployeeEdit extends Component {
  constructor(props) {
    super(props)
    this.onFire = this.onFire.bind(this)
    this.onSave = this.onSave.bind(this)
    this.onTextPress = this.onTextPress.bind(this)
    this.onAcceptFire = this.onAcceptFire.bind(this)
    this.onDeclineFire = this.onDeclineFire.bind(this)
  }
  state = {
    fireModalVisible: false
  }
  componentWillMount() {
    Object.entries(this.props.employee).forEach(([prop, val]) =>
      this.props.employeeUpdate(prop, val))
  }
  onFire() {
    this.setState({ fireModalVisible: true })
  }
  onSave() {
    const { name, phone, shift } = this.props
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
  }
  onTextPress() {
    const { phone, shift } = this.props
    text(phone, `Your upcoming shift is on ${shift}`)
  }
  onAcceptFire() {
    this.props.employeeDelete({ uid: this.props.employee.uid })
  }
  onDeclineFire() {
    this.setState({ fireModalVisible: false })
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
        <CardSection>
          <Button onPress={this.onTextPress}>
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onFire}>
            Fire
          </Button>
        </CardSection>
        <Confirm
          onAccept={this.onAcceptFire}
          onDecline={this.onDeclineFire}
          visible={this.state.fireModalVisible}
        >
          Are you sure you want to fire {this.props.name}?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeDelete, employeeSave, employeeUpdate })(EmployeeEdit)
