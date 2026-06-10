"use server"

import { serverMutation } from "../core/server";

export const submitApplication = async (data) => {
    const res = await serverMutation('/api/applications', data);
    return res;
}