import React from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Pressable,
  Button,
  Text,
} from "react-native";

const Buttons = ({ onPress, text, textStyle, buttonStyle }) => {
  return (
    <Pressable onPress={onPress} style={{ ...styles.button, ...buttonStyle }}>
      <Text style={{ ...styles.text, ...textStyle }}>{text}</Text>
    </Pressable>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#dedede",
    fontSize: 32,
  },
});
