import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./pages/admin/components/auth/AuthProvider.jsx";
import { ToastProvider } from "./components/ToastContext.jsx";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <ToastProvider>
                <App />
            </ToastProvider>
        </AuthProvider>
    </StrictMode>
);
