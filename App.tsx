import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";

import {
  CombinedDarkTheme,
  CombinedDefaultTheme,
  AppColors,
} from "./theme.config";
import { appFonts } from "./fonts.config";
import { Routes } from "./routes";

import { HomeScreen, SettingsScreen } from "./screens";
import { AppLogo, ModeToggle } from "./components";

const { Navigator, Screen } = createDrawerNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({ ...appFonts });

  const [isThemeDark, setIsThemeDark] = useState(false);
  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Navigator
          initialRouteName={Routes.HOME}
          screenOptions={{
            headerTintColor: AppColors.primary,
          }}
        >
          <Screen
            name={Routes.HOME}
            component={HomeScreen}
            options={{
              headerRight: () => (
                <ModeToggle
                  isThemeDark={isThemeDark}
                  setIsThemeDark={setIsThemeDark}
                />
              ),
              headerTitle: () => <AppLogo />,
            }}
          />
          <Screen name={Routes.SETTINGS} component={SettingsScreen} />
        </Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
