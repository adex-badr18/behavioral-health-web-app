import React from "react";
import { convertBooleanToText } from "../../../../../utils";
import PsychHistory from "../../../../../user/patientForms/components/intake/PsychHistory";
import SubmitButton from "../../../../../../components/SubmitButton";
import { useUpdateIntake } from "../../../../../../hooks/usePatients";
import { useParams } from "react-router-dom";

const PsychHistoryUpdate = ({formData, onChange}) => {
    const { mutate, isPending, error, data } = useUpdateIntake();
    const { id } = useParams();

    const { psychHistory } = formData;

    const handleSubmit = () => {
        // Prepare personal info update payload
        const formattedData = {
            pastProviders: psychHistory?.pastProviders,
            currentMedications: psychHistory?.currentMedications,
            hasAttemptedSuicide: convertBooleanToText(
                psychHistory?.hasAttemptedSuicide
            ),
            isPsychHospitalized: convertBooleanToText(
                psychHistory?.isPsychHospitalized
            ),
            pastMedications: psychHistory?.pastMedications,
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
            <PsychHistory formData={formData} onChange={onChange} />
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

export default PsychHistoryUpdate;
