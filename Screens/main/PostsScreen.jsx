import React from "react";
import {} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { CommentsScreen } from "../nestedScreens/CommentsScreen";
import { MapScreen } from "../nestedScreens/MapScreen";
import { DefaultPostsScreen } from "../nestedScreens/DefaultPostsScreen";

const NestedScreen = createStackNavigator();

export const PostScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultPostScreen"
        component={DefaultPostsScreen}
        options={{ headerShown: false }}
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
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};
