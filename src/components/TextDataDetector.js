import React from "react";
import { Platform, Text, TextInput } from "react-native";

function TextDataDetector(props) {
  const { children, styles, ...p } = props;
  if (Platform.OS === "android") {
    return <Text {...props} dataDetectorType="all" />;
  }
  return (
    <TextInput value={children} {...p} editable={false} multiline dataDetectorTypes="all"/>
  );
}

export default TextDataDetector;
