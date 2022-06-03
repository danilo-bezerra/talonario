import Multar from "../components/Multar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Perfil from "../components/Perfil";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Multar") {
            iconName = focused ? "car-outline" : "car-outline";
          } else if (route.name === "Perfil") {
            iconName = focused ? "person-outline" : "person-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen component={Multar} name="Multar" />
      <Tab.Screen component={Perfil} name="Perfil" />
    </Tab.Navigator>
  );
}
