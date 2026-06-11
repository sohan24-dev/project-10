import { getApplicationByApplicant } from "@/lib/api/application";
import { getJobById } from "@/lib/api/jobs";
import { getUserSession } from "@/lib/core/session";
import Link from "next/link";
import { redirect } from "next/navigation";
import JobApply from "./JobApply";
import { plansById } from "@/lib/api/plans";

const ApplyPage = async ({ params }) => {
    const { id } = await params;
    const user = await getUserSession();
    console.log("Current user session:", user);

    if (!user) {
        redirect(`/auth/signin?callbackUrl=/jobs/${id}/apply`);
    }
    if (user.role !== "seeker") {
        return (
            <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 dark:bg-zinc-950">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-red-600 dark:text-red-400">Access Denied</h1>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">Only job seekers can apply for positions.</p>
                </div>
            </div>
        );
    }

    const applications = await getApplicationByApplicant(user.id);
    console.log(user.plan)

    const plan = await plansById(user?.plan || "seeker_free");
    console.log("Current user plan details:", plan);


    const job = await getJobById(id);

    return (
        <div className="min-h-screen bg-zinc-50 py-12 px-4 dark:bg-zinc-950 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">

                {/* Header section detailing job context */}
                <div className="mb-6 border-b border-zinc-100 pb-4 dark:border-zinc-800">
                    <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                        Applying for: <span className="text-blue-600 dark:text-blue-400">{job?.title || "Position"}</span>
                    </h1>
                </div>

                {/* Usage Tracker Banner */}
                <div className="mb-8 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-800/50">
                    <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                        You have applied so far: <span className="font-bold text-blue-600 dark:text-blue-400">{applications.length}</span> Out of {plan.maximumApplication} this month
                    </h2>
                    <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                        Purchase a premium plan to apply for more jobs.{" "}
                        <Link href="/plans" className="font-medium text-blue-600 underline hover:text-blue-500 dark:text-blue-400">
                            View Plans
                        </Link>
                    </p>
                </div>

                {/* Main Application Form Container */}
                <div className="space-y-6">
                    {applications.length < plan.maximumApplication && (
                        <JobApply applicant={user} job={job} />
                    )}
                </div>

            </div>
        </div>
    );
};

export default ApplyPage;