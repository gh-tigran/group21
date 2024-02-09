import HeaderLeft from "../components/HeaderLeft";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Account from "../screens/Account";

const screenOptions = {
  headerLeft: (p) => <HeaderLeft {...p} />,
  headerTitleAlign: "center",
  headerBackVisible: false,
  gestureEnabled: true,
  fullScreenGestureEnabled: true,
};
const Stack = createNativeStackNavigator();

function AccountNavigation(props) {
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
}

export default AccountNavigation;

