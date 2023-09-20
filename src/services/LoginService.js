import {useDep} from "../context/DependencyContext";
import LocalStorage from "../utils/LocalStorage";

const LoginService = () => {
    const { apiClient } = useDep();

    const login = async (email, password) => {
        try {
            console.log("LoginService", email, password);
            const result = await apiClient({
                method: "post",
                url: "/api/auth/login",
                params: {
                    email: email,
                    password: password,
                }
            });
            console.log("result", result.data.token);
            await LocalStorage.setData('token', result.data.token);
        } catch (err) {
            console.log("LoginService", err);
            throw err;
        }
    }

    return {
        login,
    }
}

export default LoginService;