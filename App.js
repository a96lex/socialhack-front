import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeNavigation from "./src/screens/HomeNavigation";
import Auth from "./src/screens/Auth";
import CreateRequest from "./src/screens/CreateRequest";
import { useUserState } from "./src/context/UserContext";
import Profile from "./src/screens/Profile";

const Drawer = createDrawerNavigator();

export default function App() {
  const { loggedIn } = useUserState();
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Inicio"
          drawerStyle={{ backgroundColor: "#d19c1d" }}
          header="Menu"
        >
          <Drawer.Screen name="Inicio" component={HomeNavigation} />
          {loggedIn ? (
            <>
              <Drawer.Screen name="Perfil" component={Profile} />
              <Drawer.Screen name="Crear petición" component={CreateRequest} />
            </>
          ) : (
            <Drawer.Screen name="Acceso" component={Auth} />
          )}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
