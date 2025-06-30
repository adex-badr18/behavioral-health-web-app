import { useEffect, useState } from "react";

import MultiStepForm from "../../../../../components/MultiStepForm";
import PersonalStep from "./PersonalStep";
import OtherContactsForm from "./OtherContactsForm";
import InsuranceForm from "./InsuranceForm";
import ConsentForm from "./ConsentForm";
import PdfPreview from "../../../../../components/PdfPreview";
import PdfDoc from "./PdfDoc";

import { useToast } from "../../../../../components/ToastContext";
import {
    useCreatePatient,
    usePatientIdGenerate,
    useUploadFile,
} from "../../../../../hooks/usePatients";
import {
    objectToFormData,
    convertToBoolean,
    formatToYYYYMMDD,
} from "../../../../utils";
import { pdf } from "@react-pdf/renderer";
import Spinner from "../../../../../components/Spinner";
import FetchError from "../../../../../components/FetchError";

const PatientRegistrationForm = () => {
    const { showToast } = useToast();
    const {
        mutateAsync: mutateRegister,
        isPending: isSubmitting,
        error,
        data,
    } = useCreatePatient({
        openModal: openSuccessModal,
        showToast,
    });

    const { mutateAsync: mutateFile, isPending: isUploading } = useUploadFile({
        handleFormChange: handleFormElementChange,
        field: "file",
        section: "upload",
        showToast,
    });

    const [successModalData, setSuccessModalData] = useState({});
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [consents, setConsents] = useState({
        dataAccuracy: true,
        insuranceAuth: true,
        finResponsible: true,
        infoRelease: true,
    });
    const [regForm, setRegForm] = useState({
        identification: {
            id: "",
            patientId: "",
        },
        personal: {
            firstName: "James",
            middleName: "T",
            lastName: "Milner",
            gender: "Male",
            dob: "01/01/1985",
            maritalStatus: "Single",
            socialSecurityNumber: "",
            homePhone: "",
            cellPhone: "09076543212",
            workPhone: "",
            preferredPhone: "",
            appointmentReminderMode: "",
            email: "badru.2gex@gmail.com",
            sendMsgToHomePhone: "",
            sendMsgToRelative: "",
            sendMsgToWork: "",
            sendMsgToCellPhone: "",
            address: {
                id: null,
                streetName: "Wema",
                city: "JohnDey",
                state: "Ospo",
                zipCode: "123456",
            },
            highestEduLevel: "",
            employmentStatus: "",
            employer: "",
            occupation: "",
            religion: "",
            ethnicity: "",
            race: "",
            preferredLanguage: "",
        },
        guarantor: {
            id: null,
            firstName: "Badru",
            lastName: "Ade",
            dob: "",
            relationship: "",
            address: {
                id: null,
                streetName: "",
                city: "",
                state: "",
                zipCode: "",
            },
            phone: "",
            email: "",
            stateIssuedId: "",
            insuranceCard: "",
        },
        parent: {
            id: null,
            firstName: "Badr",
            lastName: "Ade",
            gender: "Male",
            maritalStatus: "Married",
            phone: "124898876",
            email: "adeey@gmail.com",
            familyRole: "Father",
            employmentStatus: "Employed",
            employer: "Acritech Construction",
            occupation: "Engineer",
            address: {
                id: null,
                streetName: "119 Boulevard Street",
                city: "Wembley",
                state: "Osborn",
                zipCode: "123456",
            },
        },
        emergency: {
            id: null,
            firstName: "",
            lastName: "",
            relationship: "",
            address: {
                id: null,
                streetName: "",
                city: "",
                state: "",
                zipCode: "",
            },
            homePhone: "",
            cellPhone: "",
            email: "",
        },
        insurance: {
            paymentMode: "Self Pay",
            primaryInsurance: {
                id: null,
                primary: true,
                policyHolder: {
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    relationship: "",
                    phone: "",
                    dob: "",
                },
                insuranceProvider: {
                    name: "",
                    phone: "",
                    policyId: "",
                    groupNumber: "",
                    authorizationId: "",
                    coPay: "",
                    coverageStartDate: "",
                    coverageEndDate: "",
                    address: {
                        id: null,
                        streetName: "",
                        city: "",
                        state: "",
                        zipCode: "",
                    },
                },
            },
            secondaryInsurance: {
                id: null,
                primary: false,
                policyHolder: {
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    relationship: "",
                    phone: "",
                    dob: "",
                },
                insuranceProvider: {
                    name: "",
                    phone: "",
                    policyId: "",
                    groupNumber: "",
                    authorizationId: "",
                    coverageStartDate: "",
                    coverageEndDate: "",
                    // haveCoordinationBenefits: "",
                    address: {
                        id: null,
                        streetName: "",
                        city: "",
                        state: "",
                        zipCode: "",
                    },
                    coPay: "",
                },
            },
        },
        consent: { signature: "", date: "" },
        upload: { file: "" },
    });

    console.log(regForm);

    // Function to open modal
    function openSuccessModal(data) {
        setSuccessModalData(data);
        setIsSuccessModalOpen(true);
    }

    const {
        data: patientId,
        isLoading: isPatientIdLoading,
        isError: isPatientIdError,
        error: patientIdError,
    } = usePatientIdGenerate();

    // Handle form element change
    function handleFormElementChange(section, fieldPath, value) {
        setRegForm((prev) => {
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

    // console.log(regForm.personal)

    const submitHandler = async () => {
        // prepare pdf file payload
        // const pdfBlob = await pdf(<PdfDoc data={regForm} />).toBlob();
        // const pdfFile = new File([pdfBlob], "registration-form.pdf", {
        //     type: "application/pdf",
        // });
        // const uploadPayload = objectToFormData({
        //     fileType: "registration-form",
        //     owner: `${regForm.personal.firstName}-${regForm.personal.lastName}`,
        //     file: pdfFile,
        // });

        // // TODO: Upload pdf file
        // await mutateFile(uploadPayload);

        // Prepare register payload
        const formattedData = {
            id: regForm.identification.id,
            patientId: regForm.identification.patientId,
            personalInfo: {
                ...regForm.personal,
                dob: formatToYYYYMMDD(regForm.personal.dob),
                sendMsgToHomePhone: convertToBoolean(
                    regForm.personal.sendMsgToHomePhone
                ),
                sendMsgToRelative: convertToBoolean(
                    regForm.personal.sendMsgToRelative
                ),
                sendMsgToWork: convertToBoolean(regForm.personal.sendMsgToWork),
                sendMsgToCellPhone: convertToBoolean(
                    regForm.personal.sendMsgToCellPhone
                ),
            },
            guarantor: {
                ...regForm.guarantor,
                dob: formatToYYYYMMDD(regForm.guarantor.dob),
            },
            parentGuardian: regForm.parent,
            emergency: regForm.emergency,
            paymentStructure: {
                paymentMode: regForm.insurance.paymentMode,
                insurances: [
                    {
                        ...regForm.insurance.primaryInsurance,
                        policyHolder: {
                            ...regForm.insurance.primaryInsurance.policyHolder,
                            dob: formatToYYYYMMDD(
                                regForm.insurance.primaryInsurance.policyHolder
                                    .dob
                            ),
                        },
                        insuranceProvider: {
                            ...regForm.insurance.primaryInsurance
                                .insuranceProvider,
                            coverageStartDate: formatToYYYYMMDD(
                                regForm.insurance.primaryInsurance
                                    .insuranceProvider.coverageStartDate
                            ),
                            coverageEndDate: formatToYYYYMMDD(
                                regForm.insurance.primaryInsurance
                                    .insuranceProvider.coverageEndDate
                            ),
                        },
                    },
                    {
                        ...regForm.insurance.secondaryInsurance,
                        policyHolder: {
                            ...regForm.insurance.secondaryInsurance
                                .policyHolder,
                            dob: formatToYYYYMMDD(
                                regForm.insurance.secondaryInsurance
                                    .policyHolder.dob
                            ),
                        },
                        insuranceProvider: {
                            ...regForm.insurance.secondaryInsurance
                                .insuranceProvider,
                            coverageStartDate: formatToYYYYMMDD(
                                regForm.insurance.secondaryInsurance
                                    .insuranceProvider.coverageStartDate
                            ),
                            coverageEndDate: formatToYYYYMMDD(
                                regForm.insurance.secondaryInsurance
                                    .insuranceProvider.coverageEndDate
                            ),
                        },
                    },
                ],
            },
            date: regForm.consent.date,
            patientRegForm: regForm.upload.file,
        };

        console.log(formattedData);

        const formData = objectToFormData(formattedData);

        // TODO: register patient
        await mutateRegister(formData);
    };

    const isStepValid = (step) => {
        const requiredFields = [
            "firstName",
            "lastName",
            "gender",
            "dob",
            "maritalStatus",
            "cellPhone",
            "email",
            "address",
            "phone",
            "patientId",
        ];

        if (step === 1) {
            const dataObj =
                step === 1 ? regForm.personal : step === 2 && regForm.parent;

            for (const key in dataObj) {
                const value = dataObj[key];

                if (!requiredFields.includes(key)) {
                    continue;
                }

                if (value !== null && typeof value === "object") {
                    for (const key in value) {
                        if (key === "id") {
                            continue;
                        }

                        const nestedValue = value[key];
                        if (nestedValue === "" || nestedValue === null) {
                            return false;
                        }
                    }
                }

                if (value === "" || value === null || value === undefined) {
                    return false;
                }
            }

            if (!regForm.identification.patientId) {
                return false;
            }

            return true;
        }

        if (step === 2) {
            if (regForm.insurance.paymentMode === "Self Pay") {
                return true;
            } else {
                if (
                    !regForm.insurance.primaryInsurance.insuranceProvider
                        .name ||
                    !regForm.insurance.primaryInsurance.insuranceProvider
                        .policyId
                ) {
                    return false;
                }
            }

            return true;
        }

        // if (step === 4) {
        //     for (const key in consents) {
        //         const value = consents[key];

        //         if (!value) {
        //             return false;
        //         }
        //     }

        //     if (!regForm.consent.signature) {
        //         return false;
        //     }

        //     return true;
        // }

        return true;
    };

    const formSteps = {
        steps: [
            "Personal",
            "Insurance",
            // "Other Contacts",
            // "Consent",
            // "Preview",
        ],
        forms: [
            {
                id: 1,
                name: "Personal",
                component: (
                    <PersonalStep
                        key={1}
                        formData={regForm}
                        handleInputChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 2,
                name: "Insurance",
                component: (
                    <InsuranceForm
                        key={3}
                        formData={regForm}
                        handleInputChange={handleFormElementChange}
                    />
                ),
            },
            // {
            //     id: 2,
            //     name: "Other Contacts",
            //     component: (
            //         <OtherContactsForm
            //             key={2}
            //             formData={regForm}
            //             handleInputChange={handleFormElementChange}
            //         />
            //     ),
            // },
            // {
            //     id: 4,
            //     name: "Consent",
            //     component: (
            //         <ConsentForm
            //             key={4}
            //             consentData={consents}
            //             setConsentData={setConsents}
            //             handleInputChange={handleFormElementChange}
            //             formData={regForm}
            //         />
            //     ),
            // },
            // {
            //     id: 5,
            //     name: "Preview",
            //     component: (
            //         <PdfPreview key={5} Doc={<PdfDoc data={regForm} />} />
            //     ),
            // },
        ],
    };

    // Update patientId in state after successful generation
    useEffect(() => {
        if (patientId) {
            handleFormElementChange(
                "identification",
                "patientId",
                patientId?.data?.patientId
            );
        }
    }, [patientId]);

    // Show toast error whenever an error occur
    useEffect(() => {
        if (isPatientIdError) {
            showToast({
                message:
                    patientIdError.message ||
                    `Could not generate Id. Please try again.`,
                type: "error",
                duration: 5000,
            });
        }
    }, [isPatientIdError, patientIdError]);

    if (isPatientIdLoading) {
        return (
            <Spinner
                secondaryText={`Loading...`}
                spinnerSize="w-10 h-10"
                textClass="text-lg text-darkBlue font-semibold"
                borderClass="border-originalGreen"
            />
        );
    }

    if (isPatientIdError) {
        return (
            <FetchError
                message={
                    patientIdError?.message ||
                    "An error occurred while generating your identification code. Please refresh or try again later."
                }
            />
        );
    }

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
                isSubmitting={isSubmitting || isUploading}
            />
        </div>
    );
};

export default PatientRegistrationForm;
