import axios from "axios";
import { useToast } from "../components/ToastContext";
import { useAuth } from "../pages/admin/components/auth/AuthProvider";

let logoutFn = null
let showToastFn = null

export const setupAxiosInterceptor = ({logout, showToast}) => {
    logoutFn = logout
    showToastFn = showToast
}

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

        if (error?.status === 401 || error?.response?.status === 401) {
            showToastFn({
                message:
                    `Session expired. Redirecting to login...`,
                type: "error",
                duration: 5000,
            })

            setTimeout(() => {
                logoutFn()
            }, 6000);
            
            return Promise.reject({
                status: error?.response?.data?.status,
                statusCode: error.status || error?.response?.status,
                message: error.response.data?.message || "Unauthorized",
            });
        }

        // if (error?.message === "Network Error") {
        //     showToastFn({
        //         message:
        //             `Session expired. Redirecting to login...`,
        //         type: "error",
        //         duration: 5000,
        //     })

        //     setTimeout(() => {
        //         logoutFn()
        //     }, 5500);
            
        //     return Promise.reject({
        //         status: error?.response?.data?.status,
        //         // statusCode: status,
        //         message: error.response.data?.message || "Unauthorized",
        //     });
        // }

        // Case 1: Server responded with a status outside 2xx
        if (error.response) {
            const status = error?.response?.status || "";

            // Unauthorized
            if (status === 401) {
                return Promise.reject({
                    status: error.response?.data?.status,
                    statusCode: status,
                    message: error.response?.data?.message || "Unauthorized",
                });
            }

            // Other server errors
            return Promise.reject({
                status: error.response?.data?.status,
                statusCode: status,
                message: error.response.data?.message || "Server Error",
            });
        }

        // Case 2: No response from server
        else if (error.request && !error.response) {
            console.log("Axios Instance Error (No response):", error);
            return Promise.reject({
                status: "NO_RESPONSE",
                message:
                    error?.message ||
                    "No response from server. Please check your network.",
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
