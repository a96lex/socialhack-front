import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import EntitiesList from "./src/screens/EntitiesList";
import EntityScreen from "./src/screens/EntityScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Entidades">
          <Drawer.Screen name="Inicio" component={EntitiesList} />
          {loggedIn ? (
            <>
              <Drawer.Screen name="Perfil" component={EntityScreen} />
              <Drawer.Screen name="Crear petición" component={EntityScreen} />
            </>
          ) : (
            <Drawer.Screen name="Acceso" component={EntityScreen} />
          )}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
