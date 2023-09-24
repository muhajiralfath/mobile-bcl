import axios from "axios";
import LocalStorage from "../utils/LocalStorage";
import { GlobalError, UnauthorizedError } from "../utils/AppError";
import AsyncStorage from "@react-native-async-storage/async-storage";

const client = axios.create({
    baseURL: "http://10.10.100.223:8080",
});

client.interceptors.request.use(async (config) => {
    if (config.url !== "/api/auth/login") {
        const token = await AsyncStorage.getItem("token");
        config.headers = {
            Authorization: `Bearer ${token}`,
        };
    }

    if (config.url === '/api/users/profile-picture'){
        const token = await AsyncStorage.getItem("token");
        config.headers = {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type" : "multipart/form-data"
        }
    }
    return config;
});

const apiClient = async ({ url, method, body = null }) => {
    try {
        console.log("apiClient method:", method);
        const result = await client[method](url, body);
        return result.data;
    } catch (err) {
        console.log("apiClient", err);
        if (err.response.status === 401) {
            throw new UnauthorizedError("Unauthorized");
        } else {
            throw new GlobalError(`Error Global: ${err.response.data.msg}`);
        }
    }
};

export default apiClient;
