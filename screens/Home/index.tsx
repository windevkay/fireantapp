import React from "react";
import { View, Text } from "react-native";
import { Button, useTheme } from "react-native-paper";

import { Banner } from "./components";
import { styles } from "./styles";
import { messages } from "./constants";

export const HomeScreen = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.homeContainer}>
      <Banner />
      <Button
        mode="contained"
        onPress={() => {}}
        style={{ ...styles.ctaButton, backgroundColor: colors.accent }}
      >
        <Text style={styles.ctaText}>{messages.CTA_TEXT}</Text>
      </Button>
    </View>
  );
};
