import { useParams } from "react-router-dom";
import {
    useCreateConsentForm,
    useFetchBasicPatient,
} from "../../../../../hooks/usePatients";
import { useState, useEffect } from "react";
import Spinner from "../../../../../components/Spinner";
import PdfPreview from "../../../../../components/PdfPreview";
import { convertToISO } from "../../../../admin/utils";
import MultiStepForm from "../../../../../components/MultiStepForm";
import { useToast } from "../../../../../components/ToastContext";
import FetchError from "../../../../../components/FetchError";
import { pdf } from "@react-pdf/renderer";
import { objectToFormData } from "../../../../utils";
import DuiDwiDoc from "./DuiDwiDoc";
import DuiDwiForm from "./DuiDwiForm";

const DuiDwi = () => {
    const { id } = useParams();
    const { showToast } = useToast();
    const [successModalData, setSuccessModalData] = useState({});
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [hasFormDataInit, setHasFormDataInit] = useState(false);
    const [isPdfGenerating, setIsPdfGenerating] = useState(false);
    const {
        mutate: mutateSubmit,
        isPending: isSubmitting,
        error: mutateError,
        data: mutateData,
    } = useCreateConsentForm({
        onSuccess: (response) => {
            setSuccessModalData(response?.data);
            setIsSuccessModalOpen(true);
        },
        onError: (error) => {
            showToast({
                message: error?.message || `Failed to submit form!`,
                type: "error",
                duration: 5000,
            });
        },
    });

    const {
        data: patient,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useFetchBasicPatient(id || "");

    const [formData, setFormData] = useState({
        basicInfo: {},
        data: {
            signature: "",
            date: "",
        },
    });

    console.log(formData);

    useEffect(() => {
        if (patient && !hasFormDataInit) {
            setFormData((prev) => ({ ...prev, basicInfo: patient }));
            setHasFormDataInit(true);
        }
    }, [patient]);

    useEffect(() => {
        if (isError) {
            const errorMessage =
                (typeof error === "string" && error) ||
                error.message ||
                "An unexpected error occurred. Please try again.";
            showToast({
                message: errorMessage,
                type: "error",
                duration: 5000,
            });
        }
    }, [isError]);

    // Handle form element change
    function handleFormElementChange(section, fieldPath, value) {
        setFormData((prev) => {
            const keys = fieldPath.split(".");

            const updateNestedField = (obj, keys, value) => {
                if (keys.length === 1) {
                    return {
                        ...obj,
                        [keys[0]]: value,
                    };
                }

                return {
                    ...obj,
                    [keys[0]]: updateNestedField(
                        obj[keys[0]],
                        keys.slice(1),
                        value
                    ),
                };
            };

            return {
                ...prev,
                [section]: updateNestedField(prev[section], keys, value),
            };
        });
    }

    const submitHandler = async (e) => {
        setIsPdfGenerating(true);
        // prepare pdf file payload
        const pdfBlob = await pdf(<DuiDwiDoc formData={formData} />).toBlob();
        const pdfFile = new File(
            [pdfBlob],
            `dui-dwi-consent-${formData.basicInfo.patientId}.pdf`,
            {
                type: "application/pdf",
            }
        );

        // Prepare submission payload
        const data = {
            patientId: formData.basicInfo.patientId,
            consentType: "dui-dwi",
            patientSignDate: convertToISO(new Date(formData.data.date)),
            file: pdfFile,
        };

        const payload = objectToFormData(data);

        const options = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        setIsPdfGenerating(false);

        // TODO: submit form
        mutateSubmit({
            payload,
            endpoint: "/patients/consent-form/upload",
            options,
        });
    };

    const isStepValid = (step) => {
        if (step === 1) {
            return true;
        }

        if (step === 2) {
            const dataObj = formData.data;

            for (const key in dataObj) {
                const value = dataObj[key];

                if (value !== null && typeof value === "object") {
                    for (const key in value) {
                        const nestedValue = value[key];
                        if (nestedValue === "" || nestedValue === null) {
                            return false;
                        }
                    }
                }

                if (value !== null && Array.isArray(value)) {
                    if (value.length === 0) {
                        return false;
                    }
                }

                if (value === "" || value === null || value === undefined) {
                    return false;
                }
            }

            return true;
        }
    };

    const formSteps = {
        steps: ["Read Consent", "Fill Form", "Preview & Submit"],
        forms: [
            {
                id: 1,
                name: "Read Consent",
                component: (
                    <PdfPreview key={7} Doc={<DuiDwiDoc showToolbar={false} />} />
                ),
            },
            {
                id: 2,
                name: "Fill Form",
                component: (
                    <DuiDwiForm
                        formData={formData}
                        setFormData={setFormData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 3,
                name: "Preview & Submit",
                component: (
                    <PdfPreview key={7} Doc={<DuiDwiDoc formData={formData} />} />
                ),
            },
        ],
    };

    if (isError) {
        return <FetchError title={error?.error} message={error?.message} />;
    }

    if (isLoading) {
        return (
            <Spinner
                secondaryText={`Loading patient...`}
                spinnerSize="w-10 h-10"
                textClass="text-lg text-darkBlue font-semibold"
                borderClass="border-lightGreen"
            />
        );
    }

    return (
        <div>
            <MultiStepForm
                formSize="lg"
                stepForms={formSteps.forms}
                steps={formSteps.steps}
                submitHandler={submitHandler}
                isStepValid={isStepValid}
                isSuccessModalOpen={isSuccessModalOpen}
                setIsSuccessModalOpen={setIsSuccessModalOpen}
                successModalData={successModalData}
                isSubmitting={isPdfGenerating || isSubmitting}
            />
        </div>
    );
};

export default DuiDwi;
