/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import BottomTabNavigator from "./src/navigation/BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@/utils/theme";

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <BottomTabNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
