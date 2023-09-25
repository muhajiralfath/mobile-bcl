import axios from "axios";
import LocalStorage from "../utils/LocalStorage";
import { GlobalError, UnauthorizedError } from "../utils/AppError";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constant from "../utils/Constant";

const client = axios.create({
    baseURL: Constant.BASEURL,
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

    if (config.url === '/api/umkm/download-document') {
        config.responseType = 'blob';
    }

    if (config.url === '/api/umkm/upload-document') {
        config.headers = {
            Accept: "application/json",
            "Content-Type" : "multipart/form-data"
        }
        console.log("Content-Type", config.headers);
    }
    return config;
});

const apiClient = async ({ url, method, body = null }) => {
    try {
        console.log("apiClient method:", method);
        console.log("apiClient body", body);
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
