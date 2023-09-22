import { useDep } from "../context/DependencyContext";

const SubmissionService = () => {
    const { apiClient } = useDep();

    const createSubmission = async (submissionData) => {
        try {
            const result = await apiClient({
                method: "post",
                url: "/api/submissions",
                body: submissionData,
            });
            return result.data;
        } catch (err) {
            console.log("Error Service create submission", err);
            throw err;
        }
    };

    const getSubmissionByDebtorId = async (debtorId) => {
        try {
            const result = await apiClient({
                method: "get",
                url: `/api/submissions/debtor/${debtorId}`,
            });
            return result.data;
        } catch (err) {
            console.log("Error Service get submission by debtorId", err);
            throw err;
        }
    };

    return {
        createSubmission,
        getSubmissionByDebtorId,
    };
};

export default SubmissionService;
