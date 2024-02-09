import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import { CameraRoll } from "@react-native-camera-roll/camera-roll";
function Home(props) {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>

      <Button
        onPress={() => {
          navigation.navigate("SettingsNavigation", { screen: "SettingsNotification", params: {} });
        }}
        title="Navigation" />
      <Button
        onPress={async () => {
          await navigation.navigate("SettingsNavigation");
          setTimeout(() => {
            navigation.navigate("SettingsNavigation", { screen: "SettingsNotification", params: {} });
          }, 0)
        }}
        title="Navigation v2" />
      <Button
        onPress={async () => {
          navigation.navigate("SettingsNotification");
        }}
        title="Navigation v3"
      />

      <Button onPress={() => navigation.navigate("Account", { id: 1 })} title="Account Poxos" />
      <Button onPress={() => navigation.navigate("Account", { id: 3 })} title="Account Armen" />
      <Button onPress={() => navigation.navigate("Account")} title="Account empty" />
    </View>
  );
}

export default Home;
