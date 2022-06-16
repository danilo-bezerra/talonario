import React from "react";

import Multar from "../pages/Multar";
import Perfil from "../pages/Perfil";
import Dashboard from "../pages/Dashboard";
import Imprimir from "../pages/Imprimir";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Dashboard") {
            iconName = focused ? "home-outline" : "home-outline";
          } else if (route.name === "Multar") {
            iconName = focused ? "car-outline" : "car-outline";
          } else if (route.name === "Imprimir") {
            iconName = focused ? "print-outline" : "print-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen component={Dashboard} name="Dashboard" />
      <Tab.Screen component={Multar} name="Multar" />
      <Tab.Screen component={Imprimir} name="Imprimir" />
    </Tab.Navigator>
  );
}
