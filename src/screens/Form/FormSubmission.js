import { useDispatch } from "react-redux";
import { setIsLoading } from "../../store/Loading/LoadingSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import {onNavigate} from "../../navigation/RootNavigation";
import PATH from "../../navigation/NavigationPath";


export const FormSubmisson = (serviceOne, ServiceTwo) => {
    const { createSubmission, getSubmissionByDebtorId } = serviceOne();
    const { createUmkm, updateUmkm, getById, getByDebtorId } = ServiceTwo();
    const dispatch = useDispatch();

    const addSubmission = async (data) => {
        try {
            dispatch(setIsLoading(true));
            const response = await createSubmission(data);
            return response;
        } catch (err) {
            Alert.alert("Please Input correct submission or add Umkm First");
            console.log("getDebtor", err);
        } finally {
            dispatch(setIsLoading(false));
        }
    };

    const getUmkm = async () => {
        try {
            const debtorId = await AsyncStorage.getItem("debtorId");
            const response = await getByDebtorId(debtorId);
            console.log(response)
            return response;
        } catch (err) {
            console.log(" error get Umkm in Form,", err);
            Alert.alert("Add Umkm First ! You can add in Profile");
            onNavigate({
                routeName: PATH.HOME
            })
        }
    };
    return { addSubmission, getUmkm };
};
