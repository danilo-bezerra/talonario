import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
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
