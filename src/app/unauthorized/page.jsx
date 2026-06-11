"use client";
import Link from 'next/link';

const UnauthorizedPage = () => {
    return (
        <div className="bg-slate-50 flex items-center justify-center min-h-screen font-sans">
            <div className="max-w-md w-full text-center p-6">
                {/* Shield / Lock Icon Badge */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 text-red-600 rounded-full mb-6 animate-bounce">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-10 h-10"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                    </svg>
                </div>

                {/* Error Code & Message */}
                <h1 className="text-4xl font-extrabold text-slate-900 mb-2">401</h1>
                <h2 className="text-2xl font-bold text-slate-800 mb-3">Unauthorized Access</h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                    Oops! You don't have permission to view this page. Please log in with the correct credentials or return to the dashboard.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors duration-200 rounded-lg shadow-sm"
                    >
                        Go to Homepage
                    </Link>
                </div>

                {/* Footer Note */}
                <p className="text-xs text-slate-400 mt-12">
                    If you believe this is a mistake, please contact your administrator.
                </p>
            </div>
        </div>
    );
};

export default UnauthorizedPage;