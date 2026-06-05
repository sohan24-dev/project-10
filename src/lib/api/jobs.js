
const API_URL = process.env.NEXT_PUBLIC_BETTER_URL;

export const getCompanyJobs = async (companyId, status = 'active') => {
    const res = await fetch(`${API_URL}/api/jobs?companyId=${companyId}&status=${status}`);
    return res.json();
}