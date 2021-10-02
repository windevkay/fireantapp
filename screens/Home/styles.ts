import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  ctaButton: {
    position: "absolute",
    top: Platform.OS === "web" ? 160 : 180,
    alignSelf: "center",
    width: "80%",
    height: 40,
    borderRadius: 40,
    //shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  ctaText: {
    fontFamily: "Lato-Bold",
    color: "black",
  },
});
