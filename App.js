import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeNavigation from "./src/screens/HomeNavigation";
import Auth from "./src/screens/Auth";
import CreateRequest from "./src/screens/CreateRequest";
import { useUserState } from "./src/context/UserContext";
import Profile from "./src/screens/Profile";
import Faq from "./src/screens/Faq";

const Drawer = createDrawerNavigator();

export default function App() {
  const { loggedIn, isEntity } = useUserState();

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="INICIO"
          drawerStyle={{ backgroundColor: "#d19c1d", paddingTop: 50 }}
          header="Menu"
          drawerType="slide"
          overlayColor="transparent"
          drawerContentOptions={{
            activeTintColor: "white",
            activeBackgroundColor: "d19c1d",
            inactiveTintColor: "white",
            inactiveBackgroundColor: "d19c1d",
            labelStyle: {
              marginLeft: 5,
              fontSize: "110%",
            },
          }}
        >
          <Drawer.Screen name="INICIO" component={HomeNavigation} />
          {loggedIn ? (
            <>
              <Drawer.Screen name="PERFIL" component={Profile} />
              {isEntity && (
                <Drawer.Screen
                  name="CREAR PETICIÓN"
                  component={CreateRequest}
                />
              )}
            </>
          ) : (
            <Drawer.Screen name="ACCESO" component={Auth} />
          )}
          <Drawer.Screen name="FAQ" component={Faq} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
