import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 30,
  },

  input: {
    height: 50,
    color: "#000000",
    borderColor: "#808080",
    backgroundColor: "#e6e6fa",
    borderWidth: 1,
    marginTop: 20,

    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#ffa500",
    borderColor: "#ffa500",
    height: 50,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonTitle: {
    color: "#ffffff",
    fontSize: 16,
  },
  notice: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
