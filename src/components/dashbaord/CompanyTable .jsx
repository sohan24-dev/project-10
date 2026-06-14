'use client';

import React from 'react';
import { Table, Button } from '@heroui/react';
import { CircleArrowDownFill } from '@gravity-ui/icons';
import { updateCompany } from '@/lib/actions/companies';

const CompanyTable = ({ companies }) => {
    const handleApprove = async (id) => {
        const result = await updateCompany(id, { status: 'Approved' });
        if (result.modifiedCount) {
            console.log(`Approved company with ID: ${id}`, result);
        }
    };

    const handleReject = async (id) => {
        const result = await updateCompany(id, { status: 'Rejected' });
        if (result.modifiedCount) {
            console.log(`Rejected company with ID: ${id}`, result);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        });
    };

    const getStatusDetails = (status) => {
        switch (status?.toLowerCase()) {
            case 'approved':
                return { color: 'text-emerald-500', label: 'Approved' };
            case 'rejected':
                return { color: 'text-rose-500', label: 'Rejected' };
            default:
                return { color: 'text-amber-500', label: 'Pending' };
        }
    };

    const getInitials = (name) => {
        return name
            ? name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .substring(0, 2)
                .toUpperCase()
            : 'CO';
    };

    return (
        <div className="w-full bg-[#121214] text-neutral-200 p-4 md:p-6 rounded-lg">
            {/* 1. MOBILE RESPONSIVE VIEW (Cards) */}
            <div className="flex flex-col gap-4 md:hidden">
                {companies.map((company) => {
                    const companyId = company._id?.$oid || company._id;
                    const statusInfo = getStatusDetails(company.status);

                    return (
                        <div
                            key={`mobile-${companyId}`}
                            className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800/60 flex flex-col gap-3"
                        >
                            {/* Header: Name & Status */}
                            <div className="flex justify-between items-start gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 flex items-center justify-center bg-neutral-800 text-neutral-300 rounded font-semibold text-sm tracking-wider shrink-0">
                                        {getInitials(company.name)}
                                    </div>
                                    <span className="font-semibold text-neutral-200 text-base break-all">
                                        {company.name}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5 shrink-0 bg-neutral-900 px-2 py-1 rounded border border-neutral-800">
                                    <CircleArrowDownFill className={`w-2 h-2 ${statusInfo.color}`} />
                                    <span className={`text-xs font-medium ${statusInfo.color}`}>
                                        {statusInfo.label}
                                    </span>
                                </div>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 gap-2 pt-2 text-xs border-t border-neutral-800/50">
                                <div>
                                    <p className="text-neutral-500 font-medium mb-0.5">Recruiter</p>
                                    <p className="text-neutral-300 truncate">
                                        {company.recruiterEmail || `recruiter@${company.name.toLowerCase().replace(/\s+/g, '')}.com`}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-neutral-500 font-medium mb-0.5">Industry</p>
                                    <span className="text-neutral-300 capitalize">{company.industry || 'N/A'}</span>
                                </div>
                                <div>
                                    <p className="text-neutral-500 font-medium mb-0.5">Jobs Count</p>
                                    <span className="text-neutral-300">{company.jobCount || 0}</span>
                                </div>
                                <div>
                                    <p className="text-neutral-500 font-medium mb-0.5">Submitted</p>
                                    <span className="text-neutral-300">
                                        {formatDate(company.createdAt?.$date || company.createdAt)}
                                    </span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2 pt-2 border-t border-neutral-800/50">
                                {company.status?.toLowerCase() !== 'approved' && (
                                    <Button
                                        size="sm"
                                        variant="light"
                                        onClick={() => handleApprove(companyId)}
                                        className="flex-1 bg-emerald-950/30 hover:bg-emerald-900/50 text-emerald-500 border border-emerald-900/60 rounded py-2 text-xs font-medium"
                                    >
                                        Approve
                                    </Button>
                                )}
                                {company.status?.toLowerCase() !== 'rejected' && (
                                    <Button
                                        size="sm"
                                        variant="light"
                                        onClick={() => handleReject(companyId)}
                                        className="flex-1 bg-rose-950/20 hover:bg-rose-900/40 text-rose-500 border border-rose-900/40 rounded py-2 text-xs font-medium"
                                    >
                                        Reject
                                    </Button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* 2. TABLET & DESKTOP VIEW */}
            <div className="hidden md:block overflow-x-auto">
                <Table className="bg-transparent border-none w-full table-auto">
                    <Table.ScrollContainer>
                        <Table.Content aria-label="Company approval management table">
                            <Table.Header>
                                <Table.Column isRowHeader className="text-neutral-400 font-medium pb-4 border-b border-neutral-800 text-left">
                                    Company Name
                                </Table.Column>
                                <Table.Column className="hidden lg:table-cell text-neutral-400 font-medium pb-4 border-b border-neutral-800 text-left">
                                    Recruiter Email
                                </Table.Column>
                                <Table.Column className="text-neutral-400 font-medium pb-4 border-b border-neutral-800 text-left">
                                    Industry
                                </Table.Column>
                                <Table.Column className="text-neutral-400 font-medium pb-4 border-b border-neutral-800 text-left">
                                    Jobs Count
                                </Table.Column>
                                <Table.Column className="text-neutral-400 font-medium pb-4 border-b border-neutral-800 text-left">
                                    Status
                                </Table.Column>
                                <Table.Column className="hidden xl:table-cell text-neutral-400 font-medium pb-4 border-b border-neutral-800 text-left">
                                    Date Submitted
                                </Table.Column>
                                <Table.Column className="text-neutral-400 font-medium pb-4 border-b border-neutral-800 text-right">
                                    Actions
                                </Table.Column>
                            </Table.Header>

                            <Table.Body>
                                {companies.map((company) => {
                                    const companyId = company._id?.$oid || company._id;
                                    const statusInfo = getStatusDetails(company.status);

                                    return (
                                        <Table.Row
                                            key={`desktop-${companyId}`}
                                            className="border-b border-neutral-800/50 hover:bg-neutral-900/30 transition-colors"
                                        >
                                            {/* Company */}
                                            <Table.Cell className="py-4 align-middle">
                                                <div className="flex items-center gap-3 max-w-[200px] xl:max-w-none">
                                                    <div className="w-9 h-9 flex items-center justify-center bg-neutral-800 text-neutral-300 rounded font-semibold text-sm tracking-wider shrink-0">
                                                        {getInitials(company.name)}
                                                    </div>
                                                    <span className="font-medium text-neutral-200 text-sm xl:text-base truncate">
                                                        {company.name}
                                                    </span>
                                                </div>
                                            </Table.Cell>

                                            {/* Email */}
                                            <Table.Cell className="hidden lg:table-cell py-4 align-middle text-neutral-400 max-w-[180px] truncate">
                                                {company.recruiterEmail || `recruiter@${company.name.toLowerCase().replace(/\s+/g, '')}.com`}
                                            </Table.Cell>

                                            {/* Industry */}
                                            <Table.Cell className="py-4 align-middle">
                                                <span className="px-2.5 py-1 bg-neutral-800/60 text-neutral-400 rounded-full text-xs capitalize whitespace-nowrap">
                                                    {company.industry || 'N/A'}
                                                </span>
                                            </Table.Cell>

                                            {/* Job Count */}
                                            <Table.Cell className="py-4 align-middle">
                                                <span className="px-2.5 py-1 bg-neutral-800/60 text-neutral-400 rounded-full text-xs">
                                                    {company.jobCount || 0}
                                                </span>
                                            </Table.Cell>

                                            {/* Status */}
                                            <Table.Cell className="py-4 align-middle">
                                                <div className="flex items-center gap-2 whitespace-nowrap">
                                                    <CircleArrowDownFill className={`w-2 h-2 ${statusInfo.color}`} />
                                                    <span className={`text-sm font-medium ${statusInfo.color}`}>
                                                        {statusInfo.label}
                                                    </span>
                                                </div>
                                            </Table.Cell>

                                            {/* Date */}
                                            <Table.Cell className="hidden xl:table-cell py-4 align-middle text-neutral-400 whitespace-nowrap">
                                                {formatDate(company.createdAt?.$date || company.createdAt)}
                                            </Table.Cell>

                                            {/* Actions */}
                                            <Table.Cell className="py-4 align-middle text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    {company.status?.toLowerCase() !== 'approved' && (
                                                        <Button
                                                            size="sm"
                                                            variant="light"
                                                            onClick={() => handleApprove(companyId)}
                                                            className="bg-emerald-950/30 hover:bg-emerald-900/50 text-emerald-500 border border-emerald-900/60 rounded px-3 py-1 text-xs font-medium transition-all"
                                                        >
                                                            Approve
                                                        </Button>
                                                    )}
                                                    {company.status?.toLowerCase() !== 'rejected' && (
                                                        <Button
                                                            size="sm"
                                                            variant="light"
                                                            onClick={() => handleReject(companyId)}
                                                            className="bg-rose-950/20 hover:bg-rose-900/40 text-rose-500 border border-rose-900/40 rounded px-3 py-1 text-xs font-medium transition-all"
                                                        >
                                                            Reject
                                                        </Button>
                                                    )}
                                                </div>
                                            </Table.Cell>
                                        </Table.Row>
                                    );
                                })}
                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>
            </div>
        </div>
    );
};

export default CompanyTable;