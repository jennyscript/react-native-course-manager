import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

import { Button, Card, CardSection, Input, Spinner } from './common'
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
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    }
    return <Button onPress={this.onLoginUser}>Login</Button>
  }
  render() {
    const { email, error, password } = this.props
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
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#f00'
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, error, loading, password } = auth
  return { email, error, loading, password }
}

export default connect(mapStateToProps, {
  emailChanged,
  loginUser,
  passwordChanged
})(LoginForm)
