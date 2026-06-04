"use client";

import { StatsGrid } from "@/components/dashboard/DashboardStats";
import { useSession } from "@/lib/auth-client";
import { FileText, Person, Thunderbolt, CircleCheck } from '@gravity-ui/icons';


const RecruiterHomePage = () => {
    const { data: session, isPending } = useSession();
    if (isPending) {
        return <div>Loading...</div>;
    }
    const recruiterStats = [
        { id: 'total-posts', title: 'Total Job Posts', value: '48', icon: FileText },
        { id: 'applicants', title: 'Total Applicants', value: '1,284', icon: Person },
        { id: 'active-jobs', title: 'Active Jobs', value: '18', icon: Thunderbolt },
        { id: 'jobs-closed', title: 'Jobs Closed', value: '32', icon: CircleCheck },
    ];

    const user = session?.user;;
    console.log("User session data:", user);
    return (
        <div>
            <h1>Recruiter home page</h1>
            <StatsGrid statsArray={recruiterStats} />
        </div>
    );
};

export default RecruiterHomePage;