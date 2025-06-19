import axios from "axios";
import api from "./axiosInstance";
import { objectToFormData } from "../pages/utils";

// Fetch a list of reviews (Paginated)
export const fetchReviews = async (page = 1, searchParams) => {
    const response = await api.get(`/reviews?page=${page}`, {
        params: searchParams,
    });
    return response;
};

// Fetch a list of published reviews (Paginated)
export const getPublishedReviews = async () => {
    const response = await api.get(`/reviews/published`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};

// Search for reviews based on search terms
export const searchReviews = async (searchParams) => {
    const response = await api.get(`/reviews/search`, {
        params: searchParams,
    });

    return response;
};

// Fetch a review by ID
export const getReviewById = async (reviewId) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.get(`/reviews/${reviewId}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
        },
    });
    return response.data;
};

// Toggle review status
export const toggleReviewStatus = async ({ endpoint }) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const options = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
        },
    };

    console.log(user)

    const response = await api.put(endpoint, options);

    console.log("Toggle review API function response:", response)

    return response.data;
};

// Create a new review
export const createReview = async (reviewData) => {
    const response = await api.post("/reviews", reviewData, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response;
};

// Update a review by ID
export const updateReview = async (id) => {
    const response = await api.put(`/reviews/${id}`);
    return response;
};
