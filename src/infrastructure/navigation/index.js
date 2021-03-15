import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AccountNavigator } from "./account.navigator";
import { AppNavigator } from "./app.navigator";

import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  const { isAuthenicated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenicated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
