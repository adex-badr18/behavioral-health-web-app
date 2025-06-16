import React from "react";
import { convertBooleanToText } from "../../../../../utils";
import PsychoSocial from "../../../../../user/patientForms/components/intake/PsychoSocial";
import SubmitButton from "../../../../../../components/SubmitButton";
import { useUpdateIntake } from "../../../../../../hooks/usePatients";
import { useParams } from "react-router-dom";

const PsychosocialUpdate = ({formData, onChange}) => {
    const { mutate, isPending, error, data } = useUpdateIntake();
    const { id } = useParams();

    const { psychosocialHistory } = formData;

    const handleSubmit = () => {
        // Prepare personal info update payload
        const formattedData = {
          birthPlace: psychosocialHistory?.birthPlace,
          growthPlace: psychosocialHistory?.growthPlace,
          raisedBy: psychosocialHistory?.raisedBy,
          siblingsCount: psychosocialHistory?.siblingsCount,
          childhoodInfo: psychosocialHistory?.childhoodInfo,
          wasPhysicallyAbused: convertBooleanToText(
              psychosocialHistory?.wasPhysicallyAbused
          ),
          wasEmotionallyAbused: convertBooleanToText(
              psychosocialHistory?.wasEmotionallyAbused
          ),
          wasSexuallyAbused: convertBooleanToText(
              psychosocialHistory?.wasSexuallyAbused
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
            <PsychoSocial formData={formData} onChange={onChange} />
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

export default PsychosocialUpdate;
