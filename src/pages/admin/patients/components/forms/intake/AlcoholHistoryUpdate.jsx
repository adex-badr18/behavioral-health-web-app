import React from "react";
import AlcoholHistory from "../../../../../user/patientForms/components/intake/AlcoholHistory";
import SubmitButton from "../../../../../../components/SubmitButton";
import { convertBooleanToText } from "../../../../../utils";
import { useUpdateIntake } from "../../../../../../hooks/usePatients";
import { useParams } from "react-router-dom";

const AlcoholHistoryUpdate = ({ formData, onChange }) => {
    const { mutate, isPending, error, data } = useUpdateIntake();
    const { id } = useParams();

    const { alcoholDrugHistory } = formData;

    const handleSubmit = () => {
        // Prepare personal info update payload
        const formattedData = {
            alcohol: {
                usageFrequency: alcoholDrugHistory?.alcohol.usageFrequency,
                brand: alcoholDrugHistory?.alcohol.brand,
                lastUsed: alcoholDrugHistory?.alcohol.lastUsed,
                drinkGuiltCheck: alcoholDrugHistory?.alcohol.drinkGuiltCheck,
            },
            substanceUsages: alcoholDrugHistory?.substanceUsages,
            weeklyAverageSpending: alcoholDrugHistory?.weeklyAverageSpending,
            pastTreatmentInfo: alcoholDrugHistory?.pastTreatmentInfo,
            isPastStepRecoveryParticipant: convertBooleanToText(
                alcoholDrugHistory?.isPastStepRecoveryParticipant
            ),
            isCurrentStepRecoveryParticipant: convertBooleanToText(
                alcoholDrugHistory?.isCurrentStepRecoveryParticipant
            ),
        };

        // TODO: Update personal info
        mutate({
            patientId: id,
            payload: formattedData,
            endpoint: `patients/forms/register/${id}/personal-info`,
        });
    };

    return (
        <div className="space-y-6 md:space-y-10">
            <AlcoholHistory formData={formData} onChange={onChange} />
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
