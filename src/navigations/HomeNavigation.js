import HeaderLeft from "../components/HeaderLeft";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import SettingsNotification from "../screens/SettingsNotification";

const screenOptions = {
  headerLeft: (p) => <HeaderLeft {...p} />,
  headerTitleAlign: "center",
  headerBackVisible: false,
  gestureEnabled: true,
  fullScreenGestureEnabled: true,
};
const Stack = createNativeStackNavigator();

function HomeNavigation(props) {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SettingsNotification" component={SettingsNotification} />

    </Stack.Navigator>
  );
}

export default HomeNavigation;

