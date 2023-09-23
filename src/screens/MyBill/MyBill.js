import {setIsLoading} from "../../store/Loading/LoadingSlice";
import {useDispatch} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const MyBill = (service) => {
    const dispatch = useDispatch();
    const {getBillByDebtorId} = service();

    const getMyBill = async () => {
        try {
            dispatch(setIsLoading(true));
            const debtorId = await AsyncStorage.getItem('debtorId');
            return await getBillByDebtorId(debtorId);
        } catch (err) {
            console.log("getBill", err);
        } finally {
            dispatch(setIsLoading(false));
        }
    };

    return {
        getMyBill,
    }
}