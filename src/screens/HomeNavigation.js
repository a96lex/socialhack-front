import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import CenterDetails from "./CenterDetails";
import Home from "./Home";

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={CenterDetails} />
    </Stack.Navigator>
  );
}
