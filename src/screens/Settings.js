import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { useFocusEffect, useIsFocused, useNavigation } from "@react-navigation/native";

function Settings(props) {
  const navigation = useNavigation();
  const [data, setData] = useState("");
  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused){

    }else {

    }
  }, [isFocused])

  useEffect(() => {
    fetchData();
    alert("mount");
    return () => {
      alert("unmount");
    };
  }, []);

  useFocusEffect(useCallback(() => {
    // alert("focus");
    return () => {
      // alert("blur");
    };
  }, []));

  const fetchData = () => {
    setTimeout(() => {
      setData("Hello !!!!");
    }, 3000);

  };
  return (
    <View>
      <Text>Settings</Text>
      <Text>{data}</Text>
      {!data ? <ActivityIndicator /> : null}
      <Button onPress={() => navigation.navigate("SettingsAdmin")} title="Admin" />
      <Button onPress={() => navigation.navigate("SettingsNotification")} title="Notification" />

    </View>
  );
}

export default Settings;
