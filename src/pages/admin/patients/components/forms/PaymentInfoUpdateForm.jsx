import InsuranceForm from "../../../../user/patientForms/components/patientReg/InsuranceForm";
import SubmitButton from "../../../../../components/SubmitButton";
import { useUpdatePatient } from "../../../../../hooks/usePatients";
import { formatToYYYYMMDD, objectToFormData } from "../../../../utils";

const PaymentInfoUpdateForm = ({ formData, onChange }) => {
    const { mutate, isPending, error, data } = useUpdatePatient();

    console.log(formData)

    const handleSubmit = () => {
        // Prepare personal info update payload
        const formattedData = {
            paymentMode: formData.insurance.paymentMode,
            insurances: [
                {
                    ...formData.insurance.primaryInsurance,
                    policyHolder: {
                        ...formData.insurance.primaryInsurance.policyHolder,
                        dob: formatToYYYYMMDD(
                            formData.insurance.primaryInsurance.policyHolder.dob
                        ),
                    },
                    insuranceProvider: {
                        ...formData.insurance.primaryInsurance
                            .insuranceProvider,
                        coverageStartDate: formatToYYYYMMDD(
                            formData.insurance.primaryInsurance
                                .insuranceProvider.coverageStartDate
                        ),
                        coverageEndDate: formatToYYYYMMDD(
                            formData.insurance.primaryInsurance
                                .insuranceProvider.coverageEndDate
                        ),
                    },
                },
                {
                    ...formData.insurance.secondaryInsurance,
                    policyHolder: {
                        ...formData.insurance.secondaryInsurance.policyHolder,
                        dob: formatToYYYYMMDD(
                            formData.insurance.secondaryInsurance.policyHolder
                                .dob
                        ),
                    },
                    insuranceProvider: {
                        ...formData.insurance.secondaryInsurance
                            .insuranceProvider,
                        coverageStartDate: formatToYYYYMMDD(
                            formData.insurance.secondaryInsurance
                                .insuranceProvider.coverageStartDate
                        ),
                        coverageEndDate: formatToYYYYMMDD(
                            formData.insurance.secondaryInsurance
                                .insuranceProvider.coverageEndDate
                        ),
                    },
                },
            ],
        };

        console.log(formattedData)

        // TODO: Update payment structure
        mutate({
            patientId: formData?.identification.patientId,
            payload: formattedData,
            endpoint: `patients/forms/register/${formData.identification.patientId}/payment-structure`,
        });
    };

    return (
        <div className="space-y-6 md:space-y-10">
            <InsuranceForm formData={formData} handleInputChange={onChange} />
            <SubmitButton
                isDisabled={isPending}
                isSubmitting={isPending}
                loadingText="Updating"
                onSubmit={handleSubmit}
                submitText="Update Payment Info"
            />
        </div>
    );
};

export default PaymentInfoUpdateForm;
