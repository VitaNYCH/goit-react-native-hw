import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CommentScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CommentScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});