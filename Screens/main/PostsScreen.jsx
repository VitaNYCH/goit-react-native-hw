import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import { CommentsScreen } from "../nestedScreens/CommentsScreen";
import { MapScreen } from "../nestedScreens/MapScreen";
import { DefaultPostsScreen } from "../nestedScreens/DefaultPostsScreen";

const NestedScreen = createStackNavigator();

export const PostScreen = ({ navigation }) => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultPostScreen"
        component={DefaultPostsScreen}
        options={{
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
                navigation.navigate("Login");
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
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerTitle: "Коментарі",
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
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerTitle: "Карта",
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
      />
    </NestedScreen.Navigator>
  );
};
