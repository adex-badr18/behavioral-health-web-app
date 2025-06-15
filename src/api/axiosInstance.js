import axios from "axios";

const API_BASEURL = import.meta.env.VITE_API_BASEURL;

const api = axios.create({
    baseURL: API_BASEURL,
    // headers: {
    //     "Content-Type": "application/json",
    // },
});

// Global error handling interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log("Axios Instance Error", error);

        let errorMessage = "An error occurred. Please try again later.";

        // Case 1: Server responded with a status outside 2xx
        if (error.response) {

            const status = error.response.status;

            // Unauthorized
            if (status === 401) {
                return Promise.reject({
                    status: error.response.data.status,
                    statusCode: status,
                    message: error.response.data?.message || "Unauthorized",
                });
            }

            // Other server errors
            return Promise.reject({
                status: error.response.data.status,
                statusCode: status,
                message: error.response.data?.message || "Server Error",
            });
        }

        // Case 2: No response from server
        if (error.request) {
            return Promise.reject({
                status: "NO_RESPONSE",
                message: "No response from server. Please check your network.",
                original: error,
            });
        }

        // Case 3: Error during request setup
        return Promise.reject({
            status: "REQUEST_SETUP_ERROR",
            message: error?.message || "Request setup error",
            original: error,
        });
    }
);

export default api;
