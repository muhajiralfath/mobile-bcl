import {useDep} from "../context/DependencyContext";

const PaymentService = () => {
    const { apiClient } = useDep();

    const createPayment = async (umkmId, billId) => {
        try {
            const result = await apiClient({
                method: 'post',
                url: '/api/payment',
                body: {
                    umkmId: umkmId,
                    billId: billId,
                }
            })
            return result.data;
        } catch (err) {
            console.log("PaymentService", err)
            throw err;
        }
    }

    return {
        createPayment,
    }
}

export default PaymentService;