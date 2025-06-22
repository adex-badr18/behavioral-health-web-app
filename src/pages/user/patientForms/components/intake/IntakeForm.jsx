import { useState } from "react";
import MultiStepForm from "../../../../../components/MultiStepForm";
import PdfPreview from "../../../../../components/PdfPreview";
import PdfDoc from "./PdfDoc";
import VerificationStep from "../../../../../components/VerificationStep";
import PsychHistory from "./PsychHistory";
import AlcoholHistory from "./AlcoholHistory";
import PsychoSocial from "./PsychoSocial";
import OtherHistory from "./OtherHistory";
import IntroForm from "./IntroForm";
import Preview from "./Preview";
import { useParams } from "react-router-dom";

import { useToast } from "../../../../../components/ToastContext";
import { useCreateForm } from "../../../../../hooks/usePatients";
import { objectToFormData, convertToBoolean, formatToYYYYMMDD } from "../../../../utils";

const IntakeForm = () => {
    const { id } = useParams();
    const { showToast } = useToast();
    const [successModalData, setSuccessModalData] = useState({});
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const { mutate, isPending, error, data } = useCreateForm({
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
        intro: {
            doYouShareHome: "Yes",
            complaints: "Depression",
            sexPreference: "Bisexual",
            onProbation: "Yes",
            inLawsuit: "Yes",
            childrenCount: 0,
            marriageCount: 1,
            pastMarriagesInfo: [
                {
                    marriageDescription: "First wedding",
                    duration: "2 years",
                    divorceReason: "Misunderstanding",
                },
            ],
        },
        psychHistory: {
            pastProviders: [
                {
                    provider: "Ameri Health",
                    appointmentDate: "2025-06-15",
                },
            ],
            currentMedications: [
                {
                    medication: "Paracetamol",
                    usageInstruction: "Twice daily",
                    conditionTreated: "Headache",
                    prescription: "For 3 days",
                    category: "",
                },
            ],
            hasAttemptedSuicide: "No",
            isPsychHospitalized: "Yes",
            pastMedications: [
                {
                    medication: "Paracetamol",
                    usageInstruction: "Twice daily",
                    conditionTreated: "Headache",
                    prescription: "For 3 days",
                    category: "",
                },
            ],
        },
        alcoholDrugHistory: {
            alcohol: {
                usageFrequency: "Rarely",
                brand: "Brandy",
                lastUsed: "2 weeks ago",
                drinkGuiltCheck:
                    "I have tried to cut back on my drinking. I feel guilty about my drinking.",
            },
            substanceUsages: [
                {
                    substanceName: "Marijuana",
                    ageAtFirstUse: "21",
                    qtyUse: "3 bottles",
                    usageFrequency: "Often",
                    lastUsed: "last month",
                },
            ],
            weeklyAverageSpending: 0,
            pastTreatmentInfo: [
                {
                    facility: "Facility",
                    date: "2025-06-15",
                    drugTreated: "depression",
                    isTreatmentCompleted: true,
                },
            ],
            isPastStepRecoveryParticipant: "Yes",
            isCurrentStepRecoveryParticipant: "Yes",
        },
        psychosocialHistory: {
            birthPlace: "Osborn",
            growthPlace: "Chicago",
            raisedBy: "Parent",
            siblingsCount: 2,
            childhoodInfo: "Lively with chaos",
            wasPhysicallyAbused: "No",
            wasEmotionallyAbused: "No",
            wasSexuallyAbused: "No",
        },
        otherHistory: {
            hasMedicalDisability: "No",
            pastMedicalHistory: [],
            pastSurgicalHistory: [],
            allergies: ["Cattarh", "Eye Itches"],
            relativesWithMentalIllnessOrSuicide: [],
            otherUsefulInfo: "None",
        },
    });

    console.log(formData);

    // Handle form element change
    const handleFormElementChange = (section, fieldPath, value) => {
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
    };

    const submitHandler = async (e) => {
        // prepare data
        const pastMarriages = formData.intro.pastMarriagesInfo.map(
            (marriage) => {
                const marriageData = {
                    id: "",
                    marriageDescription: marriage["marriageDescription"],
                    duration: marriage["duration"],
                    divorceReason: marriage["divorceReason"],
                };

                return marriageData;
            }
        );

        const pastProviders = formData.psychHistory.pastProviders.map(
            (pastProvider) => ({
                id: "",
                provider: pastProvider["provider"],
                appointmentDate: formatToYYYYMMDD(pastProvider["appointmentDate"]),
            })
        );

        const currentMedications = formData.psychHistory.currentMedications.map(
            (medication) => ({
                id: "",
                medication: medication["medication"],
                usageInstruction: medication["usageInstruction"],
                conditionTreated: medication["conditionTreated"],
                prescription: medication["prescription"],
                category: "",
            })
        );

        const pastMedications = formData.psychHistory.pastMedications.map(
            (medication) => ({
                id: "",
                medication: medication["medication"],
                usageInstruction: medication["usageInstruction"],
                conditionTreated: medication["conditionTreated"],
                prescription: medication["prescription"],
                category: "",
            })
        );

        const substanceUsages = formData.alcoholDrugHistory.substanceUsages.map(
            (substance) => ({
                id: "",
                substanceName: substance["substanceName"],
                ageAtFirstUse: substance["ageAtFirstUse"],
                qtyUse: substance["qtyUse"],
                usageFrequency: substance["usageFrequency"],
                lastUsed: substance["lastUsed"],
            })
        );

        const pastTreatments =
            formData.alcoholDrugHistory.pastTreatmentInfo.map((treatment) => ({
                id: "",
                facility: treatment["facility"],
                date: treatment["date"],
                drugTreated: treatment["drugTreated"],
                isTreatmentCompleted: convertToBoolean(
                    treatment["isTreatmentCompleted"]
                ),
            }));

        const relativesWithIllness =
            formData.otherHistory.relativesWithMentalIllnessOrSuicide.map(
                (relative) => ({
                    id: "",
                    relative: relative["relative"],
                    illness: relative["illness"],
                })
            );

        const data = {
            id: "",
            patientId: formData.verification.patientId,
            doYouShareHome: formData.intro.doYouShareHome,
            complaints: formData.intro.complaints,
            sexPreference: formData.intro.sexPreference,
            onProbation: formData.intro.onProbation,
            inLawsuit: formData.intro.inLawsuit,
            childrenCount: formData.intro.childrenCount,
            marriageCount: formData.intro.marriageCount,
            pastMarriagesInfo: [...pastMarriages],
            pastProviders: [...pastProviders],
            currentMedications: [...currentMedications],
            hasAttemptedSuicide: true,
            isPsychHospitalized: true,
            pastMedications: [...pastMedications],
            alcoholDrugHistory: {
                id: "",
                usageFrequency:
                    formData.alcoholDrugHistory.alcohol.usageFrequency,
                brand: formData.alcoholDrugHistory.alcohol.brand,
                lastUsed: formData.alcoholDrugHistory.alcohol.lastUsed,
                drinkGuiltCheck:
                    formData.alcoholDrugHistory.alcohol.drinkGuiltCheck,
                substanceUsages: [...substanceUsages],
                weeklyAverageSpending:
                    formData.alcoholDrugHistory.weeklyAverageSpending,
                pastTreatmentInfo: [...pastTreatments],
                isPastStepRecoveryParticipant: convertToBoolean(
                    formData.alcoholDrugHistory.isPastStepRecoveryParticipant
                ),
                isCurrentStepRecoveryParticipant: convertToBoolean(
                    formData.alcoholDrugHistory.isCurrentStepRecoveryParticipant
                ),
                birthPlace: formData.psychosocialHistory.birthPlace,
                growthPlace: formData.psychosocialHistory.growthPlace,
                raisedBy: formData.psychosocialHistory.raisedBy,
                siblingsCount: formData.psychosocialHistory.siblingsCount,
                childhoodInfo: formData.psychosocialHistory.childhoodInfo,
                wasPhysicallyAbused: convertToBoolean(
                    formData.psychosocialHistory.wasPhysicallyAbused
                ),
                wasEmotionallyAbused: convertToBoolean(
                    formData.psychosocialHistory.wasEmotionallyAbused
                ),
                wasSexuallyAbused: convertToBoolean(
                    formData.psychosocialHistory.wasSexuallyAbused
                ),
                hasMedicalDisability: convertToBoolean(
                    formData.otherHistory.hasMedicalDisability
                ),
                pastMedicalHistory: [
                    ...formData.otherHistory.pastMedicalHistory,
                ],
                pastSurgicalHistory: [
                    ...formData.otherHistory.pastSurgicalHistory,
                ],
                allergies: [...formData.otherHistory.allergies],
                relativesWithMentalIllnessOrSuicide: [...relativesWithIllness],
                otherUsefulInfo: formData.otherHistory.otherUsefulInfo,
            },
        };

        const payload = objectToFormData(data);

        mutate({ payload, endpoint: "/patients/forms/intake" });
    };

    const isStepValid = (step) => {
        const requiredFields = [
            "firstName",
            "lastName",
            "gender",
            // "dob",
            "maritalStatus",
            "phone",
            "email",
            "address",
            "patientId",
        ];

        if (step === 1) {
            const dataObj = formData.verification;

            for (const key in dataObj) {
                const value = dataObj[key];

                if (!requiredFields.includes(key)) {
                    continue;
                }

                if (value !== null && typeof value === "object") {
                    for (const key in value) {
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

            return true;
        }

        if (!formData.intro.complaints) {
            return false;
        }

        return true;
    };

    const formSteps = {
        steps: [
            "Verification",
            "Intro",
            "Psychiatric",
            "Alcohol/Drug",
            "Psychosocial",
            "Others",
            // "Preview",
        ],
        forms: [
            {
                id: 1,
                name: "Verification",
                component: (
                    <VerificationStep
                        key={1}
                        formData={formData}
                        setFormData={setFormData}
                        id={id}
                    />
                ),
            },
            {
                id: 2,
                name: "Intro",
                component: (
                    <IntroForm
                        key={2}
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 3,
                name: "Psychiatric History",
                component: (
                    <PsychHistory
                        key={3}
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 4,
                name: "Drugs & Alcohol",
                component: (
                    <AlcoholHistory
                        key={4}
                        onChange={handleFormElementChange}
                        formData={formData}
                    />
                ),
            },
            {
                id: 5,
                name: "Psychosocial",
                component: (
                    <PsychoSocial
                        key={5}
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 6,
                name: "Other History",
                component: (
                    <OtherHistory
                        key={6}
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            // {
            //     id: 7,
            //     name: "Preview",
            //     component: <Preview key={7} formData={formData} />,
            // },
            // {
            //     id: 7,
            //     name: "Preview",
            //     component: (
            //         <PdfPreview key={7} Doc={<PdfDoc data={formData} />} />
            //     ),
            // },
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
                isSubmitting={isPending}
            />
        </div>
    );
};

export default IntakeForm;
