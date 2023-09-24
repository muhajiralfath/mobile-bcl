import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import PATH from "../../navigation/NavigationPath";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen({ register }) {
  const { onRegister } = register();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [inputErrors, setInputErrors] = useState({
    isValidEmail: "",
    isValidPassword: "",
  });

  const validateInputs = () => {
    const errors = {};

    if (email.trim() === "") {
      errors.isValidEmail = "Email is required";
    }

    if (password.trim() === "") {
      errors.isValidPassword = "Password is required";
    } else if (password.trim().length < 8) {
      errors.isValidPassword = "Password must be at least 8 characters long";
    }

    if (password !== confirmPassword) {
      errors.isValidPassword = "Passwords do not match";
    }
    return errors;
  };

  const submitRegister = () => {
    const errors = validateInputs();
    if (Object.keys(errors).length > 0) {
      setInputErrors(errors);
    } else {
      try {
        onRegister(email, password);
        console.log("Registration successful!");
      } catch (err) {
        console.log("RegisterScreen.js", err);
      }
    }
  };

  const isErrorView = (errorValidation) => {
    if (errorValidation) {
      return (
        <Text style={{ color: "red", marginBottom: 7 }}>{errorValidation}</Text>
      );
    }
  };

  const navigation = useNavigation();
  const toLogin = () => {
    navigation.navigate(PATH.LOGIN);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoSection}>
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          source={require("../../shared/assets/login.png")}
        />
      </View>
      <View style={{ flex: 2, paddingHorizontal: 15 }}>
        <View style={styles.form}>
          <View style={styles.headerForm}>
            <Text style={styles.title}>Make Your Account</Text>
            <Text style={styles.title}>Register</Text>
          </View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            onChangeText={(val) => {
              setEmail(val);
              setInputErrors({
                ...inputErrors,
                isValidEmail: "",
              });
            }}
            placeholder="Email"
            style={styles.input}
          />
          {isErrorView(inputErrors.isValidEmail)}
          <Text style={styles.label}>Password</Text>
          <TextInput
            onChangeText={(val) => {
              setPassword(val);
              setInputErrors({
                ...inputErrors,
                isValidPassword: "",
              });
            }}
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
          />
          {isErrorView(inputErrors.isValidPassword)}
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            onChangeText={(val) => {
              setConfirmPassword(val);
              setInputErrors({
                ...inputErrors,
                isValidPassword: "",
              });
            }}
            style={styles.input}
            secureTextEntry={true}
            placeholder="Confirm Password"
          />
          {isErrorView(inputErrors.isValidPassword)}
          <View style={{ marginVertical: 6 }}>
            <TouchableOpacity style={styles.btn} onPress={submitRegister}>
              <Text style={{ color: "white" }}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 5}}>
            <Text style={{ color: "#2D303F" }}>
              Already have an account? {"           "}
              <Text
                style={{ color: "#78C1F3", textDecorationLine: "underline" }}
                onPress={toLogin}
              >
                Login here!
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logoSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    padding: 25,
    borderRadius: 15,
  },
  headerForm: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 0.5,
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
    backgroundColor: "white",
  },
  btn: {
    backgroundColor: "#2D303F",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});
