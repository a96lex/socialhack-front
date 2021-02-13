import React from "react";
import { registerRootComponent } from "expo";

import { ContentProvider } from "./src/context/ContentContext";
import { UserProvider } from "./src/context/UserContext";

import App from "./App";

export default function Index() {
  return (
    <UserProvider>
      <ContentProvider>
        <App />
      </ContentProvider>
    </UserProvider>
  );
}

registerRootComponent(Index);
