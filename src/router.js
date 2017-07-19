import React from 'react'
import { Actions, Router, Scene } from 'react-native-router-flux'

import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'
import EmployeeList from './components/EmployeeList'
import LoginForm from './components/LoginForm'

const RouterComponent = () =>
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="auth">
      <Scene key="login" component={LoginForm} title="Please Login" />
    </Scene>
    <Scene key="main">
      <Scene
        key="employeeList"
        component={EmployeeList}
        title="Employees"
        rightTitle="Add"
        onRight={() => Actions.employeeCreate()}
      />
      <Scene
        key="employeeCreate"
        component={EmployeeCreate}
        title="Employee Create"
      />
      <Scene
        key="employeeEdit"
        component={EmployeeEdit}
        title="Edit Employee"
      />
    </Scene>
  </Router>

export default RouterComponent
