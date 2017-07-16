import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Card, CardSection, Input } from './common'
import { emailChanged, loginUser, passwordChanged } from '../actions'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onLoginUser = this.onLoginUser.bind(this)
  }
  onEmailChange(text) {
    this.props.emailChanged(text)
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }
  onLoginUser() {
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }
  render() {
    const { email, password } = this.props
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secure
            onChangeText={this.onPasswordChange}
            value={password}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onLoginUser}>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password
})

export default connect(mapStateToProps, {
  emailChanged,
  loginUser,
  passwordChanged
})(LoginForm)
