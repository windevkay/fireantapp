import React from "react";
import { View, Image } from "react-native";
import { useTheme } from "react-native-paper";

import { ProfileBadge } from "../profileBadge";
import { styles } from "./styles";

export const Banner = () => {
  const { colors } = useTheme();
  return (
    <View
      style={{ ...styles.bannerContainer, backgroundColor: colors.primary }}
    >
      <View style={styles.topSection}>
        <Image
          source={require("../../../../assets/images/fireantlogo.png")}
          style={styles.appLogo}
        />
        <ProfileBadge />
      </View>
      <Image
        source={require("../../../../assets/images/mariobg.png")}
        style={styles.lowerSection}
      />
    </View>
  );
};
