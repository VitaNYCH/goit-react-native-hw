import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState, useEffect } from "react";

export const CommentsScreen = ({ route }) => {
  const { photo } = route.params;
  console.log(route);
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.picturePost}>
          <Image source={{ uri: photo }} style={styles.Image} />
        </View>
        <TextInput
          placeholderTextColor={"#BDBDBD"}
          placeholder={"Коментувати..."}
          style={styles.input}
          selectionColor={"#FF6C00"}
          onChangeText={() => {}}
        />
        <TouchableOpacity style={styles.iconBtn} onPress={() => {}}>
          <Feather name="send" size={18} color="#fff" style={styles.iconSend} />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  picturePost: {
    marginTop: 32,
    marginBottom: 16,
  },
  Image: {
    height: 240,
    borderRadius: 8,
  },
  input: {
    alignItems: "center",
    height: 50,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 20,
    padding: 12,
    color: "#212121",
    fontSize: 15,
    marginBottom: 10,
  },
  iconSend: {},
  iconBtn: {
    position: "absolute",
    right: 20,
    bottom: 15,
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    alignItems: "center",
    borderColor: "#FF6C00",
    backgroundColor: "#FF6C00",
    justifyContent: "center",
  },
});
