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
  const [isShownKeyBoard, setIsShownKeyBoard] = useState(false);
  const [state, setstate] = useState(initialState);
  const keyBoardHide = () => {
    setIsShownKeyBoard(true);
    Keyboard.dismiss();
    setstate(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
        <ImageBackground style={styles.imgBg} source={img}>
          <View
            style={{
              ...styles.form,
              paddingBottom: isShownKeyBoard ? 20 : 100,
            }}>
            <View style={styles.title}>
              <Text style={styles.textTitle}>Реєстрація</Text>
            </View>

            <View>
              <TextInput
                placeholder="Логін"
                style={styles.input}
                value={state.login}
                onFocus={() => {
                  setIsShownKeyBoard(true);
                }}
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
                onFocus={() => {
                  setIsShownKeyBoard(true);
                }}
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
                onFocus={() => {
                  setIsShownKeyBoard(true);
                }}
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
