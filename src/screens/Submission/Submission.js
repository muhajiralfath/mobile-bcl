import { useDispatch } from "react-redux";
import { setIsLoading } from "../../store/Loading/LoadingSlice";

export const Submission = (service) => {
    const { createSubmission, getSubmissionByDebtorId } = service();
    const dispatch = useDispatch();

    const getSubmission = async (debtorId) => {
        try {
            dispatch(setIsLoading(true));
            const dataSubmis = await getSubmissionByDebtorId(debtorId);
            return dataSubmis;
        } catch (err) {
            console.log("getDebtor", err);
        } finally {
            dispatch(setIsLoading(false));
        }
    };

    return { getSubmission };
};
