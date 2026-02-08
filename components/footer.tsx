// Footer Component that renders a static Instagram-style bottom navigation bar
// Icons are wrapped in Pressable for future navigation support
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

// Stateless footer navigation bar
// Currently visual-only: navigation handlers can be added later
const Footer = () => { 
  {/*Footer Container golding navigation icons*/}
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
// Styles for footer layout and icon sizing
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
