import React, { Component } from 'react'
import { TouchableWithoutFeedback, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { CardSection } from './common'

class EmployeeListItem extends Component {
  constructor(props) {
    super(props)
    this.onRowPress = this.onRowPress.bind(this)
  }
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee })
  }
  render() {
    const { name } = this.props.employee
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.title}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default EmployeeListItem
