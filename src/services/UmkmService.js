import { useDep } from "../context/DependencyContext";

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
            const result = await apiClient({
                method: "get",
                url: `/api/umkm/download-document`
            });
            return result;
        } catch (err) {
            console.log("Error Service getDocument Umkm", err);
            throw err;
        }
    };
    const getByDebtorId = async (debtorId) => {
        try {
            const result = await apiClient({
                method: "get",
                url: `/api/umkm/debtorId/${debtorId}`,
            });
            console.log("66", result)
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
        getDocument
    };
};

export default UmkmService;
