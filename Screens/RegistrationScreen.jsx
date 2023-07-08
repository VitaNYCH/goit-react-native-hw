import React, { useState } from "react";
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
export const RegistrationScreen = () => {
  const { isShownKeyBoard, setIsShownKeyBoard } = useState(false);
  const keyBoardHide = () => {
    setIsShownKeyBoard(true);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <View style={styles.container}>
        <ImageBackground style={styles.imgBg} source={img}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.form}>
              <View style={styles.title}>
                <Text style={styles.textTitle}>Реєстрація</Text>
              </View>

              <View>
                <TextInput
                  placeholder="Логін"
                  style={styles.input}
                  onFocus={() => {
                    setIsShownKeyBoard(true);
                  }}
                />
              </View>

              <View>
                <TextInput
                  placeholder="Адреса електронної пошти"
                  style={styles.input}
                  onFocus={() => {
                    setIsShownKeyBoard(true);
                  }}
                />
              </View>

              <View>
                <TextInput
                  placeholder="Пароль"
                  style={styles.input}
                  secureTextEntry={true}
                  onFocus={() => {
                    setIsShownKeyBoard(true);
                  }}
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={keyBoardHide}>
                <Text style={styles.buttonTitle}>Зареєструватися</Text>
              </TouchableOpacity>

              <View style={styles.notice}>
                <Text>Вже є аккаунт? Увійти</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
