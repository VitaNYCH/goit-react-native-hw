import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  TextInput,
  View,
  Keyboard,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { db } from "../../firebase/config";
import { doc, setDoc } from "firebase/firestore";

export const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState("");

  const { userId, login } = useSelector((state) => state.auth);
  const { photo, postId } = route.params;
  console.log(route);
  const createComment = async () => {
    const uniqName = Date.now().toString();
    await setDoc(doc(db, "posts", postId, "comments", uniqName), {
      login,
      comment,
      userId,
      createdAt: commentDate(),
    });
    keyboardHide();
    setComment("");
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={styles.picturePost}>
          <Image source={{ uri: photo }} style={styles.Image} />
        </View>
        <TextInput
          placeholderTextColor={"#BDBDBD"}
          placeholder={"Коментувати..."}
          value={comment}
          style={styles.input}
          selectionColor={"#FF6C00"}
          onChangeText={setComment}
        />
        <TouchableOpacity style={styles.iconBtn} onPress={createComment}>
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

const commentDate = () => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let min = date.getMinutes();

  if (day.length === 1) {
    day = "0" + day;
  }

  if (month.length === 1) {
    month = "0" + month;
  }

  if (hours.length === 1) {
    hours = "0" + hours;
  }

  if (min.length === 1) {
    min = "0" + min;
  }

  return `${day} ${month} ${year} | ${hours}:${min}`;
};
