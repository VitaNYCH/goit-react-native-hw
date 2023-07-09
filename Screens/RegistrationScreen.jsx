import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import img from "../assets/images/PhotoBG.png";
import { styles } from "./style";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [isShownKey, setIsShownKey] = useState(false);
  const [state, setstate] = useState(initialState);
  const handleFocus = () => {
    setIsShownKey(true);
  };
  const keyBoardHide = () => {
    setIsShownKey(true);
    Keyboard.dismiss();
    setstate(initialState);
  };
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIsShownKey(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsShownKey(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
        <ImageBackground style={styles.imgBg} source={img}>
          <View
            style={{
              ...styles.form,
              paddingBottom: isShownKey ? 20 : 100,
            }}>
            <View style={styles.title}>
              <Text style={styles.textTitle}>Реєстрація</Text>
            </View>

            <View>
              <TextInput
                placeholder="Логін"
                style={styles.input}
                value={state.login}
                onFocus={handleFocus}
                onChangeText={(value) =>
                  setstate((prevState) => ({ ...prevState, login: value }))
                }
              />
            </View>

            <View>
              <TextInput
                placeholder="Адреса електронної пошти"
                style={styles.input}
                value={state.email}
                onFocus={handleFocus}
                onChangeText={(value) =>
                  setstate((prevState) => ({ ...prevState, email: value }))
                }
              />
            </View>

            <View>
              <TextInput
                placeholder="Пароль"
                style={styles.input}
                value={state.password}
                secureTextEntry={true}
                onFocus={handleFocus}
                onChangeText={(value) =>
                  setstate((prevState) => ({ ...prevState, password: value }))
                }
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={keyBoardHide}>
              <Text style={styles.buttonTitle}>Зареєструватися</Text>
            </TouchableOpacity>

            <View style={styles.notice}>
              <Text style={styles.textNotice}>Вже є акаунт? Увійти</Text>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
