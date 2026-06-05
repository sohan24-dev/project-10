'use server'

const API_URL = process.env.NEXT_PUBLIC_BETTER_URL;
export const createJob = async (data) => {
    const res = await fetch(`${API_URL}/api/jobs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return res.json();
};