import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "./navigations/HomeNavigation";
import SettingsNavigation from "./navigations/SettingsNavigation";
import AccountNavigation from "./navigations/AccountNavigation";
import HomeSvg from "./assets/icons/home.svg";
import SplashScreen from "react-native-splash-screen";

const Tab = createBottomTabNavigator();

function App(props) {
  useEffect(() => {
      ////

    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeNavigation"
          component={HomeNavigation}
          options={{
            title: "Home",
            headerShown: false,
            // tabBarIcon: (p) => <HomeSvg fill={p.color} widht={20} height={20} />,
          }}
        />
        <Tab.Screen
          name="SettingsNavigation"
          component={SettingsNavigation}
          options={{
            title: "Settings",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="AccountNavigation"
          component={AccountNavigation}
          options={{
            title: "Account",
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
