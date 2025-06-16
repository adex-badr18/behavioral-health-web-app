import { objectToFormData } from "../pages/utils";
import api from "./axiosInstance";

// Fetch a list of patients (Paginated)
export const fetchPatients = async (page = 1, searchParams) => {
    const token = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.get(`/patients?page=${page}`, {
        params: searchParams,
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Search for patients based on search terms
export const searchPatients = async (searchParams, payload) => {
    const token = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.post(`/patients/search`, payload, {
        params: searchParams,
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

// Fetch a patient by ID
export const getPatientById = async (patientId) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.get(`/patients/${patientId}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
        },
    });
    return response.data;
};

// Fetch a patient by ID
export const getRegInfoById = async (patientId) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.get(`/patients/forms/register/${patientId}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token || "no-token"}`,
        },
    });
    return response.data;
};

// Fetch a basic patient info by ID
export const fetchBasicPatientById = async (patientId) => {
    const response = await api.get(`/patients/validate/${patientId}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response?.data;
};

// Create patient record
export const createPatient = async (patientData) => {
    const options = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await api.post(
        "/patients/forms/register",
        patientData,
        options
    );

    return response;
};

// Create register a new patient
export const generatePatientId = async () => {
    const options = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await api.get("/patients/register/id", options);

    return response;
};

// Update a patient by uploading their registration form
export const uploadPatientRegPdf = async (patientId, payload) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.put(
        `/patients/forms/register/${patientId}/update`,
        objectToFormData(payload),
        {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${user?.token}`,
            },
        }
    );
    return response.data;
};

// Update Patient's registration info
export const updateRegInfo = async ({ payload, endpoint }) => {
    const user = JSON.parse(sessionStorage.getItem("user"));

    const options = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
        },
    };

    const response = await api.put(
        endpoint,
        objectToFormData(payload),
        options
    );

    return response.data;
};

// Update Intake form
export const updateIntake = async ({ payload, endpoint }) => {
    const user = JSON.parse(sessionStorage.getItem("user"));

    const options = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
        },
    };

    const response = await api.put(
        endpoint,
        objectToFormData(payload),
        options
    );

    return response.data;
};

// Patient File Upload
export const uploadFile = async (payload) => {
    const options = {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    };

    const response = await api.post("/file/upload", payload, options);

    return response;
};

// Create patient form
export const createForm = async ({ payload, endpoint }) => {
    console.log(endpoint);
    const options = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await api.post(endpoint, payload, options);

    return response.data;
};

// Create patient consent form
export const createConsentForm = async ({ payload, endpoint, options }) => {
    const response = await api.post(endpoint, payload, options);
    return response.data;
};

// Enrol patient in a program
export const enrolProgram = async (patientId, programType) => {
    const { token } = JSON.parse(sessionStorage.getItem("user"));
    const response = await api.get(
        `/patients/${patientId}/programs/enrol/${programType}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response?.data;
};
