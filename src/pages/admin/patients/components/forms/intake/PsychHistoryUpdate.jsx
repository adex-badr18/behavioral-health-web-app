import React from "react";
import {
    convertBooleanToText,
    convertToBoolean,
    formatToYYYYMMDD,
} from "../../../../../utils";
import PsychHistory from "../../../../../user/patientForms/components/intake/PsychHistory";
import SubmitButton from "../../../../../../components/SubmitButton";
import { useUpdateIntake } from "../../../../../../hooks/usePatients";
import { useParams } from "react-router-dom";

const PsychHistoryUpdate = ({ formData, onChange }) => {
    const { mutate, isPending, error, data } = useUpdateIntake();
    const { id, intakeId } = useParams();

    const { psychHistory } = formData;

    const handleSubmit = () => {
        // Prepare personal info update payload

        const pastProviders = psychHistory.pastProviders.map((provider) => {
            return {
                ...provider,
                appointmentDate: formatToYYYYMMDD(provider.appointmentDate),
            };
        });

        const formattedData = {
            patientId: id,
            intakeId,
            pastProviders: pastProviders,
            currentMedications: psychHistory?.currentMedications,
            hasAttemptedSuicide: convertToBoolean(
                psychHistory?.hasAttemptedSuicide
            ),
            isPsychHospitalized: convertToBoolean(
                psychHistory?.isPsychHospitalized
            ),
            pastMedications: psychHistory?.pastMedications,
        };

        console.log("Psych History Payload:", formattedData);

        // TODO: Update personal info
        mutate({
            patientId: id,
            payload: formattedData,
            endpoint: `patients/forms/intake/${intakeId}/update/psych-history`,
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
