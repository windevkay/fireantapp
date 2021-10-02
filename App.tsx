import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import * as Font from "expo-font";

import { theme } from "./theme.config";

import { HomeScreen } from "./screens/Home";

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      "Lato-Light": { uri: require("./assets/fonts/Lato-Light.ttf") },
      "Lato-Thin": { uri: require("./assets/fonts/Lato-Thin.ttf") },
      "Lato-Regular": { uri: require("./assets/fonts/Lato-Regular.ttf") },
      "Lato-Bold": { uri: require("./assets/fonts/Lato-Bold.ttf") },
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }
  render() {
    if (this.state.fontsLoaded) {
      return (
        <PaperProvider theme={theme}>
          <SafeAreaView style={styles.unsafeAreaStyle} />
          <SafeAreaView style={styles.appContainer}>
            <HomeScreen />
          </SafeAreaView>
        </PaperProvider>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  unsafeAreaStyle: { flex: 0, backgroundColor: "#0073cf" },
});
