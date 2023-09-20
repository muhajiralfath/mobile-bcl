import axios from "axios"
import LocalStorage from "../utils/LocalStorage";
import {GlobalError, UnauthorizedError} from "../utils/AppError";

const client = axios.create({
    baseURL: "http://192.168.108.49:8080",
});

client.interceptors.request.use(async (config) => {
    if (config.url !== "/api/auth/login") {
        const token = await LocalStorage.getData("token");
        config.headers = {
            Authorization: `Bearer ${token}`,
        }
    }
    return config;
})

const apiClient = async ({ url, method, params = null }) => {
    try {
        console.log("apiClient method:", method);
        const result = await client[method](url, params);
        return result.data;
    } catch (err) {
        console.log("apiClient", err);
        if (err.response.status === 401) {
            throw new UnauthorizedError("Unauthorized");
        } else {
            throw new GlobalError(`Error Global: ${err.response.data.msg}`);
        }
    }
}

export default apiClient;