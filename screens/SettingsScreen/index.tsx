import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const SettingsScreen = () => {
  return (
    <View style={styles.Home}>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Home: {
    flex: 1,
  },
});
