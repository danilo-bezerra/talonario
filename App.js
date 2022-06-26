import "react-native-gesture-handler";
import { useState } from "react";
import Login from "./src/pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/pages/Home";
import Routes from "./src/routes";

import { UserContextProvider } from "./src/contexts/UserContext";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <Routes />
        <StatusBar barStyle="light-content" />
      </UserContextProvider>
    </NavigationContainer>
  );
}
