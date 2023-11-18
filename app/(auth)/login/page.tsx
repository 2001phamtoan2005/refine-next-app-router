"use client";

import { AuthPage } from "@refinedev/mui";

export default function Login() {
    return (
        <AuthPage
            formProps={{
                defaultValues: {
                    email: "admin@refine.dev",
                    password: "password",
                },
            }}
        />
    );
}

Login.layout = "auth";
