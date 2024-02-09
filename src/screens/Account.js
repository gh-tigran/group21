import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const users = [
  { id: 1, name: "Poxos" },
  { id: 3, name: "Armen" },
];

function Account(props) {
  const { params = {} } = useRoute();
  const navigation = useNavigation();
  useEffect(() => {
    const user = users.find(u => u.id === params.id) || {};
    navigation.setOptions({
      title: user.name || 'empty'
    })
  }, [params.id]);
  return (
    <View>
      <Text>Account</Text>
      <Text>{params.id}</Text>
    </View>
  );
}

export default Account;
