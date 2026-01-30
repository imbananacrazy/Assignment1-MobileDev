import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

const AlertButton = () => {
  return (
    <Button title="Alert Button" onPress={() => alert("Alert Button Pressed")} />
  )
}

export default AlertButton

const styles = StyleSheet.create({})