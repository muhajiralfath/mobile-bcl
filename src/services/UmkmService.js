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
            const result = apiClient({
                method: "get",
                url: `/api/umkm/${umkmId}`,
            });
            return result.data;
        } catch (err) {
            console.log("Error Service getById Umkm", err);
            throw err;
        }
    };

    const getByDebtorID = async (debtorId) => {
        try {
            const result = apiClient({
                method: "get",
                url: `/api/umkm/debtorId/${debtorId}`,
            });
            return result.data;
        } catch (err) {
            console.log("Error Service getById Umkm", err);
            throw err;
        }
    };

    return {
        createUmkm,
        updateUmkm,
        getById,
        getByDebtorID,
    };
};

export default UmkmService;
