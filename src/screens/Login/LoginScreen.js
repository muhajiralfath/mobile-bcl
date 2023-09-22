import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    Alert,
} from "react-native";
import { onNavigate } from "../../navigation/RootNavigation";
import PATH from "../../navigation/NavigationPath";

export default function LoginScreen({ login }) {
    const { onAuthenticate } = login();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [inputErrors, setInputErrors] = useState({
        isValidUsername: "",
        isValidPassword: "",
    });

    const validateInputs = () => {
        const errors = {};
        if (email.trim() === "") {
            errors.isValidUsername = "Username or email is required";
        }
        if (password.trim() === "") {
            errors.isValidPassword = "Password is required";
        }
        return errors;
    };

    const submitLogin = () => {
        const errors = validateInputs();

        if (Object.keys(errors).length > 0) {
            setInputErrors(errors);
        } else {
            onAuthenticate(email, password);
        }
    };

    const isErrorView = (errorValidation) => {
        if (errorValidation) {
            return (
                <Text style={{ color: "red", marginBottom: 7 }}>
                    {errorValidation}
                </Text>
            );
        }
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
                        <Text style={styles.title}>Assalamu'alaikum!,</Text>
                        <Text style={styles.title}>Selamat Datang Ya Akhi</Text>
                    </View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        onChangeText={(val) => {
                            setEmail(val);
                            setInputErrors({
                                ...inputErrors,
                                isValidUsername: "",
                            });
                        }}
                        placeholder="Username or Email"
                        style={styles.input}
                    />
                    {isErrorView(inputErrors.isValidUsername)}
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
                    <View style={{ marginVertical: 6 }}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={submitLogin}
                        >
                            <Text style={{ color: "white" }}>Login</Text>
                        </TouchableOpacity>
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
        paddingVertical: 50,
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
