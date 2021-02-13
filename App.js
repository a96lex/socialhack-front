import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Entities from "./src/screens/Entities";
import EntityScreen from "./src/screens/EntityScreen";
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
        <Drawer.Navigator initialRouteName="Entidades">
          <Drawer.Screen name="Inicio" component={Entities} />
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
