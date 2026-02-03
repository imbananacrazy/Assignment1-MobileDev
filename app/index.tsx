import Footer from "@/components/footer";
import React from "react";
import { View } from "react-native";
import AlertButton from "../components/alert-button";

export default function Index() {
  return (
    <View style={{flex: 1, alignItems: "center"}}>
      <View style={{flex: 1, justifyContent: 'flex-end', width: '100%'}}>
        <View style={{alignSelf: 'center', justifyContent: 'center', width: 150}}>
          <AlertButton/>
        </View>
        <Footer />
      </View>
    </View>
  );
}