import React from "react";
import OtherHistory from "../../../../../user/patientForms/components/intake/OtherHistory";
import SubmitButton from "../../../../../../components/SubmitButton";
import { useUpdateIntake } from "../../../../../../hooks/usePatients";
import { useParams } from "react-router-dom";

const OtherHistoryUpdate = ({formData, onChange}) => {
    const { mutate, isPending, error, data } = useUpdateIntake();
    const { id } = useParams();

    const { otherHistory } = formData;

    const handleSubmit = () => {
        // Prepare personal info update payload
        const formattedData = {
            hasMedicalDisability: convertBooleanToText(
                otherHistory.hasMedicalDisability
            ),
            pastMedicalHistory: otherHistory.pastMedicalHistory,
            pastSurgicalHistory: otherHistory.pastSurgicalHistory,
            allergies: otherHistory.allergies,
            relativesWithMentalIllnessOrSuicide:
                otherHistory.relativesWithMentalIllnessOrSuicide,
            otherUsefulInfo: otherHistory.otherUsefulInfo,
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

export default OtherHistoryUpdate;
