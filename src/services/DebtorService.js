import { useDep } from "../context/DependencyContext";

const DebtorService = () => {
    const { apiClient } = useDep();

    const getDebtorByToken = async () => {
        try {
            const result = await apiClient({
                method: "get",
                url: "/api/debtors/me",
            });
            return result.data;
        } catch (err) {
            console.log("Error Service getDebtorByToken", err);
            throw err;
        }
    };

    const updateDebtor = async (dataDebtor) => {
        try {
            const result = await apiClient({
                method: "put",
                url: "/api/debtors",
                body: dataDebtor,
            });
            return result.data;
        } catch (err) {
            console.log("Error Service update Debtor", err);
            throw err;
        }
    };

    return {
        getDebtorByToken,
        updateDebtor,
    };
};

export default DebtorService;
