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

const screen = Dimensions.get("window");
//const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "red",
    height: 70,
    width: 80,
    alignItems: "center",
    //alignSelf: "center",
    //borderRadius: 10,
    //borderWidth: 2,
    justifyContent: "center",
    margin: 4,
    //padding: 10,
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
