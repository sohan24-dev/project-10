import { serverFetch } from "../core/server"

export const plansById = async (planId) => {
    return await serverFetch(`/api/plans?plan_id=${planId}`)

}