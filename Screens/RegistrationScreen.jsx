import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import img from "../assets/images/PhotoBG.png";
import { styles } from "./style";
export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgBg} source={img}>
        <View style={styles.form}>
          <View style={styles.title}>
            <Text style={styles.textTitle}>Реєстрація</Text>
          </View>
          <View>
            <TextInput
              keyboardType="numeric"
              placeholder="Логін"
              style={styles.input}
              onFocus={() => setIsShownKeyBoard(true)}
            />
          </View>
          <View>
            <TextInput
              keyboardType="default"
              placeholder="Адреса електронної пошти"
              style={styles.input}
              onFocus={() => setIsShownKeyBoard(true)}
            />
          </View>
          <View>
            <TextInput
              keyboardType="default"
              placeholder="Пароль"
              style={styles.input}
              secureTextEntry={true}
              onFocus={() => setIsShownKeyBoard(true)}
            />
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={styles.buttonTitle}>Зареєструватися</Text>
          </TouchableOpacity>
          <View style={styles.notice}>
            <Text>Вже є аккаунт? Увійти</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
