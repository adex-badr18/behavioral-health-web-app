import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useToast } from "../../../../../../components/ToastContext";

import PageTitle from "../../../../components/PageTitle";
import BackButton from "../../../../../../components/BackButton";
import TabPanel from "../../../../components/TabPanel";
import IntroFormUpdate from "./IntroFormUpdate";
import PsychHistoryUpdate from "./PsychHistoryUpdate";
import AlcoholHistoryUpdate from "./AlcoholHistoryUpdate";
import PsychosocialUpdate from "./PsychosocialUpdate";
import OtherHistoryUpdate from "./OtherHistoryUpdate";
import FetchError from "../../../../../../components/FetchError";
import { useGetPatientIntake } from "../../../../../../hooks/usePatients";
import { initialIntakeFormData } from "../../../data";
import Spinner from "../../../../../../components/Spinner";
import { convertBooleanToText } from "../../../../../utils";

const IntakeUpdate = () => {
    const [tabIndex, setTabIndex] = useState(1);
    const { showToast } = useToast();
    const { intakeId } = useParams();
    const {
        data: intakeFormData,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetPatientIntake(intakeId || "");

    const [formData, setFormData] = useState(initialIntakeFormData);

    // TODO: useEffect to update intake state, restructure data as in reg update
    useEffect(() => {
        if (isSuccess && intakeFormData) {
            setFormData((prev) => ({
                ...prev,
                intro: {
                    id: intakeFormData?.id,
                    patientId: intakeFormData?.patientId,
                    doYouShareHome: intakeFormData?.doYouShareHome,
                    complaints: intakeFormData?.complaints,
                    sexPreference: intakeFormData?.sexPreference,
                    onProbation: intakeFormData?.onProbation,
                    inLawsuit: intakeFormData?.inLawsuit,
                    childrenCount: intakeFormData?.childrenCount,
                    marriageCount: intakeFormData?.marriageCount,
                    pastMarriagesInfo: intakeFormData?.pastMarriagesInfo,
                },
                psychHistory: {
                    pastProviders: intakeFormData?.pastProviders,
                    currentMedications: intakeFormData?.currentMedications,
                    hasAttemptedSuicide: convertBooleanToText(
                        intakeFormData?.hasAttemptedSuicide
                    ),
                    isPsychHospitalized: convertBooleanToText(
                        intakeFormData?.isPsychHospitalized
                    ),
                    pastMedications: intakeFormData?.pastMedications,
                },
                alcoholDrugHistory: {
                    alcohol: {
                        usageFrequency:
                            intakeFormData?.alcoholDrugHistory?.usageFrequency,
                        brand: intakeFormData?.alcoholDrugHistory?.brand,
                        lastUsed: intakeFormData?.alcoholDrugHistory?.lastUsed,
                        drinkGuiltCheck:
                            intakeFormData?.alcoholDrugHistory?.drinkGuiltCheck,
                    },
                    substanceUsages:
                        intakeFormData?.alcoholDrugHistory?.substanceUsages,
                    weeklyAverageSpending:
                        intakeFormData?.alcoholDrugHistory
                            ?.weeklyAverageSpending,
                    pastTreatmentInfo:
                        intakeFormData?.alcoholDrugHistory?.pastTreatmentInfo,
                    isPastStepRecoveryParticipant: convertBooleanToText(
                        intakeFormData?.alcoholDrugHistory
                            ?.isPastStepRecoveryParticipant
                    ),
                    isCurrentStepRecoveryParticipant: convertBooleanToText(
                        intakeFormData?.alcoholDrugHistory
                            ?.isCurrentStepRecoveryParticipant
                    ),
                },
                psychosocialHistory: {
                    birthPlace: intakeFormData?.alcoholDrugHistory?.birthPlace,
                    growthPlace:
                        intakeFormData?.alcoholDrugHistory?.growthPlace,
                    raisedBy: intakeFormData?.alcoholDrugHistory?.raisedBy,
                    siblingsCount:
                        intakeFormData?.alcoholDrugHistory?.siblingsCount,
                    childhoodInfo:
                        intakeFormData?.alcoholDrugHistory?.childhoodInfo,
                    wasPhysicallyAbused: convertBooleanToText(
                        intakeFormData?.alcoholDrugHistory?.wasPhysicallyAbused
                    ),
                    wasEmotionallyAbused: convertBooleanToText(
                        intakeFormData?.alcoholDrugHistory?.wasEmotionallyAbused
                    ),
                    wasSexuallyAbused: convertBooleanToText(
                        intakeFormData?.alcoholDrugHistory?.wasSexuallyAbused
                    ),
                },
                otherHistory: {
                    hasMedicalDisability: convertBooleanToText(
                        intakeFormData?.alcoholDrugHistory?.hasMedicalDisability
                    ),
                    pastMedicalHistory:
                        intakeFormData?.alcoholDrugHistory?.pastMedicalHistory,
                    pastSurgicalHistory:
                        intakeFormData?.alcoholDrugHistory?.pastSurgicalHistory,
                    allergies: intakeFormData?.alcoholDrugHistory?.allergies,
                    relativesWithMentalIllnessOrSuicide:
                        intakeFormData?.alcoholDrugHistory
                            ?.relativesWithMentalIllnessOrSuicide,
                    otherUsefulInfo:
                        intakeFormData?.alcoholDrugHistory?.otherUsefulInfo,
                },
            }));
        }
    }, [intakeFormData]);

    console.log(formData);

    const tabButtons = [
        { id: 1, tabName: "Intro", isDisabled: false },
        { id: 2, tabName: "Psychiatric History", isDisabled: false },
        { id: 3, tabName: "Psychosocial & Health Profile", isDisabled: false },
    ];

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

    if (isError) {
        return <FetchError homeLink="/admin/patients" />;
    }

    if (isLoading) {
        return (
            <Spinner
                secondaryText={`Loading patient's information...`}
                spinnerSize="w-10 h-10"
                textClass="text-lg text-darkBlue font-semibold"
                borderClass="border-lightGreen"
            />
        );
    }

    return (
        <section className="p-4 md:p-8">
            <PageTitle title={"Intake Form Update"}>
                <BackButton />
            </PageTitle>

            <TabPanel
                tabButtons={tabButtons}
                tabIndex={tabIndex}
                setTabIndex={setTabIndex}
            />

            <div className="bg-offWhite p-4 md:p-6 rounded-lg">
                {tabIndex === 1 && (
                    <IntroFormUpdate
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                )}

                {tabIndex === 2 && (
                    <PsychHistoryUpdate
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                )}

                {tabIndex === 3 && (
                    <AlcoholHistoryUpdate
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                )}

                {/* {tabIndex === 3 && (
                    <AlcoholHistoryUpdate
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                )}

                {tabIndex === 4 && (
                    <PsychosocialUpdate
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                )}

                {tabIndex === 5 && (
                    <OtherHistoryUpdate
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                )} */}
            </div>
        </section>
    );
};

export default IntakeUpdate;
