import { objectToFormData } from "../pages/utils";
import api from "./axiosInstance";

// Create patient form
export const createForm = async (formData, endpoint) => {
    const options = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await api.post(endpoint, formData, options);

    return response.data;
};

// Search for patients based on search terms
export const fetchPaginatedData = async ({
    endpoint,
    pageParam = 1,
    limit = 100,
    payload = {},
}) => {
    // console.log(payload)
    const { token } = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.post(endpoint, objectToFormData(payload), {
        params: { page: pageParam, limit },
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token || "no-token"}`,
        },
    });

    console.log(response.data);

    return response.data;
};

// Admin Login
export const loginUser = async (credentials) => {
    const response = await api.post("/auth/login", credentials, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.data;
};

// Fetch Admin Dashboard information
export const getDashboardData = async () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.get("admin/dashboard", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
        },
    });

    return response.data;
};

// Fetch a patient by ID
export const getAdminProfile = async (id) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.get(`/users/profile/${id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
        },
    });
    return response.data;
};

// Update an admin profile
export const updateAdminProfile = async (userId, payload) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.put(
        `/users/profile/${userId}/update`,
        objectToFormData(payload),
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?.token}`,
            },
        }
    );
    return response.data;
};

// Update an admin password
export const updateAdminPassword = async (userId, payload) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.put(
        `/users/profile/${userId}/password/update`,
        objectToFormData(payload),
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?.token}`,
            },
        }
    );
    return response.data;
};
