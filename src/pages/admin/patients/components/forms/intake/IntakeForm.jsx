import React, { useMemo } from "react";
import TextAreaField from "../../../../../../components/TextAreaField";
import FieldItem from "../../../../../../components/FieldItem";
import { getFormattedKeyValues } from "../../../../utils";
import StaticDivider from "../../../../../../components/StaticDivider";
import DynamicObjField from "../DynamicObjField";
import DynamicStringField from "../DynamicStringField";
import { convertBooleanToText } from "../../../../../utils";
import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";

const IntakeForm = ({ data }) => {
    console.log("Intake", data);

    const formData = {
        intro: {
            id: data?.id,
            patientId: data?.patientId,
            doYouShareHome: data?.doYouShareHome,
            complaints: data?.complaints,
            sexPreference: data?.sexPreference,
            onProbation: data?.onProbation,
            inLawsuit: data?.inLawsuit,
            childrenCount: data?.childrenCount,
            marriageCount: data?.marriageCount,
            pastMarriagesInfo: data?.pastMarriagesInfo,
        },
        psychHistory: {
            pastProviders: data?.pastProviders,
            currentMedications: data?.currentMedications,
            hasAttemptedSuicide: convertBooleanToText(
                data?.hasAttemptedSuicide
            ),
            isPsychHospitalized: convertBooleanToText(
                data?.isPsychHospitalized
            ),
            pastMedications: data?.pastMedications,
        },
        alcoholDrugHistory: {
            alcohol: {
                usageFrequency: data?.alcoholDrugHistory?.usageFrequency,
                brand: data?.alcoholDrugHistory?.brand,
                lastUsed: data?.alcoholDrugHistory?.lastUsed,
                drinkGuiltCheck: data?.alcoholDrugHistory?.drinkGuiltCheck,
            },
            substanceUsages: data?.alcoholDrugHistory?.substanceUsages,
            weeklyAverageSpending:
                data?.alcoholDrugHistory?.weeklyAverageSpending,
            pastTreatmentInfo: data?.alcoholDrugHistory?.pastTreatmentInfo,
            isPastStepRecoveryParticipant: convertBooleanToText(
                data?.alcoholDrugHistory?.isPastStepRecoveryParticipant
            ),
            isCurrentStepRecoveryParticipant: convertBooleanToText(
                data?.alcoholDrugHistory?.isCurrentStepRecoveryParticipant
            ),
        },
        psychosocialHistory: {
            birthPlace: data?.alcoholDrugHistory?.birthPlace,
            growthPlace: data?.alcoholDrugHistory?.growthPlace,
            raisedBy: data?.alcoholDrugHistory?.raisedBy,
            siblingsCount: data?.alcoholDrugHistory?.siblingsCount,
            childhoodInfo: data?.alcoholDrugHistory?.childhoodInfo,
            wasPhysicallyAbused: convertBooleanToText(
                data?.alcoholDrugHistory?.wasPhysicallyAbused
            ),
            wasEmotionallyAbused: convertBooleanToText(
                data?.alcoholDrugHistory?.wasEmotionallyAbused
            ),
            wasSexuallyAbused: convertBooleanToText(
                data?.alcoholDrugHistory?.wasSexuallyAbused
            ),
        },
        otherHistory: {
            hasMedicalDisability: convertBooleanToText(
                data?.alcoholDrugHistory?.hasMedicalDisability
            ),
            pastMedicalHistory: data?.alcoholDrugHistory?.pastMedicalHistory,
            pastSurgicalHistory: data?.alcoholDrugHistory?.pastSurgicalHistory,
            allergies: data?.alcoholDrugHistory?.allergies,
            relativesWithMentalIllnessOrSuicide:
                data?.alcoholDrugHistory?.relativesWithMentalIllnessOrSuicide,
            otherUsefulInfo: data?.alcoholDrugHistory?.otherUsefulInfo,
        },
    };

    const {
        formattedPastMarriages,
        formattedPastProviders,
        formattedPastMedications,
        formattedCurrentMedications,
        formattedSubstanceUsages,
        formattedPastTreatment,
        formattedRelativesWithIllness,
    } = useMemo(() => {
        const formattedPastMarriages = getFormattedKeyValues(
            formData.intro.pastMarriagesInfo
        );

        const formattedPastProviders = getFormattedKeyValues(
            formData.psychHistory.pastProviders
        );

        const formattedPastMedications = getFormattedKeyValues(
            formData.psychHistory.pastMedications
        );

        const formattedCurrentMedications = getFormattedKeyValues(
            formData.psychHistory.currentMedications
        );

        const formattedSubstanceUsages = getFormattedKeyValues(
            formData.alcoholDrugHistory.substanceUsages
        );

        const formattedPastTreatment = getFormattedKeyValues(
            formData.alcoholDrugHistory.pastTreatmentInfo.map((treatment) => ({
                ...treatment,
                isTreatmentCompleted: convertBooleanToText(
                    treatment.isTreatmentCompleted
                ),
            }))
        );

        const formattedRelativesWithIllness = getFormattedKeyValues(
            formData.otherHistory.relativesWithMentalIllnessOrSuicide
        );

        return {
            formattedPastMarriages,
            formattedPastProviders,
            formattedPastMedications,
            formattedCurrentMedications,
            formattedSubstanceUsages,
            formattedPastTreatment,
            formattedRelativesWithIllness,
        };
    }, [data]);

    return (
        <form className="space-y-6 md:space-y-10 w-full max-w-2xl mx-auto">
            <div className="space-y-4 md:space-y-8">
                <div className="flex justify-between items-center gap-4">
                    <h3 className="font-semibold text-xl md:text-2xl text-darkBlue">
                        Intake Form
                    </h3>

                    <Link
                        to={`/admin/patients/${data?.patientId}/intake/${data?.id}/update`}
                        state={{ intakeFormData: formData }}
                        className="rounded-lg px-3 py-2 text-sm flex items-center justify-center gap-2 divide-x-2 font-poppins font-semibold text-nowrap transition-colors duration-300 bg-deepGreen text-white divide-white hover:bg-originalGreen"
                    >
                        <span className="">Edit</span>
                        <MdOutlineEdit className="text-2xl pl-2" />
                    </Link>
                </div>

                <TextAreaField
                    label="Describe the Reason for Seeking Help"
                    name="complaints"
                    placeholder="Write detailed description here"
                    section="intro"
                    field="complaints"
                    value={formData.intro.complaints}
                    isRequired={true}
                    readOnly
                    disabled
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <FieldItem
                        label="Do you Share Home?"
                        value={formData.intro.doYouShareHome}
                    />
                    <FieldItem
                        label="Sexual Preference"
                        value={formData.intro.sexPreference}
                    />

                    <FieldItem
                        label="Are you Currently on Probation?"
                        value={formData.intro.onProbation}
                    />

                    <FieldItem
                        label="Are you Currently in a Lawsuit?"
                        value={formData.intro.inLawsuit}
                    />

                    <FieldItem
                        label="Children Count"
                        value={formData.intro.childrenCount}
                    />

                    <FieldItem
                        label="Marriage Count"
                        value={formData.intro.marriageCount}
                    />
                </div>

                {/* Dynamic Field for past marriage list */}
                {formData.intro.marriageCount > 0 && (
                    <DynamicObjField
                        data={formattedPastMarriages}
                        title="Past Marriages"
                        emptyListDescr="Past marriage list is empty."
                    />
                )}
            </div>

            <StaticDivider />

            <div className="space-y-4 md:space-y-8">
                <h3 className="font-bold text-xl text-darkBlue">
                    Past Psychiatric History
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <FieldItem
                        label="Ever attempted suicide?"
                        value={formData.psychHistory.hasAttemptedSuicide}
                    />

                    <FieldItem
                        label="Ever hospitalized for mental health?"
                        value={formData.psychHistory.isPsychHospitalized}
                    />
                </div>

                {/* Dynamic field for past providers */}
                <DynamicObjField
                    data={formattedPastProviders}
                    title="Past Providers"
                    emptyListDescr="Past provider list is empty."
                />

                {/* Dynamic field for current medications */}
                <DynamicObjField
                    data={formattedCurrentMedications}
                    title="Current Medications"
                    emptyListDescr="Current medication list is empty."
                />

                {/* Dynamic field for past medications */}
                <DynamicObjField
                    data={formattedPastMedications}
                    title="Past Medications"
                    emptyListDescr="Past medication list is empty."
                />
            </div>

            <StaticDivider />

            <div className="space-y-4 md:space-y-8">
                <h3 className="font-semibold text-xl md:text-2xl text-darkBlue">
                    Alcohol and Drug History
                </h3>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-xl text-darkBlue font-medium">
                        Alcohol
                    </h4>

                    <div className="space-y-4 md:space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <FieldItem
                                label="Usage Frequency"
                                value={
                                    formData.alcoholDrugHistory.alcohol
                                        .usageFrequency
                                }
                            />

                            {formData.alcoholDrugHistory.alcohol
                                .usageFrequency !== "None" && (
                                <FieldItem
                                    label="Your usual alcoholic beverage"
                                    value={
                                        formData.alcoholDrugHistory.alcohol
                                            .brand
                                    }
                                />
                            )}

                            <FieldItem
                                label="When was your last drink?"
                                value={
                                    formData.alcoholDrugHistory.alcohol.lastUsed
                                }
                            />
                        </div>

                        {/* Alcohol Drinking Self Assessment */}
                        <DynamicStringField
                            data={formData.alcoholDrugHistory.alcohol.drinkGuiltCheck.split(
                                ". "
                            )}
                            emptyListDescr="Self assessment is empty."
                            title="Alcohol Drinking Self-Assessment"
                        />
                    </div>
                </div>

                <div className="p-4 border rounded space-y-5">
                    <div className="space-y-4 md:space-y-8 divide-y">
                        {/* Dynamic Field for Substances usage */}
                        <DynamicObjField
                            data={formattedSubstanceUsages}
                            title="Substance Usages"
                            emptyListDescr="Substance usage list is empty."
                        />

                        <FieldItem
                            label="Average Weekly Spending on Alcohol/Drugs"
                            value={
                                formData.alcoholDrugHistory
                                    .weeklyAverageSpending
                            }
                            colspanClass="pt-4 md:pt-6"
                        />
                    </div>
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-xl text-darkBlue font-medium">
                        Past Treatments
                    </h4>

                    <div className="space-y-4 md:space-y-8 divide-y">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <FieldItem
                                label="Past 12-Step Recovery Participant?"
                                value={
                                    formData.alcoholDrugHistory
                                        .isPastStepRecoveryParticipant
                                }
                            />

                            <FieldItem
                                label="Current 12-Step Recovery Participant?"
                                value={
                                    formData.alcoholDrugHistory
                                        .isCurrentStepRecoveryParticipant
                                }
                            />
                        </div>

                        {/* Dynamic Field for past treatments */}
                        <DynamicObjField
                            data={formattedPastTreatment}
                            title="Past Treatments"
                            emptyListDescr="Past treatment list is empty."
                        />
                    </div>
                </div>
            </div>

            <StaticDivider />

            <div className="space-y-8">
                <h3 className="font-semibold text-xl md:text-2xl text-darkBlue">
                    Psychosocial History
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <FieldItem
                        label="Place of Birth"
                        value={formData.psychosocialHistory.birthPlace}
                    />

                    <FieldItem
                        label="Where did you grow up?"
                        value={formData.psychosocialHistory.growthPlace}
                    />

                    <FieldItem
                        label="Who raised you?"
                        value={formData.psychosocialHistory.raisedBy}
                    />

                    <FieldItem
                        label="How many siblings did you have?"
                        value={formData.psychosocialHistory.siblingsCount}
                    />

                    <FieldItem
                        label="Has anyone physically abused you?"
                        value={formData.psychosocialHistory.wasPhysicallyAbused}
                    />

                    <FieldItem
                        label="Has anyone emotionally abused you?"
                        value={
                            formData.psychosocialHistory.wasEmotionallyAbused
                        }
                    />

                    <FieldItem
                        label="Has anyone sexually abused you?"
                        value={formData.psychosocialHistory.wasSexuallyAbused}
                    />

                    <TextAreaField
                        label="Describe your childhood"
                        name="childhoodInfo"
                        placeholder="Write detailed description here"
                        section="psychosocialHistory"
                        field="childhoodInfo"
                        value={formData.psychosocialHistory.childhoodInfo}
                        readOnly
                        disabled
                    />
                </div>
            </div>

            <StaticDivider />

            <div className="space-y-4 md:space-y-8">
                <h3 className="font-semibold text-xl md:text-2xl text-darkBlue">
                    Other History
                </h3>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-xl text-darkBlue font-medium">
                        Past Medical History
                    </h4>

                    <div className="space-y-4 md:space-y-8">
                        <FieldItem
                            label="Are you medically disabled?"
                            value={formData.otherHistory.hasMedicalDisability}
                        />

                        {/* Dynamic Field for past medical history */}
                        <DynamicStringField
                            data={formData.otherHistory.pastMedicalHistory}
                            emptyListDescr="Past medical history is empty"
                            title="Medical History"
                        />
                    </div>
                </div>

                {/* Dynamic Field for past surgical history */}
                <DynamicStringField
                    data={formData.otherHistory.pastSurgicalHistory}
                    emptyListDescr="Past surgical history is empty"
                    title="Past Surgical History"
                />

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-xl text-darkBlue font-medium">
                        Family History
                    </h4>

                    {/* Dynamic Field for relatives and illnesses */}
                    <DynamicObjField
                        data={formattedRelativesWithIllness}
                        title="Relatives with Mental illness or Suicide"
                        emptyListDescr="No relatives with mental illness or suicide."
                    />
                </div>

                {/* Dynamic string field for allergies */}
                <DynamicStringField
                    data={formData.otherHistory.allergies}
                    emptyListDescr="No allergies"
                    title="Allergies"
                />

                <TextAreaField
                    label="Is there any additional information you'd like to share?"
                    name="otherUsefulInfo"
                    placeholder="Write detailed description here"
                    section="otherHistory"
                    field="otherUsefulInfo"
                    value={formData.otherHistory.otherUsefulInfo}
                    readOnly
                    disabled
                />
            </div>
        </form>
    );
};

export default IntakeForm;
