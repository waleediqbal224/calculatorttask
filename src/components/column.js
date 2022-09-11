import React from "react";
import { View, StyleSheet, Pressable, Button, Text } from "react-native";

const Column = ({ children }) => {
  return <View style={styles.column}>{children}</View>;
};

export default Column;

const styles = StyleSheet.create({
  column: {
    flexDirection: "column",
  },
});
