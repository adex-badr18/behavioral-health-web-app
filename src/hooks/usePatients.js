import {
    useQuery,
    useMutation,
    useQueryClient,
    keepPreviousData,
} from "@tanstack/react-query";
import {
    fetchPatients,
    fetchBasicPatientById,
    createPatient,
    uploadPatientRegPdf,
    searchPatients,
    uploadFile,
    createForm,
    getPatientById,
    getRegInfoById,
    generatePatientId,
    updateRegInfo,
    createConsentForm,
    enrolProgram,
    updateIntake,
} from "../api/patientApi";
import { useToast } from "../components/ToastContext";
import { useNavigate } from "react-router-dom";

// Fetch list of patients
export const useFetchPatients = (page = 1, searchParams) => {
    return useQuery({
        queryKey: ["patients", page, searchParams],
        queryFn: () => fetchPatients(page, searchParams),
        placeholderData: keepPreviousData,
        staleTime: 5 * 1000 * 60, // Cache data for 5 minutes
        retry: 2, // retry failed request twice
        enabled: Object.keys(searchParams).length > 0, // // Runs query only when searchTerm exists
    });
};

// Search patients based on search terms
export const useSearchPatients = (searchParams, payload) => {
    return useQuery({
        queryKey: ["patients", searchParams],
        queryFn: () => searchPatients(searchParams, payload),
        staleTime: 5 * 1000 * 60, // Cache data for 5 minutes
        retry: 2, // retry failed request twice
        enabled: false,
        // enabled: Object.keys(searchParams).length > 0, // Runs query only when searchTerm exists
    });
};

// Fetch a patient by ID
export const useGetPatient = (patientId) => {
    return useQuery({
        queryKey: ["patients", patientId],
        queryFn: () => getPatientById(patientId),
        enabled: !!patientId, // Ensures the query runs only when id is avaialble
    });
};

// Fetch a patient by ID
export const useGetRegInfo = (patientId) => {
    return useQuery({
        queryKey: ["registrationInfo", patientId],
        queryFn: () => getRegInfoById(patientId),
        enabled: !!patientId, // Ensures the query runs only when id is avaialble
    });
};

// Fetch a basic patient by ID
export const useFetchBasicPatient = (id) => {
    return useQuery({
        queryKey: ["patients", id],
        queryFn: () => fetchBasicPatientById(id),
        enabled: !!id, // Ensures the query runs only when id is avaialble
        retry: 2
    });
};

// Enrol Patient in a program
export const useEnrolProgram = (patientId, programType) => {
    return useQuery({
        queryKey: ["program", patientId, programType],
        queryFn: () => enrolProgram(patientId, programType),
        enabled: !!patientId, // Ensures the query runs only when patientId is avaialble
        retry: 2
    });
};

// Upload patient file
export const useGeneratePatientId = ({
    handleFormChange,
    section,
    field,
    showToast,
}) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: generatePatientId,
        onSuccess: (response) => {
            handleFormChange(section, field, response.data.patientId);
            queryClient.invalidateQueries(["patients"]);
            console.log(response);
        },
        onError: (error) => {
            // console.error("Error creating patient", error);
            showToast({
                message:
                    `${error?.message}` ||
                    "An error occurred. Please try again.",
                type: "error",
                duration: 5000,
            });
        },
    });
};

// Create a new patient record (Optimistic UI Update)
export const useCreatePatient = ({ openModal, showToast }) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createPatient,
        onSuccess: (response) => {
            openModal(response.data);
            queryClient.invalidateQueries(["patients"]);
        },
        onError: (error) => {
            showToast({
                message:
                    `${error?.message}` ||
                    error ||
                    "An error occurred. Please try again.",
                type: "error",
                duration: 5000,
            });
        },
    });
};

// Update a patient
export const useUpdatePatient = () => {
    const queryClient = useQueryClient();
    const { showToast } = useToast();
    const navigate = useNavigate()

    return useMutation({
        mutationFn: ({ patientId, payload, endpoint }) =>
            updateRegInfo({payload, endpoint}),
        onMutate: async ({ patientId, payload }) => {
            await queryClient.cancelQueries(["patient", patientId]);

            const previousPatient = queryClient.getQueryData(["patient", patientId]);

            queryClient.setQueryData(["patient", patientId], (prev) => ({
                ...prev,
                ...payload,
            }));

            return { previousPatient };
        },
        onError: (error, variables, context) => {
            const errorMessage =
                (typeof error === "string" && error) ||
                error?.message ||
                "An unexpected error occurred. Please try again";

            showToast({
                message: errorMessage,
                type: "error",
                duration: 5000,
            });

            if (context?.previousPatient) {
                queryClient.setQueryData(
                    ["patient", variables.patientId],
                    context.previousPatient
                );
            }
        },
        onSuccess: (data, variables, context) => {
            console.log("OnSuccess data:", data);
            console.log("OnSuccess variables:", variables);
            console.log("OnSuccess context:", context);

            showToast({
                message: "Patient information updated successfully!",
                type: "success",
                duration: 5000,
            });
            queryClient.invalidateQueries(["patients"]); // Refresh patient list
            queryClient.invalidateQueries([
                "patient",
                data?.patientId,
            ]); // Refresh updated patient

            // Navigate to patient details page after 5secs
            // setTimeout(() => {
            //     navigate(`/admin/patients/${data?.patientId}`)
            // }, 5500);
        },
    });
};

