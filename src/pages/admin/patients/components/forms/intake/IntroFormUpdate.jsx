import React from "react";
import SubmitButton from "../../../../../../components/SubmitButton";
import IntroForm from "../../../../../user/patientForms/components/intake/IntroForm";
import { useUpdateIntake } from "../../../../../../hooks/usePatients";
import { useParams } from "react-router-dom";

const IntroFormUpdate = ({ formData, onChange }) => {
    const { mutate, isPending, error, data } = useUpdateIntake();
    const { id } = useParams();

    const { intro } = formData;

    const handleSubmit = () => {
        // Prepare personal info update payload
        const formattedData = {
            doYouShareHome: intro?.doYouShareHome,
            complaints: intro?.complaints,
            sexPreference: intro?.sexPreference,
            onProbation: intro?.onProbation,
            inLawsuit: intro?.inLawsuit,
            childrenCount: intro?.childrenCount,
            marriageCount: intro?.marriageCount,
            pastMarriagesInfo: intro?.pastMarriagesInfo,
        };

        console.log(formattedData)
        // TODO: Update personal info
        // mutate({
        //     patientId: id,
        //     payload: formattedData,
        //     endpoint: `patients/forms/register/${id}/personal-info`,
        // });
    };

    return (
        <div className="space-y-6 md:space-y-10">
            <IntroForm formData={formData} onChange={onChange} />
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

export default IntroFormUpdate;
