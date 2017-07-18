import React, { Component } from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'

import { employeesFetch } from '../actions'
import EmployeeListItem from './EmployeeListItem'

class EmployeeList extends Component {
  constructor(props) {
    super(props)
    this.createDatasource = this.createDatasource.bind(this)
  }
  componentWillMount() {
    this.props.employeesFetch()
    this.createDatasource(this.props.employees)
  }
  componentWillReceiveProps(nextProps) {
    this.createDatasource(nextProps.employees)
  }
  createDatasource(employees) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(employees)
  }
  render() {
    console.log(this.props.employees)
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={employee => <EmployeeListItem employee={employee} />}
      />
    )
  }
}

const mapStateToProps = state => ({
  employees: Object.entries(state.employees).map(([uid, val]) => ({ ...val, uid }))
})

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)
