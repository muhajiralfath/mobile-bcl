import { useDep } from "../context/DependencyContext";

const BillService = () => {
    const { apiClient } = useDep();

    const getBillByDebtorId = async (debtorId) => {
        try {
            const result = await apiClient({
                method: "get",
                url: `/api/bills/${debtorId}`,
            });
            return result.data;
        } catch (err) {
            console.log("Bill Service", err);
            throw err;
        }
    };

    const getBillById = async (billId) => {
        try {
            const result = await apiClient({
                method: "get",
                url: `/api/bills/${billId}`,
            });
            return result.data;
        } catch (err) {
            console.log("Bill Service", err);
            throw err;
        }
    };

    return {
        getBillByDebtorId,
        getBillById,
    };
};

export default BillService;
