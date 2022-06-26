import React, { useContext } from "react";

import Perfil from "../pages/Perfil";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { UserContext } from "../contexts/UserContext";

import HomeRoutes from "./HomeRoutes";
import Login from "../pages/Login";
import SignOut from "../pages/SignOut";
import theme from "../assets/theme";

const Drawer = createDrawerNavigator();

export default function Routes() {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? (
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: theme.colors.bgPrimary,
            },
            headerStyle: {
              backgroundColor: theme.colors.bgPrimary,
            },
            headerTintColor: theme.colors.textPrimary,
            drawerActiveBackgroundColor: theme.colors.bgActive,
            drawerActiveTintColor: theme.colors.textPrimary,
            drawerInactiveTintColor: theme.colors.textPrimary,
          }}
        >
          <Drawer.Screen name="Home" component={HomeRoutes} />
          <Drawer.Screen name="Perfil" component={Perfil} />
          <Drawer.Screen name="Sair" component={SignOut} />
        </Drawer.Navigator>
      ) : (
        <Login />
      )}
    </>
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