// Update intake
export const useUpdateIntake = () => {
    const queryClient = useQueryClient();
    const { showToast } = useToast();
    const navigate = useNavigate()

    return useMutation({
        mutationFn: ({ patientId, payload, endpoint }) =>
            updateIntake({payload, endpoint}),
        onMutate: async ({ patientId, payload }) => {
            await queryClient.cancelQueries(["intake", patientId]);

            const previousIntake = queryClient.getQueryData(["intake", patientId]);

            queryClient.setQueryData(["intake", patientId], (prev) => ({
                ...prev,
                ...payload,
            }));

            return { previousIntake };
        },
        onError: (error, variables, context) => {
            const errorMessage =
                (typeof error === "string" && error) ||
                error?.message ||
                "An unexpected error occurred. Please try again";

            showToast({
                message: errorMessage,
                type: "error",
                duration: 5000,
            });

            if (context?.previousIntake) {
                queryClient.setQueryData(
                    ["intake", variables.patientId],
                    context.previousIntake
                );
            }
        },
        onSuccess: (data, variables, context) => {
            console.log("OnSuccess data:", data);
            console.log("OnSuccess variables:", variables);
            console.log("OnSuccess context:", context);

            showToast({
                message: "Intake form updated successfully!",
                type: "success",
                duration: 5000,
            });
            queryClient.invalidateQueries(["intake"]); // Refresh patient list
            queryClient.invalidateQueries([
                "intake",
                data?.patientId,
            ]); // Refresh updated patient

            // Navigate to patient details page after 5secs
            // setTimeout(() => {
            //     navigate(`/admin/patients/${data?.patientId}`)
            // }, 5500);
        },
    });
};

// Update a patient info by uploading their pdf form
export const useUploadPatientRegPdf = () => {
    const queryClient = useQueryClient();
    const { showToast } = useToast();
    const navigate = useNavigate()

    return useMutation({
        mutationFn: ({ patientId, payload }) =>
            uploadPatientRegPdf(patientId, payload),
        onMutate: async ({ patientId, payload }) => {
            await queryClient.cancelQueries(["patient", patientId]);

            const previousPatient = queryClient.getQueryData(["patient", patientId]);

            queryClient.setQueryData(["patient", patientId], (prev) => ({
                ...prev,
                ...payload,
            }));

            return { previousPatient };
        },
        onError: (error, variables, context) => {
            const errorMessage =
                (typeof error === "string" && error) ||
                error?.message ||
                "An unexpected error occurred. Please try again";

            showToast({
                message: errorMessage,
                type: "error",
                duration: 5000,
            });

            if (context?.previousPatient) {
                queryClient.setQueryData(
                    ["patient", variables.patientId],
                    context.previousPatient
                );
            }
        },
        onSuccess: (data, variables, context) => {
            console.log("OnSuccess data:", data);
            console.log("OnSuccess variables:", variables);
            console.log("OnSuccess context:", context);

            showToast({
                message: "Patient information updated successfully!",
                type: "success",
                duration: 5000,
            });
            queryClient.invalidateQueries(["patients"]); // Refresh patient list
            queryClient.invalidateQueries([
                "patient",
                data?.patientId,
            ]); // Refresh updated patient

            // Navigate to patient details page after 5secs
            setTimeout(() => {
                navigate(`/admin/patients/${data?.patientId}`)
            }, 5500);
        },
    });
};

// Upload patient file
export const useUploadFile = ({
    handleFormChange,
    section,
    field,
    showToast,
}) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: uploadFile,
        onSuccess: (response) => {
            handleFormChange(section, field, response.data.fileUrl);
            queryClient.invalidateQueries(["patients"]);
        },
        onError: (error) => {
            showToast({
                message:
                    `${error?.message}` ||
                    "An error occurred. Please try again.",
                type: "error",
                duration: 5000,
            });
        },
    });
};

// Create patient form
export const useCreateForm = (options = {}) => {
    return useMutation({
        mutationFn: createForm,
        ...options,
    });
};

// Create patient form
export const useCreateConsentForm = (options = {}) => {
    return useMutation({
        mutationFn: createConsentForm,
        ...options,
    });
};
