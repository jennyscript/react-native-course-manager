import React from 'react'
import { View } from 'react-native'

export const CardSection = ({ children, style }) =>
  <View style={[styles.containerStyle, style]}>
    {children}
  </View>

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
}
