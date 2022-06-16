import "react-native-gesture-handler";
import { useState } from "react";
import Login from "./src/pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
  const [logged, setLogged] = useState(false);
  if (!logged) {
    return <Login setLogged={setLogged} />;
  }

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
