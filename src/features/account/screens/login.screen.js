import React from "react";
import { Text, View } from "react-native";
import { AccountBackground } from "../components/account.styles";

export const LoginScreen = () => {
  return (
    <AccountBackground>
      <View>
        <Text>Login here!</Text>
      </View>
    </AccountBackground>
  );
};
