import { registerRootComponent } from "expo";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately

import React from "react";

import App from "./App";
import { UserProvider } from "./src/context/UserContext";

export default function Index() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

registerRootComponent(Index);
