import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import EmployeeList from './components/EmployeeList'
import LoginForm from './components/LoginForm'

const RouterComponent = () =>
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="auth">
      <Scene key="login" component={LoginForm} title="Please Login" initial />
    </Scene>
    <Scene key="main">
      <Scene key="employeeList" component={EmployeeList} title="Employees" />
    </Scene>
  </Router>

export default RouterComponent
