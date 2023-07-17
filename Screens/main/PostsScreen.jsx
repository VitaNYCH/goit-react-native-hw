import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

import foto from "../../assets/images/AvatarPhoto.png";

export const PostScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  console.log(route.params);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log(posts);
  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <Image source={foto} style={styles.avatarImg} />
        <View>
          <Text style={styles.avatarName}>Natali Romanova</Text>
          <Text style={styles.avatarEmail}>email@example.com</Text>
        </View>
      </View>
      {/* <View style={styles.navTabs}></View> */}
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.photo }} style={styles.photoGallery} />
            <Text>{item.picName}</Text>
            <Text>{item.location}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  userWrapper: {
    flexDirection: "row",
    // alignItems: "center",
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
  photoGallery: {
    width: 343,
    height: 240,
  },
});
