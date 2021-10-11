import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { IconButton, Switch, useTheme } from "react-native-paper";

interface Props {
  isThemeDark: boolean;
  setIsThemeDark: (arg: boolean) => void;
}

export const ModeToggle = ({ isThemeDark, setIsThemeDark }: Props) => {
  const { colors } = useTheme();
  return (
    <View style={styles.toggle}>
      <IconButton icon="lightbulb-on-outline" size={20} />
      <Switch
        value={isThemeDark}
        onValueChange={() => setIsThemeDark(!isThemeDark)}
        style={{ marginHorizontal: Platform.OS === "web" ? 15 : 5 }}
        color={colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  toggle: {
    flexDirection: "row",
    alignItems: "center",
  },
});
