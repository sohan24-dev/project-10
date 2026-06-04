"use client";

import React from "react";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { Radio, RadioGroup } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function SignUpPage() {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const role = formData.get("plan-orientation");
        console.log(role);

        try {
            const { data, error } = await authClient.signUp.email({
                email,
                password,
                name,
                role,
                callbackURL: "/"
            });

            if (error) {
                alert(error.message);
                return;
            }

            // console.log(data);
            alert("Account created successfully!");
        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        }
    };

    return (
        <div className=" flex items-center justify-center  border">
            <Form
                className="w-full  max-w-96 rounded-2xl border  bg-neutral-900 p-6 sm:p-8 shadow-xl px-5 py-3 my-6"
                onSubmit={onSubmit}
            >
                <Fieldset>
                    <Fieldset.Legend className="text-2xl font-bold text-white">
                        Create Account
                    </Fieldset.Legend>

                    <Description className="mt-2 text-neutral-400">
                        Join HireLoop and start your journey today.
                    </Description>

                    <FieldGroup className="mt-6 space-y-5">
                        {/* Name */}
                        <TextField
                            isRequired
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Name</Label>
                            <Input placeholder="John Doe" />
                            <FieldError />
                        </TextField>

                        {/* Email */}
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                        >
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>

                        {/* Password */}
                        <TextField
                            isRequired
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 6) {
                                    return "Password must be at least 6 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" />
                            <FieldError />
                        </TextField>


                        <div className="flex flex-col gap-4">
                            <Label>Subscription plan</Label>
                            <RadioGroup defaultValue="seeker" name="plan-orientation" orientation="horizontal">
                                <Radio value="seeker">
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>
                                    <Radio.Content>
                                        <Label>Job Seeker</Label>
                                    </Radio.Content>
                                </Radio>
                                <Radio value="recruiter">
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>
                                    <Radio.Content>
                                        <Label>Recruiter</Label>
                                    </Radio.Content>
                                </Radio>

                            </RadioGroup>
                        </div>
                    </FieldGroup>

                    <Fieldset.Actions className="mt-6">
                        <Button type="submit" color="primary" className="w-full">
                            Create Account
                        </Button>


                    </Fieldset.Actions>
                    {/* Already have account */}
                    <p className="mt-4 text-center text-sm text-neutral-400">
                        Already have an account?{" "}
                        <Link
                            href="/signin"
                            className="text-blue-500 hover:text-blue-400 transition"
                        >
                            Sign in
                        </Link>
                    </p>
                </Fieldset>
            </Form>
        </div>
    );
}