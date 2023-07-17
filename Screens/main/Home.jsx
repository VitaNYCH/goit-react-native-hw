import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";

const MainTab = createBottomTabNavigator();

export const HomeScreen = ({ navigation }) => {
  return (
    <MainTab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 58,
          paddingRight: 30,
          paddingLeft: 30,
        },
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarActiveTintColor: "#FFFFFF",
      })}>
      <MainTab.Screen
        options={{
          tabBarIcon: () => <Feather name="grid" size={24} color="black" />,
          headerTitle: "Публікації",
          headerTitleAlign: "center",
          headerStyle: {
            height: 88,
            backgroundColor: "#fff",
          },
          headerTitleStyle: {
            marginTop: 10,
            fontFamily: "Roboto-Regular",
            fontSize: 20,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate("Login");
              }}
              title="logOut"
              color="#fff">
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                marginRight={20}
                marginTop={10}
              />
            </TouchableOpacity>
          ),
        }}
        name="Posts"
        component={PostScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: () => (
            <View style={{ ...styles.iconAdd, backgroundColor: "#FF6C00" }}>
              <Feather name="plus" size={24} color="white" />
            </View>
          ),
          headerTitle: "Створити публікацію",
          headerTitleAlign: "center",
          headerStyle: {
            height: 88,
            backgroundColor: "#fff",
          },
          headerTitleStyle: {
            marginTop: 10,
            fontFamily: "Roboto-Regular",
            fontSize: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Posts");
              }}
              title="logOut"
              color="#fff">
              <Feather
                name="arrow-left"
                size={24}
                color="#212121"
                marginLeft={20}
                marginTop={10}
              />
            </TouchableOpacity>
          ),
        }}
        name="Create posts"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: () => <Feather name="user" size={24} color="black" />,
          headerTitle: "Профіль",
          headerTitleAlign: "center",
          headerStyle: {
            height: 88,
            backgroundColor: "#fff",
          },
          headerTitleStyle: {
            marginTop: 10,
            fontFamily: "Roboto-Regular",
            fontSize: 20,
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconAdd: {
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});