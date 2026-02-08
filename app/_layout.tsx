// Root layout for the app navigation
// Uses Expo Router Stack with headers disabled globally

import { Stack } from "expo-router";

// Defines the main navigation stack for the application

export default function RootLayout() {
  return ( <Stack screenOptions={{ headerShown: false }} /> // Hide default headers to use custom headers 
);
}
