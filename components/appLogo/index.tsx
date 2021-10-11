import React from "react";
import { StyleSheet, Image } from "react-native";

export const AppLogo = () => {
  return (
    <Image
      source={require("../../assets/images/fireant.png")}
      style={styles.logo}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
});
