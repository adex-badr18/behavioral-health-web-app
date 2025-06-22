import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./pages/admin/components/auth/AuthProvider.jsx";
import { ToastProvider } from "./components/ToastContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useToast } from "./components/ToastContext.jsx";
import { useAuth } from "./pages/admin/components/auth/AuthProvider.jsx";
import { setupAxiosInterceptor } from "./api/axiosInstance.js";

const queryClient = new QueryClient();

// Setup a React component to inject useAuth and useToast into Axios interceptor
const AxiosInterceptorInjector = () => {
    const { logout } = useAuth();
    const { showToast } = useToast();

    setupAxiosInterceptor({ logout, showToast });
};

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <ToastProvider>
                <QueryClientProvider client={queryClient}>
                    <AxiosInterceptorInjector />
                    <App />
                </QueryClientProvider>
            </ToastProvider>
        </AuthProvider>
    </StrictMode>
);
