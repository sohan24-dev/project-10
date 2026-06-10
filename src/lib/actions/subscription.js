"use server"

import { serverMutation } from "../core/server";

export const createSubscription = async (subscriptionInfo) => {
    // Implementation for creating a subscription
    return serverMutation('/api/subscriptions', subscriptionInfo);
};