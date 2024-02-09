import HeaderLeft from "../components/HeaderLeft";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import SettingsAdmin from "../screens/SettingsAdmin";
import SettingsNotification from "../screens/SettingsNotification";

const screenOptions = {
  headerLeft: (p) => <HeaderLeft {...p} />,
  headerTitleAlign: "center",
  headerBackVisible: false,
  gestureEnabled: true,
  fullScreenGestureEnabled: true,
};
const Stack = createNativeStackNavigator();

function SettingsNavigation(props) {
  return (
    <Stack.Navigator initialRouteName="Settings" screenOptions={screenOptions}>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
        }}
      />
      <Stack.Screen
        name="SettingsAdmin"
        component={SettingsAdmin}
        options={{
          title: "Admin",
        }}
      />
      <Stack.Screen name="SettingsNotification" component={SettingsNotification} />
    </Stack.Navigator>
  );
}

export default SettingsNavigation;

