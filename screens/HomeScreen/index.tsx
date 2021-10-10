import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.Home}>
      <Text>HOME</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Home: {
    flex: 1,
  },
});
