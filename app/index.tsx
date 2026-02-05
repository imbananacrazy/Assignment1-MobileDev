//Icons pulled from https://uxwing.com/?s=instagram & https://www.flaticon.com/free-icons/instagram. We do not own any of the icons

import Footer from "@/components/footer";
import React from "react";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AlertButton from "../components/alert-button";
import Header from "../components/header";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white"}}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View
            style={{ flex: 1, justifyContent: "flex-start", width: "100%" }}
          >
            <Header />
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end", width: "100%" }}>
            <View
              style={{
                alignSelf: "center",
                justifyContent: "center",
                width: 150,
              }}
            >
              <AlertButton />
            </View>
            <Footer />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}