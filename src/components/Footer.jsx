"use client";

import Link from "next/link";
import { Icon } from "@gravity-ui/uikit";
import {
    LogoFacebook,
    LogoLinkedin,
    LogoGithub
} from "@gravity-ui/icons";

export default function Footer() {
    return (
        <footer className="bg-[#05060a] text-gray-400 pt-16 pb-8 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">

                    {/* Logo + Description */}
                    <div>
                        <h1 className="text-2xl font-bold text-white">
                            hire<span className="text-blue-500">loop</span>
                        </h1>

                        <p className="mt-4 text-sm leading-relaxed text-gray-500">
                            The AI-native career platform. Built for people who take their
                            work seriously.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-5">
                            <Link
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-md bg-white/5 hover:bg-white/10 transition"
                            >
                                <Icon data={LogoFacebook} size={16} />
                            </Link>

                            <Link
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-md bg-white/5 hover:bg-white/10 transition"
                            >
                                <Icon data={LogoGithub} size={16} />
                            </Link>

                            <Link
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-md bg-white/5 hover:bg-white/10 transition"
                            >
                                <Icon data={LogoLinkedin} size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-white">Job discovery</Link></li>
                            <li><Link href="#" className="hover:text-white">Worker AI</Link></li>
                            <li><Link href="#" className="hover:text-white">Companies</Link></li>
                            <li><Link href="#" className="hover:text-white">Salary data</Link></li>
                        </ul>
                    </div>

                    {/* Navigations */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Navigations</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-white">Help center</Link></li>
                            <li><Link href="#" className="hover:text-white">Career library</Link></li>
                            <li><Link href="#" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-white">Brand Guideline</Link></li>
                            <li><Link href="#" className="hover:text-white">Newsroom</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 text-xs text-gray-500">

                    <p>Copyright 2024 — Programming Hero</p>

                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white">
                            Terms & Policy
                        </Link>
                        <Link href="#" className="hover:text-white">
                            Privacy Guideline
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}