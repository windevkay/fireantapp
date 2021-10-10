import React, { useState } from "react";
import { Platform } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider, Switch } from "react-native-paper";
import { useFonts } from "expo-font";

import { CombinedDarkTheme, CombinedDefaultTheme } from "./theme.config";

import { HomeScreen, SettingsScreen } from "./screens";

const { Navigator, Screen } = createDrawerNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lato-Light": { uri: require("./assets/fonts/Lato-Light.ttf") },
    "Lato-Thin": { uri: require("./assets/fonts/Lato-Thin.ttf") },
    "Lato-Regular": { uri: require("./assets/fonts/Lato-Regular.ttf") },
    "Lato-Bold": { uri: require("./assets/fonts/Lato-Bold.ttf") },
  });

  const [isThemeDark, setIsThemeDark] = useState(false);
  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Navigator initialRouteName="Home">
          <Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerRight: () => (
                <Switch
                  value={isThemeDark}
                  onValueChange={() => setIsThemeDark(!isThemeDark)}
                  style={{ marginHorizontal: Platform.OS === "web" ? 15 : 5 }}
                />
              ),
            }}
          />
          <Screen name="Settings" component={SettingsScreen} />
        </Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
