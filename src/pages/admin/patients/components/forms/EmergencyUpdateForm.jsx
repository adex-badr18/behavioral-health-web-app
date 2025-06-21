import TextField from "../../../../../components/TextField";
import SubmitButton from "../../../../../components/SubmitButton";
import { useUpdatePatient } from "../../../../../hooks/usePatients";

const EmergencyUpdateForm = ({ formData, handleInputChange }) => {
    const { mutate, isPending, error, data } = useUpdatePatient();

    const handleSubmit = () => {
        // Prepare personal info update payload
        const formattedData = { ...formData.emergency };

        // TODO: Update emergency info
        mutate({
            patientId: formData?.identification.patientId,
            payload: formattedData,
            endpoint: `patients/forms/register/${formData.identification.patientId}/emergency-contact/${formData.identification.id}`,
        });
    };

    return (
        <div className="space-y-6 md:space-y-10">
            <form>
                <div className="space-y-2">
                    <h3 className="font-bold text-xl text-darkBlue">
                        Emergency Contact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <TextField
                            type="text"
                            label="First Name"
                            name="firstName"
                            placeholder="First Name"
                            section="emergency"
                            field="firstName"
                            value={formData.emergency.firstName}
                            handleInputChange={handleInputChange}
                        />
                        <TextField
                            type="text"
                            label="Last Name"
                            name="lastName"
                            field="lastName"
                            placeholder="Last Name"
                            section="emergency"
                            value={formData.emergency.lastName}
                            handleInputChange={handleInputChange}
                        />
                        <TextField
                            type="text"
                            label="Home Phone"
                            name="homePhone"
                            field="homePhone"
                            placeholder="Home Phone"
                            section="emergency"
                            value={formData.emergency.homePhone}
                            handleInputChange={handleInputChange}
                        />
                        <TextField
                            type="text"
                            label="Cell Phone"
                            name="cellPhone"
                            field="cellPhone"
                            placeholder="Cell Phone"
                            section="emergency"
                            value={formData.emergency.cellPhone}
                            handleInputChange={handleInputChange}
                        />
                        <TextField
                            type="email"
                            label="Email Address"
                            name="email"
                            field="email"
                            placeholder="Email Address"
                            section="emergency"
                            value={formData.emergency.email}
                            handleInputChange={handleInputChange}
                        />
                        <TextField
                            type="text"
                            label="Relationship"
                            name="relationship"
                            field="relationship"
                            placeholder="Relationship"
                            section="emergency"
                            value={formData.emergency.relationship}
                            handleInputChange={handleInputChange}
                        />
                        <TextField
                            type="text"
                            label="Address (Street)"
                            name="streetName"
                            field="address.streetName"
                            placeholder="Address (Street)"
                            section="emergency"
                            value={formData.emergency.address.streetName}
                            handleInputChange={handleInputChange}
                        />
                        <TextField
                            type="text"
                            label="City"
                            name="city"
                            field="address.city"
                            placeholder="City"
                            section="emergency"
                            value={formData.emergency.address.city}
                            handleInputChange={handleInputChange}
                        />
                        <TextField
                            type="text"
                            label="State"
                            name="state"
                            field="address.state"
                            placeholder="State"
                            section="emergency"
                            value={formData.emergency.address.state}
                            handleInputChange={handleInputChange}
                        />
                        <TextField
                            type="text"
                            label="Zip Code"
                            name="zipCode"
                            field="address.zipCode"
                            placeholder="Zip Code"
                            section="emergency"
                            value={formData.emergency.address.zipCode}
                            handleInputChange={handleInputChange}
                        />
                    </div>
                </div>
            </form>

            <SubmitButton
                isDisabled={isPending}
                isSubmitting={isPending}
                loadingText="Updating"
                onSubmit={handleSubmit}
                submitText="Update Emergency Contact Info"
            />
        </div>
    );
};

export default EmergencyUpdateForm;
