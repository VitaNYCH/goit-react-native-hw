import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { useRoute } from "./router";
import { store } from "./redux/store";
import { auth } from "./firebase/config";

export default function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => setUser(user));

  const routing = useRoute(user);
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
