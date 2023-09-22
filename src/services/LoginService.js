import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDep } from "../context/DependencyContext";

const LoginService = () => {
    const { apiClient } = useDep();

    const login = async (email, password) => {
        try {
            const result = await apiClient({
                method: "post",
                url: "/api/auth/login",
                body: {
                    email: email,
                    password: password,
                },
            });
            await AsyncStorage.setItem("token", result.data.token);
        } catch (err) {
            console.log("LoginService", err);
            throw err;
        }
    };

    return {
        login,
    };
};

export default LoginService;
