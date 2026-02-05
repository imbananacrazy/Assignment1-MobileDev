import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Pressable><Image style={styles.icon} source={require("../assets/images/instagram/home-icon.webp")}/></Pressable>
      <Pressable><Image style={styles.icon} source={require("../assets/images/instagram/search-icon.webp")}/></Pressable>
      <Pressable><Image style={styles.icon} source={require("../assets/images/instagram/reels-icon.webp")}/></Pressable>
      <Pressable><Image style={styles.icon} source={require("../assets/images/instagram/shop-icon.webp")}/></Pressable>
      <Pressable><Image style={styles.icon} source={require("../assets/images/instagram/profile-icon.png")}/></Pressable>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  icon: {
    width: 25,
    height: 25,
  },
});