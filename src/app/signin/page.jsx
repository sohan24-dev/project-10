"use client";

import { Check } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get("email");
        const password = formData.get("password");

        setLoading(true);

        try {
            const res = await authClient.signIn.email({
                email,
                password,
                callbackURL: "/"
            });

            if (res?.error) {
                console.error(res.error);
                return;
            }

            router.push("/");
            router.refresh(); // IMPORTANT → updates session
        } catch (err) {
            console.error("Login failed:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
            <Form
                className="w-full max-w-md flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8"
                onSubmit={onSubmit}
            >
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        Welcome Back
                    </h1>
                    <Description className="text-neutral-400 mt-2">
                        Sign in to your HireLoop account
                    </Description>
                </div>

                <TextField isRequired name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField isRequired name="password" type="password">
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <FieldError />
                </TextField>

                <Button type="submit" className="w-full" isLoading={loading}>
                    <Check />
                    Sign In
                </Button>
            </Form>
        </div>
    );
}