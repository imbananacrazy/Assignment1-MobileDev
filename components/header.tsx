// Header component for a group profile screen
// Displays title, username,, and action icons
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
// Stateless header component
// Action icons are visual placeholders for future functionality
const Header = () => {
  return (
    {/* Header container with left action, centered titles, and right action */}
    <View style={styles.container}>
    {/* Action icons wrapped in Pressable for future navigation or actions */}
        <Pressable><Image style={styles.pressable} source={require("../assets/images/instagram/new-post-icon.webp")}/></Pressable>
    {/* Group name and username displayed in the center */}
      <View style={styles.titles}>
        <Text style={styles.title}>Group Profile</Text>
        <Text style={styles.subtitle}>ootd_everyday</Text>
      </View>
      <Pressable><Image style={styles.pressable} source={require("../assets/images/instagram/new-post-icon.webp")}/></Pressable>
    </View>
  );
};

export default Header;
// Styles for header layoutm typography, and icons
const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
  },
  titles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
  },
  pressable: {
    width: 25,
    height: 25,
    marginLeft: 15,
    marginRight: 15,
},
});
