import React from 'react';
import CompanyProfile from './CompanyProfile';



const CompanyPage = async () => {

    // const user = await getUserSession();
    // const company = await getRecruiterCompany(user?.id);

    return (
        <div>
            <CompanyProfile recruiter={user} recruiterCompany={company}></CompanyProfile>
        </div>
    );
};

export default CompanyPage;