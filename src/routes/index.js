import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Multar from "../pages/Multar";
import Perfil from "../pages/Perfil";
import HistoricoMultas from "../pages/HistoricoMultas";

import TabRoutes from "./TabRoutes";

import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabRoutes} />
      <Drawer.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: "Perfil",
        }}
      />
    </Drawer.Navigator>
  );
}

// Menu component old navigation
// export default function Routes() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === "Multar") {
//             iconName = focused ? "car-outline" : "car-outline";
//           } else if (route.name === "Perfil") {
//             iconName = focused ? "person-outline" : "person-outline";
//           }

//           // You can return any component that you like here!
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "black",
//         tabBarInactiveTintColor: "gray",
//       })}
//     >
//       <Tab.Screen component={Multar} name="Multar" />
//       <Tab.Screen component={Perfil} name="Perfil" />
//     </Tab.Navigator>
//   );
// }
