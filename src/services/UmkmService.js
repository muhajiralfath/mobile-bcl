import { useDep } from "../context/DependencyContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constant from "../utils/Constant";
import axios from "axios";

const UmkmService = () => {
    const { apiClient } = useDep();

    const createUmkm = async (umkmData) => {
        try {
            const result = await apiClient({
                method: "post",
                url: "/api/umkm",
                body: umkmData,
            });
            return result.data;
        } catch (err) {
            console.log("Error Service create Umkm", err);
            throw err;
        }
    };

    const updateUmkm = async (umkmData) => {
        try {
            const result = await apiClient({
                method: "put",
                url: "/api/umkm",
                body: umkmData,
            });
            return result.data;
        } catch (err) {
            console.log("Error Service update Umkm", err);
            throw err;
        }
    };

    const getById = async (umkmId) => {
        try {
            const result = await apiClient({
                method: "get",
                url: `/api/umkm/${umkmId}`,
            });
            return result.data;
        } catch (err) {
            console.log("Error Service getById Umkm", err);
            throw err;
        }
    };

    const getDocument = async () => {
        try {
            return await apiClient({
               method: "get",
               url: "/api/umkm/download-document"
            });
        } catch (err) {
            console.log("Error Service getDocument Umkm", err);
            throw err;
        }
    };

    const uploadDocument = async (body) => {
        try {
            const url = `${Constant.BASEURL}/api/umkm/upload-document`
            const token = await AsyncStorage.getItem('token');
            console.log("url", url);
            console.log("body", body);
            const requestOptions = {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    Accept: "application/json",
                    "Content-Type" : "multipart/form-data"
                },
                body: body
            };
            return await fetch(url, requestOptions);
        } catch (err) {
            console.log("Error upload document", err);
            throw err;
        }
    }

    const getByDebtorId = async (debtorId) => {
        try {
            const result = await apiClient({
                method: "get",
                url: `/api/umkm/debtorId/${debtorId}`,
            });
            return result.data;
        } catch (err) {
            console.log("Error Service getByDebtorId Umkm", err);
            throw err;
        }
    };

    return {
        createUmkm,
        updateUmkm,
        getById,
        getByDebtorId,
        getDocument,
        uploadDocument,
    };
};

export default UmkmService;
