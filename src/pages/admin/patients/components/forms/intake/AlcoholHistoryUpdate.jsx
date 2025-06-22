import React from "react";
import AlcoholHistory from "../../../../../user/patientForms/components/intake/AlcoholHistory";
import SubmitButton from "../../../../../../components/SubmitButton";
import { convertBooleanToText, convertToBoolean } from "../../../../../utils";
import { useUpdateIntake } from "../../../../../../hooks/usePatients";
import { useParams } from "react-router-dom";
import PsychoSocial from "../../../../../user/patientForms/components/intake/PsychoSocial";
import OtherHistory from "../../../../../user/patientForms/components/intake/OtherHistory";

const AlcoholHistoryUpdate = ({ formData, onChange }) => {
    const { mutate, isPending, error, data } = useUpdateIntake();
    const { id, intakeId } = useParams();

    const { alcoholDrugHistory, psychosocialHistory, otherHistory } = formData;

    const handleSubmit = () => {
        const pastTreatmentInfo = alcoholDrugHistory.pastTreatmentInfo.map(treatment => ({
            ...treatment,
            isTreatmentCompleted: convertToBoolean(treatment.isTreatmentCompleted)
        }))

        const formattedData = {
            // id: 0,
            usageFrequency: alcoholDrugHistory?.alcohol.usageFrequency,
            brand: alcoholDrugHistory?.alcohol.brand,
            lastUsed: alcoholDrugHistory?.alcohol.lastUsed,
            drinkGuiltCheck: alcoholDrugHistory?.alcohol.drinkGuiltCheck,
            substanceUsages: alcoholDrugHistory?.substanceUsages,
            weeklyAverageSpending: alcoholDrugHistory?.weeklyAverageSpending,
            pastTreatmentInfo,
            isPastStepRecoveryParticipant: convertToBoolean(
                alcoholDrugHistory?.isPastStepRecoveryParticipant
            ),
            isCurrentStepRecoveryParticipant: convertToBoolean(
                alcoholDrugHistory?.isCurrentStepRecoveryParticipant
            ),
            birthPlace: psychosocialHistory?.birthPlace,
            growthPlace: psychosocialHistory?.growthPlace,
            raisedBy: psychosocialHistory?.raisedBy,
            siblingsCount: psychosocialHistory?.siblingsCount,
            childhoodInfo: psychosocialHistory?.childhoodInfo,
            wasPhysicallyAbused: convertToBoolean(
                psychosocialHistory?.wasPhysicallyAbused
            ),
            wasEmotionallyAbused: convertToBoolean(
                psychosocialHistory?.wasEmotionallyAbused
            ),
            wasSexuallyAbused: convertToBoolean(
                psychosocialHistory?.wasSexuallyAbused
            ),
            hasMedicalDisability: convertToBoolean(
                otherHistory.hasMedicalDisability
            ),
            pastMedicalHistory: otherHistory.pastMedicalHistory,
            pastSurgicalHistory: otherHistory.pastSurgicalHistory,
            allergies: otherHistory.allergies,
            relativesWithMentalIllnessOrSuicide:
                otherHistory.relativesWithMentalIllnessOrSuicide,
            otherUsefulInfo: otherHistory.otherUsefulInfo,
        };

        console.log("Payload:", formattedData);

        // TODO: Update personal info
        mutate({
            patientId: id,
            payload: formattedData,
            endpoint: `patients/forms/intake/${intakeId}/update/drug-history`,
        });
    };

    return (
        <div className="space-y-6 md:space-y-10">
            <AlcoholHistory formData={formData} onChange={onChange} />
            <PsychoSocial formData={formData} onChange={onChange} />
            <OtherHistory formData={formData} onChange={onChange} />

            <SubmitButton
                isDisabled={isPending}
                isSubmitting={isPending}
                loadingText="Updating"
                onSubmit={handleSubmit}
                submitText="Update"
            />
        </div>
    );
};

export default AlcoholHistoryUpdate;
