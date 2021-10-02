import React from "react";
import { View } from "react-native";
import { Avatar, IconButton } from "react-native-paper";

import { styles } from "./styles";

export const ProfileBadge = () => {
  return (
    <View style={styles.profileBadgeContainer}>
      <IconButton icon="cloud-search" color="white" size={25} />
      <Avatar.Text size={40} label="XD" />
    </View>
  );
};
