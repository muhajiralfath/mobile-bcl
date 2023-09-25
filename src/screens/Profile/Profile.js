import {setIsLoading} from "../../store/Loading/LoadingSlice";
import {useDispatch} from "react-redux";
import * as FileSystem from "expo-file-system";
import Constant from "../../utils/Constant";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {shareAsync} from "expo-sharing";

export const Profile = (debtorService, umkmService, pictureService) => {
    const {getDebtorByToken, updateDebtor} = debtorService()
    const {createUmkm, updateUmkm, getById, getByDebtorId, getDocument, uploadDocument} = umkmService()
    const {uploadProfilePicture, deleteProfilePicture} = pictureService()
    const dispatch = useDispatch();

    const getDocumentUmkm = async () => {
        try {
            dispatch(setIsLoading(true));

            const url = `${Constant.BASEURL}/api/umkm/download-document`;
            const token = await AsyncStorage.getItem('token');
            const fileUri = `${FileSystem.documentDirectory}/siupDocument.pdf`;

            const res = await FileSystem.downloadAsync(
                url,
                fileUri,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            if (res.status === 200) {
                await shareAsync(res.uri);
            }
        } catch (err) {
            console.log("getDocumentUmkm", err);
        } finally {
            dispatch(setIsLoading(false));
        }
    }

    const uploadDocumentUmkm = async (formData) => {
        try {
            dispatch(setIsLoading(true));
            return await uploadDocument(formData);
        } catch (err) {
            throw err;
        } finally {
            dispatch(setIsLoading(false));
        }
    }

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
        } catch (e) {
            console.log("Profile_onUpdate", e)
        } finally {
            dispatch(setIsLoading(false));
        }
    }
    const getUMKMByDebtorId = async (debtorId) => {
        try {
            dispatch(setIsLoading(true));
            const umkm = await getByDebtorId(debtorId)
            return umkm
        } catch (e) {
            console.log("Profile_getUMKMByDebtorId", e)
        } finally {
            dispatch(setIsLoading(false));
        }
    }
    const onUpdateUmkm = async (dataUmkm) => {
        try {
            dispatch(setIsLoading(true));
            const result = await updateUmkm(dataUmkm)
            return result;
        } catch (e) {
            console.log("Profile_onUpdateUmkm", e)
        } finally {
            dispatch(setIsLoading(false));
        }
    }
    const onCreateUmkm = async (dataUmkm) => {
        try {
            dispatch(setIsLoading(true));
            const result = await createUmkm(dataUmkm)
            return result;
        } catch (e) {
            console.log("Profile_onCreateUmkm", e)
        } finally {
            dispatch(setIsLoading(false));
        }
    }

    const onUploadPicture = async (formData) => {
        try {
            dispatch(setIsLoading(true))
            return await uploadProfilePicture(formData)
        } catch (e) {
            console.log("Profile_onCreateUmkm", e)
        } finally {
            dispatch(setIsLoading(false));
        }
    }

    const onDeletePicture = async (pictureId) => {
        try {
            dispatch(setIsLoading(true))
            return await deleteProfilePicture(pictureId)
        } catch (e) {
            console.log("Profile_onCreateUmkm", e)
        } finally {
            dispatch(setIsLoading(false));
        }
    }

    return {
        getDebtor,
        onUpdate,
        getUMKMByDebtorId,
        onUpdateUmkm,
        getDocumentUmkm,
        uploadDocumentUmkm,
        onCreateUmkm,
        onUploadPicture,
        onDeletePicture,
    }
}