import { useState, useEffect } from "react";
import MultiStepForm from "../../../../../components/MultiStepForm";
import VerificationStep from "../../../../../components/VerificationStep";
import Authorizations from "./Authorizations";
import PdfDoc from "./PdfDoc";
import PdfPreview from "../../../../../components/PdfPreview";
import { useToast } from "../../../../../components/ToastContext";
import { useCreateForm, useUploadFile } from "../../../../../hooks/usePatients";
import { objectToFormData, convertToBoolean } from "../../../../utils";
import { pdf } from "@react-pdf/renderer";

const ReleaseReceive = () => {
    const { showToast } = useToast();
    const [successModalData, setSuccessModalData] = useState({});
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const {
        mutateAsync: mutateSubmit,
        isPending: isSubmitting,
        error,
        data,
    } = useCreateForm({
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
    const { mutateAsync: mutateFile, isPending: isUploading } = useUploadFile({
        handleFormChange: handleFormElementChange,
        field: "file",
        section: "upload",
        showToast,
    });
    const [consent, setConsent] = useState(false);
    const [formData, setFormData] = useState({
        verification: {
            patientId: "",
            firstName: "",
            middleName: "",
            lastName: "",
            gender: "",
            dob: "",
            phone: "",
            email: "",
            address: {
                id: null,
                streetName: "",
                city: "",
                state: "",
                zipCode: "",
            },
        },
        consent: {
            patientName: "",
            patientSignature: "",
            patientSignDate: "",
            isMinor: "",
            guardianName: "James Isabella",
            guardianSignature: "",
            patientGuardianRelationship: "Father",
            guardianSignDate: "",
        },
        authorization: {
            parties: [],
        },
        authRight: [],
        disclosurePurpose: [],
        infoTypeToRelease: [],
        upload: { file: "" },
    });

    console.log(formData)

    useEffect(() => {
        if (formData.consent.isMinor.toLowerCase() === "no") {
            setFormData((prev) => ({
                ...prev,
                consent: {
                    ...prev.consent,
                    guardianName: "",
                    guardianSignature: "",
                    patientGuardianRelationship: "",
                    guardianSignDate: "",
                },
            }));
        }
    }, [formData.consent.isMinor]);

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
        // prepare pdf file payload
        const pdfBlob = await pdf(<PdfDoc data={formData} />).toBlob();
        const pdfFile = new File([pdfBlob], "release-receive.pdf", {
            type: "application/pdf",
        });
        const uploadPayload = objectToFormData({
            fileType: "release-receive",
            owner: `${formData.verification.firstName}-${formData.verification.lastName}`,
            file: pdfFile,
        });

        // TODO: Upload pdf file
        const uploadResponse = await mutateFile(uploadPayload);
        const fileUrl = uploadResponse?.data?.fileUrl;

        // Prepare submission payload
        const parties = formData.authorization.parties.map((party) => {
            const modifiedParty = {
                id: "",
                name: party.name,
                phoneNumber: party.phone,
                fax: party.fax,
                isReceive: true,
                address: {
                    id: "",
                    streetName: party.streetAddress,
                    city: party.city,
                    state: party.state,
                    zipCode: party.zipCode,
                },
            };

            return modifiedParty;
        });

        const data = {
            id: 0,
            patientId: formData.verification.patientId,
            isMinor: convertToBoolean(formData.consent.isMinor),
            releaseHealthInfo: true,
            receiveHealthInfo: true,
            exchangeHealthInfo: true,
            party: [...parties],
            disclosurePurpose: [...formData.disclosurePurpose],
            infoTypeToRelease: [formData.infoTypeToRelease],
            guardianName: formData.consent.guardianName,
            relationship: formData.consent.patientGuardianRelationship,
            date: new Date().toLocaleDateString(),
            releaseReceive: "",
            file: fileUrl,
        };

        const payload = objectToFormData(data);

        // TODO: submit form
        await mutateSubmit({
            payload,
            endpoint: "/patients/forms/release-receive",
        });
    };

    const isStepValid = (step) => {
        const requiredFields = [
            "firstName",
            "lastName",
            "gender",
            "dob",
            "maritalStatus",
            "phone",
            "email",
            "address",
            "patientSignature",
            "patientId",
        ];

        if (step === 1) {
            // const dataObj = formData.verification;

            // for (const key in dataObj) {
            //     const value = dataObj[key];

            //     if (!requiredFields.includes(key)) {
            //         continue;
            //     }

            //     if (value !== null && typeof value === "object") {
            //         for (const key in value) {
            //             const nestedValue = value[key];
            //             if (nestedValue === "" || nestedValue === null) {
            //                 return false;
            //             }
            //         }
            //     }

            //     if (value === "" || value === null || value === undefined) {
            //         return false;
            //     }
            // }

            return true;
        }

        if (step === 2) {
            const dataObj = formData.consent;
            const isMinorRequiredFields = [
                "guardianName",
                "guardianSignature",
                "patientGuardianRelationship",
            ];

            if (!formData.consent.isMinor) {
                return false;
            }

            for (const key in dataObj) {
                const value = dataObj[key];

                if (formData.consent.isMinor.toLowerCase() === "yes") {
                    if (!isMinorRequiredFields.includes(key)) {
                        continue;
                    }

                    if (value === "" || value === null || value === undefined) {
                        return false;
                    }
                }
            }

            if (
                !formData.consent.patientSignature ||
                !consent ||
                formData.authorization.parties.length < 1 ||
                formData.authRight.length < 1 ||
                formData.disclosurePurpose.length < 1 ||
                formData.infoTypeToRelease < 1 ||
                !formData.consent.isMinor
            ) {
                return false;
            }

            return true;
        }
    };

    const formSteps = {
        steps: ["Verification", "Authorizations", "Preview"],
        forms: [
            {
                id: 1,
                name: "Verification",
                component: (
                    <VerificationStep
                        formData={formData}
                        setFormData={setFormData}
                    />
                ),
            },
            {
                id: 2,
                name: "Authorizations",
                component: (
                    <Authorizations
                        formData={formData}
                        onChange={handleFormElementChange}
                        setFormData={setFormData}
                        consent={consent}
                        setConsent={setConsent}
                    />
                ),
            },
            {
                id: 3,
                name: "Preview",
                component: <PdfPreview Doc={<PdfDoc data={formData} />} />,
            },
        ],
    };

    return (
        <div>
            <MultiStepForm
                formSize="md"
                isStepValid={isStepValid}
                stepForms={formSteps.forms}
                steps={formSteps.steps}
                submitHandler={submitHandler}
                isSuccessModalOpen={isSuccessModalOpen}
                setIsSuccessModalOpen={setIsSuccessModalOpen}
                successModalData={successModalData}
                isSubmitting={isUploading || isSubmitting}
            />
        </div>
    );
};

export default ReleaseReceive;
