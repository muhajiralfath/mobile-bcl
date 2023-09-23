import {setIsLoading} from "../../store/Loading/LoadingSlice";
import {useDispatch} from "react-redux";

export const Profile = (debtorService, umkmService) => {
    const {getDebtorByToken, updateDebtor} = debtorService()
    const {createUmkm, updateUmkm, getById, getByDebtorId} = umkmService()
    const dispatch = useDispatch();

    const getDebtor = async () => {
        try {
            dispatch(setIsLoading(true));
            const dataDebtor = await getDebtorByToken();
            return dataDebtor;
        } catch (err) {
            console.log("getDebtor", err);
        } finally {
            dispatch(setIsLoading(false));
        }
    }
    const onUpdate = async (dataDebtor) => {
        try {
            dispatch(setIsLoading(true));
            await updateDebtor(dataDebtor)
        }catch (e){
            console.log("Profile_onUpdate", e)
        }finally {
            dispatch(setIsLoading(false));
        }
    }
    const getUMKMByDebtorId = async (debtorId) => {
        try {
            dispatch(setIsLoading(true));
            const umkm = await getByDebtorId(debtorId)
            return umkm
        }catch (e){
            console.log("Profile_getUMKMByDebtorId", e)
        }finally {
            dispatch(setIsLoading(false));
        }
    }
    const onUpdateUmkm = async (dataUmkm) => {
        try {
            dispatch(setIsLoading(true));
            const result = await updateUmkm(dataUmkm)
            return result;
        }catch (e){
            console.log("Profile_onUpdateUmkm", e)
        }finally {
            dispatch(setIsLoading(false));
        }
    }
    const onCreateUmkm = async (dataUmkm) => {
        try {
            dispatch(setIsLoading(true));
            const result = await createUmkm(dataUmkm)
            return result;
        }catch (e){
            console.log("Profile_onCreateUmkm", e)
        }finally {
            dispatch(setIsLoading(false));
        }
    }

    return {
        getDebtor,
        onUpdate,
        getUMKMByDebtorId,
        onUpdateUmkm,
        onCreateUmkm
    }
}