import axios from "axios";

const BASE_URL = process.env.PORT;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2VhNjMwNGNlNzJmMThmOTU4MjcyYiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzU3MDIxNTIsImV4cCI6MTYzNTk2MTM1Mn0.PXSA_28BvGH2bFSQv3o1Q3SZ5qKDd57sc7x5fr8PbBk";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
});
