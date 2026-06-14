
import CompanyTable from '@/components/dashbaord/CompanyTable ';
import { getCompanies } from '@/lib/api/companies';
import React from 'react';

const AdminCompaniesPage = async () => {
    const companies = await getCompanies();

    return (
        <div className="min-h-screen bg-[#0d0d0f] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-neutral-100">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* Header */}
                <div className="space-y-1">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-neutral-200">
                        Companies for review
                    </h2>

                    <p className="text-xs sm:text-sm text-neutral-500">
                        Total items submitted: {companies.length}
                    </p>
                </div>

                {/* Table Wrapper for responsiveness */}
                <div className="w-full overflow-x-auto rounded-lg border border-neutral-800">
                    <CompanyTable companies={companies} />
                </div>

            </div>
        </div>
    );
};

export default AdminCompaniesPage;