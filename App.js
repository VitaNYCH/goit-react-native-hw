import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "./Screens/LoginScreen";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </>
  );
}
