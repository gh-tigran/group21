import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
function HeaderLeft(props) {
  const navigation = useNavigation();
  if(!props.canGoBack){
    return null;
  }
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text>Back</Text>
    </TouchableOpacity>
  );
}

export default HeaderLeft;
