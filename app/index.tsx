// Group profile screen layout inspired by Instagram-style UI
// Icons pulled from https://uxwing.com/ & https://www.flaticon.com/.
// We do not own any of the icons

import Footer from "@/components/footer";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AlertButton from "../components/alert-button";
import Header from "../components/header";

// Mock image data used to stimulate a post grid

const GRID_DATA = [
  { id: "1", uri: "https://picsum.photos/400/400?1" },
  { id: "2", uri: "https://picsum.photos/400/400?2" },
  { id: "3", uri: "https://picsum.photos/400/400?3" },
  { id: "4", uri: "https://picsum.photos/400/400?4" },
  { id: "5", uri: "https://picsum.photos/400/400?5" },
  { id: "6", uri: "https://picsum.photos/400/400?6" },
  { id: "7", uri: "https://picsum.photos/400/400?7" },
  { id: "8", uri: "https://picsum.photos/400/400?8" },
  { id: "9", uri: "https://picsum.photos/400/400?9" },
];

// Main group profile screen combining header, profile info, post grid, and footer

export default function Index() {
  return (
    <SafeAreaProvider>
      {/* Safe area handling for notches UI */}
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          {/* HEADER (teammate) */}
          <Header />

          <View style={styles.content}>
            {/* Profile row */}
            <View style={styles.profileRow}>
              {/* Group avatar with outer ring and inner initials */}
              <View style={styles.avatarOuter}>
                <View style={styles.avatarInner}>
                  <Text style={styles.avatarText}>OO{"\n"}TD</Text>
                </View>
              </View>
              {/* Group Statistics: posts, members, and admins */}
              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>53</Text>
                  <Text style={styles.statLabel}>Posts</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>12</Text>
                  <Text style={styles.statLabel}>Members</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>1</Text>
                  <Text style={styles.statLabel}>Admins</Text>
                </View>
              </View>
            </View>

            {/* Bio */}
            <Text style={styles.groupName}>OOTD Everyday</Text>
            <Text style={styles.bioLine}>Fit check! 👕</Text>
            <Text style={styles.bioLine}>You know we’ll hype you up.</Text>

            {/* Member status button (dropdown functionality to be added) */}
            <View style={styles.memberBtn}>
              <Text style={styles.memberText}>Member</Text>
              <Text style={styles.memberArrow}>⌄</Text>
            </View>

            {/* Posts grid  rendered using FlatList for performance*/}
            <FlatList
              data={GRID_DATA}
              keyExtractor={(item) => item.id}
              numColumns={3}
              renderItem={({ item }) => (
                <Image source={{ uri: item.uri }} style={styles.gridImage} />
              )}
              columnWrapperStyle={styles.gridRow}
              contentContainerStyle={styles.gridContainer}
              showsVerticalScrollIndicator={false}
            />
          </View>

          {/* Fixed bottom section containing alert button and footer navigation */}
          <View style={styles.bottomArea}>
            <View style={styles.alertWrapper}>
              <AlertButton />
            </View>
            <Footer />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
// Styles for group profile screen layout and UI elements
const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingTop: 10,
    flex: 1,
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  avatarOuter: {
    width: 82,
    height: 82,
    borderRadius: 41,
    borderWidth: 3,
    borderColor: "#e1306c",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  avatarInner: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#2f80ed",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "white",
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 16,
  },

  statsRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  statItem: {
    alignItems: "center",
  },

  statNumber: {
    fontSize: 16,
    fontWeight: "800",
  },

  statLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },

  groupName: {
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 4,
  },

  bioLine: {
    fontSize: 12,
    marginBottom: 2,
  },

  memberBtn: {
    marginTop: 10,
    marginBottom: 12,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 8,
    width: "100%",
  },

  memberText: {
    fontWeight: "700",
    marginRight: 8,
  },

  memberArrow: {
    fontSize: 14,
  },

  gridContainer: {
    paddingBottom: 140,
  },

  gridRow: {
    justifyContent: "space-between",
    marginBottom: 3,
  },

  gridImage: {
    width: "33%",
    aspectRatio: 1,
    borderRadius: 6,
  },

  bottomArea: {
    justifyContent: "flex-end",
  },

  alertWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    width: 150,
  },
});
