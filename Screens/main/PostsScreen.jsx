import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import foto from "../../assets/images/AvatarPhoto.png";

export const PostScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <Image source={foto} style={styles.avatarImg} />
        <View>
          <Text style={styles.avatarName}>Natali Romanova</Text>
          <Text style={styles.avatarEmail}>email@example.com</Text>
        </View>
      </View>
      <View style={styles.navTabs}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  userWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 30,
  },
  avatarImg: {
    width: 60,
    height: 60,

    marginRight: 8,

    backgroundColor: "#f6f6f6",
    borderRadius: 16,
  },
  avatarName: {
    fontFamily: "Roboto-Regular",

    color: "#212121",
  },
  avatarEmail: {
    fontFamily: "Roboto-Regular",

    color: "rgba(33, 33, 33, 0.8)",
  },
});
