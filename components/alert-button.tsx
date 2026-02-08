// Reusable button component that triggers a simple alert
// Used to demonstrate basic user interaction

import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

// Stateless functional component for displaying an alert button

const AlertButton = () => {
  return (
    <Button title="Alert Button" onPress={() => alert("Alert Button Pressed")}// Displays alert when button is pressed 
      />
  )
}

export default AlertButton

// Styles can be added here if button customization is needed later

const styles = StyleSheet.create({})
