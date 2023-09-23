import {setIsLoading} from "../../store/Loading/LoadingSlice";
import {useDispatch} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Linking} from "react-native";
import {onNavigate} from "../../navigation/RootNavigation";
import PATH from "../../navigation/NavigationPath";

export const MyBill = (serviceOne, serviceTwo) => {
    const dispatch = useDispatch();
    const {getBillByDebtorId} = serviceOne();
    const {createPayment} = serviceTwo();

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

    const payBill = async (umkmId, billId) => {
        try {
            dispatch(setIsLoading(true));
            const result = await createPayment(umkmId, billId);
            onNavigate({
                routeName: PATH.MIDTRANS,
                params: {url: result.snapUrl},
                isReplace: false
            });
        } catch (err) {
            console.log("MyBill", err);
            throw err;
        } finally {
            dispatch(setIsLoading(false));
        }
    }

    return {
        getMyBill,
        payBill,
    }
}