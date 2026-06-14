import { protectedFetch } from "../core/server";

export const getApplicationByApplicant = async (applicationId) => {
    return protectedFetch(`/api/applications?applicantId=${applicationId}`);
}   