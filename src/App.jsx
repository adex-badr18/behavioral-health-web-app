import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/user/landing/Home";
import Services from "./pages/user/services/Services";
import ServiceDetails, {
    serviceLoader,
} from "./pages/user/services/ServiceDetails";
import ConditionDetails, {conditionLoader} from "./pages/user/landing/components/ConditionDetails";
import ProgramDetails, {
    programLoader,
} from "./pages/user/programs/ProgramDetails";
// import About from "./pages/user/landing/components/About";
import About from "./pages/user/about/About";
import Contact from "./pages/user/contact/Contact";
import Appointment from "./pages/user/appointment/Appointment";
import PatientForms from "./pages/user/patientForms/PatientForms";
import Review from "./pages/user/review/Review";
import PatientForm, {
    patientFormLoader,
} from "./pages/user/patientForms/PatientForm";
import Error from "./components/Error";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Patients from "./pages/admin/patients/Patients";
import Patient from "./pages/admin/patients/Patient";
import Reviews from "./pages/admin/reviews/Reviews";
import ReviewInfo from "./pages/admin/reviews/ReviewInfo";
import Appointments from "./pages/admin/appointments/Appointments";
import AppointmentInfo from "./pages/admin/appointments/AppointmentInfo";
import Settings, { settingsLoader } from "./pages/admin/settings/Settings";
import Login from "./pages/admin/auth/Login";
import AdminAuthLayout from "./pages/admin/components/layout/AdminAuthLayout";
import RootLayout from "./components/layout/RootLayout";
import UpdateRegistration from "./pages/admin/patients/UpdateRegistration";
import Faq from "./pages/user/faq/Faq";

import Programs from "./pages/user/programs/Programs";
import ConsentForm, { consentFormLoader } from "./pages/user/patientForms/ConsentForm";
import IntakeUpdate from "./pages/admin/patients/components/forms/intake/IntakeUpdate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            // User Routes
            {
                element: <Layout />,
                children: [
                    { index: true, element: <Home /> },
                    { path: "/services", element: <Services /> },
                    {
                        path: "/services/:id",
                        element: <ServiceDetails />,
                        loader: serviceLoader,
                    },
                    {
                        path: "/conditions/:id",
                        element: <ConditionDetails />,
                        loader: conditionLoader,
                    },
                    {
                        path: "/programs/:id",
                        element: <ProgramDetails />,
                        loader: programLoader,
                    },
                    {
                        path: "/about",
                        element: <About />,
                    },
                    {
                        path: "/contact",
                        element: <Contact />,
                    },
                    {
                        path: "/programs/:id",
                        element: <ProgramDetails />,
                        loader: programLoader,
                    },
                    {
                        path: "/programs",
                        element: <Programs />,
                    },
                    {
                        path: "/appointment/:id?",
                        element: <Appointment />,
                    },
                    {
                        path: "/forms",
                        element: <PatientForms />,
                    },
                    {
                        path: "/faq",
                        element: <Faq />,
                    },
                    {
                        path: "/forms/:slug/:id?",
                        element: <PatientForm />,
                        loader: patientFormLoader,
                    },
                    {
                        path: "/forms/consent/:slug/:id",
                        element: <ConsentForm />,
                        loader: consentFormLoader,
                    },
                    {
                        path: "/review",
                        element: <Review />,
                    },
                    { path: "*", element: <div>Coming Soon!</div> },
                ],
            },

            // Admin Routes
            {
                path: "admin",
                element: (
                    <div>
                        <Outlet />
                    </div>
                ),
                children: [
                    { index: true, element: <Login /> },
                    {
                        element: <AdminAuthLayout />,
                        children: [
                            { path: "dashboard", element: <Dashboard /> },
                            { path: "patients", element: <Patients /> },
                            {
                                path: "patients/:id",
                                element: <Patient />,
                            },
                            {
                                path: "patients/:id/update",
                                element: <UpdateRegistration />,
                            },
                            {
                                path: "patients/:id/intake/:intakeId/update",
                                element: <IntakeUpdate />,
                            },
                            { path: "reviews", element: <Reviews /> },
                            {
                                path: "reviews/:id",
                                element: <ReviewInfo />,
                            },
                            {
                                path: "appointments",
                                element: <Appointments />,
                            },
                            {
                                path: "appointments/:id",
                                element: <AppointmentInfo />,
                            },
                            {
                                path: "settings",
                                element: <Settings />,
                                loader: settingsLoader,
                            },
                            { path: "*", element: <div>Coming Soon!</div> },
                        ],
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
