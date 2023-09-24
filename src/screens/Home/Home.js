import { useDispatch } from "react-redux";
import { setIsLoading } from "../../store/Loading/LoadingSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Home = (serviceOne, serviceTwo) => {
    const { getDebtorByToken, updateDebtor } = serviceOne();
    const { getBillByDebtorId } = serviceTwo();
    const dispatch = useDispatch();

    const getDebtor = async () => {
        try {
            dispatch(setIsLoading(true));
            const dataDebtor = await getDebtorByToken();
            await AsyncStorage.setItem("debtorId", dataDebtor.debtorId);
            if (dataDebtor.imageId){
                await AsyncStorage.setItem("imageId", dataDebtor.imageId)
            }
            return dataDebtor;
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
