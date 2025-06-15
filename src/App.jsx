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

import DepressionAssessmentForm from "./pages/admin/patients/components/forms/DepressionAssessmentForm";
import MoodDisorderAssessmentForm from "./pages/admin/patients/components/forms/MoodDisorderAssessmentForm";
import ScreeningForm from "./pages/admin/patients/components/forms/ScreeningForm";
import IntakeForm from "./pages/admin/patients/components/forms/IntakeForm";
import Programs from "./pages/user/programs/Programs";
import ConsentForm, { consentFormLoader } from "./pages/user/patientForms/ConsentForm";

const DATA = {
    id: 0,
    patientId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    doYouShareHome: "Yes",
    complaints: "Stress",
    sexPreference: "Homosexual",
    onProbation: "No",
    inLawsuit: "No",
    childrenCount: 5,
    marriageCount: 2,
    pastMarriagesInfo: [
        {
            id: 0,
            marriageDescription: "string",
            duration: "string",
            divorceReason: "string",
        },
        {
            id: 0,
            marriageDescription: "string",
            duration: "string",
            divorceReason: "string",
        },
    ],
    pastProviders: [
        {
            id: 0,
            provider: "string",
            appointmentDate: "2025-04-30",
        },
        {
            id: 0,
            provider: "string",
            appointmentDate: "2025-04-30",
        },
    ],
    currentMedications: [
        {
            id: 0,
            medication: "string",
            usageInstruction: "string",
            conditionTreated: "string",
            prescription: "string",
            category: "",
        },
    ],
    hasAttemptedSuicide: true,
    isPsychHospitalized: true,
    pastMedications: [
        {
            id: 0,
            medication: "string",
            usageInstruction: "string",
            conditionTreated: "string",
            prescription: "string",
            category: "",
        },
    ],
    alcoholDrugHistory: {
        id: 0,
        usageFrequency: "Often",
        brand: "string",
        lastUsed: "string",
        drinkGuiltCheck: "I have cut back on my drinking. I feel guilty whenever I take a drink.",
        substanceUsages: [
            {
                id: 0,
                substanceName: "Marijuana",
                ageAtFirstUse: 18,
                qtyUse: "string",
                usageFrequency: "Rarely",
                lastUsed: "string",
            },
            {
                id: 0,
                substanceName: "Cocaine",
                ageAtFirstUse: 34,
                qtyUse: "string",
                usageFrequency: "Often",
                lastUsed: "string",
            },
        ],
        weeklyAverageSpending: "2000",
        pastTreatmentInfo: [
            {
                id: 0,
                facility: "string",
                date: "2025-04-30",
                drugTreated: "string",
                isTreatmentCompleted: true,
            },
            {
                id: 0,
                facility: "string",
                date: "2025-04-30",
                drugTreated: "string",
                isTreatmentCompleted: false,
            },
        ],
        isPastStepRecoveryParticipant: true,
        isCurrentStepRecoveryParticipant: true,
        birthPlace: "Benin",
        growthPlace: "Kano",
        raisedBy: "Parent",
        siblingsCount: 5,
        childhoodInfo: "string",
        wasPhysicallyAbused: true,
        wasEmotionallyAbused: true,
        wasSexuallyAbused: true,
        hasMedicalDisability: true,
        pastMedicalHistory: ["Malaria", "Typhoid"],
        pastSurgicalHistory: ["Appendix", "Hernia"],
        allergies: ["Cattarh", "Hot food"],
        relativesWithMentalIllnessOrSuicide: [
            {
                id: 0,
                relative: "Yetunde",
                illness: "HB+",
            },
            {
                id: 0,
                relative: "Yisa",
                illness: "Bipolar",
            },
        ],
        otherUsefulInfo: "string",
    },
};

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
                        path: "/appointment",
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
