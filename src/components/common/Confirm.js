import React from 'react'
import { Modal, Text, View } from 'react-native'

import { Button } from './Button'
import { CardSection } from './CardSection'

export const Confirm = ({ children, onAccept, onDecline, visible }) =>
  <Modal
    animationType="slide"
    onRequestClose={() => {}}
    transparent
    visible={visible}
  >
    <View style={styles.container}>
      <CardSection style={styles.cardSection}>
        <Text style={styles.text}>{children}</Text>
      </CardSection>
      <CardSection>
        <Button onPress={onAccept}>Yes</Button>
        <Button onPress={onDecline}>No</Button>
      </CardSection>
    </View>
  </Modal>

const styles = {
  cardSection: {
    justifyContent: 'center'
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  }
}
