import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Footer = () => {
  return (
    <View style={styles.container}>
        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" }} style={{ width: 30, height: 30 }} />
        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" }} style={{ width: 30, height: 30 }} />
        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" }} style={{ width: 30, height: 30 }} />
        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" }} style={{ width: 30, height: 30 }} />
        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" }} style={{ width: 30, height: 30 }} />
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    }
})