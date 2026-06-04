"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useSession, authClient } from "@/lib/auth-client";

const navLinks = [
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Companies", href: "/companies" },
    { name: "Pricing", href: "/pricing" },
    { name: "Recruiters", href: "/recruiters" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const {
        data: session,
        isLoading
    } = useSession()

    // IMPORTANT: safe user extraction
    const user = session?.user ?? null;
    // console.log(session);

    const handleLogout = async () => {
        try {
            await authClient.signOut();

            setIsOpen(false);

            router.replace("/"); // better than push
            window.location.reload();    // revalidate server components

        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 py-4">

                {/* MAIN NAVBAR */}
                <div className="flex items-center justify-between rounded-2xl bg-content1/80 px-6 py-4 backdrop-blur-xl">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                            <Icon icon="solar:briefcase-business-bold" width="24" height="24" />
                        </div>

                        <h1 className="text-xl font-bold">
                            Hire<span className="text-yellow-400">Loop</span>
                        </h1>
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden lg:flex items-center rounded-full bg-default-100 p-1.5 border">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${pathname === link.href
                                    ? "bg-primary text-white shadow-md"
                                    : "text-foreground/70 hover:bg-white hover:text-black"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* DESKTOP AUTH */}
                    <div className="hidden lg:flex items-center gap-3">

                        {/* 🔥 FIX: handle loading state */}
                        {isLoading ? (
                            <span className="text-sm text-gray-400">Loading...</span>
                        ) : user ? (
                            <>
                                <span className="text-sm text-foreground/70">
                                    {user.name}
                                </span>

                                <Button variant="danger" onPress={handleLogout}>
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link href="/signup">
                                    <Button variant="light">
                                        Sign up
                                    </Button>
                                </Link>
                            </>
                        )}
                        <Link href="/register">
                            <Button color="primary">
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden rounded-xl p-2 transition hover:bg-default-100"
                    >
                        {isOpen ? (
                            <Icon icon="solar:close-circle-linear" width="28" height="28" />
                        ) : (
                            <Icon icon="solar:hamburger-menu-linear" width="28" height="28" />
                        )}
                    </button>
                </div>

                {/* MOBILE MENU */}
                <div className={`overflow-hidden transition-all duration-300 lg:hidden ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}>

                    <div className="mt-3 rounded-2xl bg-content1 p-4 shadow-lg">

                        {/* LINKS */}
                        <div className="rounded-2xl bg-default-100 p-2 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center justify-between rounded-xl px-4 py-3 font-medium border ${pathname === link.href
                                        ? "bg-primary text-white"
                                        : "text-foreground/80 hover:bg-content1 hover:text-primary"
                                        }`}
                                >
                                    <span>{link.name}</span>
                                    <Icon icon="solar:arrow-right-linear" width={18} height={18} />
                                </Link>
                            ))}
                        </div>

                        {/* MOBILE AUTH */}
                        <div className="mt-4 flex flex-col gap-3">

                            {isLoading ? (
                                <span className="text-sm text-gray-400 text-center">
                                    Loading...
                                </span>
                            ) : user ? (
                                <Button
                                    color="danger"
                                    fullWidth
                                    onPress={handleLogout}
                                >
                                    Logout
                                </Button>
                            ) : (
                                <>
                                    <Link href="/signup" className="w-full">
                                        <Button variant="light" fullWidth>
                                            Sign In
                                        </Button>
                                    </Link>

                                    <Link href="/register" className="w-full">
                                        <Button color="primary" fullWidth>
                                            Get Started
                                        </Button>
                                    </Link>
                                </>
                            )}

                        </div>

                    </div>
                </div>

            </div>
        </header>
    );
}