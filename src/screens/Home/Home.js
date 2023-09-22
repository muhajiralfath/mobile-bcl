import { useDispatch } from "react-redux";
import { setIsLoading } from "../../store/Loading/LoadingSlice";

export const Home = (serviceOne, serviceTwo) => {
    const { getDebtorByToken, updateDebtor } = serviceOne();
    const { getBillByDebtorId } = serviceTwo;
    const dispatch = useDispatch();

    const getDebtor = async () => {
        try {
            dispatch(setIsLoading(true));
            const debtorData = await getDebtorByToken();
            return debtorData;
        } catch (err) {
            console.log("getDebtor", err);
        } finally {
            dispatch(setIsLoading(false));
        }
    };

    const getBill = async (debtorId) => {
        try {
            dispatch(setIsLoading(true));
            const billData = await getBillByDebtorId(debtorId);
            console.log(billData);
            return billData;
        } catch (err) {
            console.log("getBill", err);
        } finally {
            dispatch(setIsLoading(false));
        }
    };

    return {
        getDebtor,
        getBill,
    };
};
