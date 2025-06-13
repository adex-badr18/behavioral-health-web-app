import { useState, useEffect } from "react";
import TextField from "./TextField";
import DateField from "./DateField";
import SelectField from "./SelectField";
import StaticDivider from "./StaticDivider";
import FieldItem from "./FieldItem";
import { MdEmail } from "react-icons/md";
import SubmitButton from "./SubmitButton";
import { useFetchBasicPatient } from "../hooks/usePatients";
import { useToast } from "./ToastContext";
import Spinner from "./Spinner";

const VerificationStep = ({ formData, setFormData, id }) => {
    const { showToast } = useToast();
    const [patientId, setPatientId] = useState(id || "");
    const { refetch, isLoading, isSuccess, isError, error, data } =
        useFetchBasicPatient(patientId);

    console.log(data);

    useEffect(() => {
      setFormData(prev => ({...prev, verification: data}))
    }, [data])
    

    // Fetch patient info by Id
    const verifyIdHandler = async (e) => {
        e.preventDefault();

        if (!patientId) {
            showToast({
                message: `Please enter a patient ID`,
                type: "error",
                duration: 5000,
            });

            return;
        }

        try {
            const response = await refetch(); // returns {data, error, status}

            console.log(response);

            if (response?.data) {
                showToast({
                    message: `Verification successful!`,
                    type: "success",
                    duration: 5000,
                });
                setFormData((prev) => ({
                    ...prev,
                    verification: response.data,
                }));
            } else if (response?.error) {
                throw response.error;
            }
        } catch (error) {
            showToast({
                message: error?.message || `Patient ID could not be found!`,
                type: "error",
                duration: 5000,
            });
        }
    };

    return (
        <form className="">
            <div className="space-y-4 md:space-y-8">
                <h2 className="text-lg font-medium text-darkBlue">
                    Enter your patient ID below to fetch your basic information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                    <div className="col-span-2">
                        <div className={`space-y-1`}>
                            <label
                                htmlFor={`patientId`}
                                className="block text-deepGrey"
                            >
                                Patient ID{" "}
                                <small className="text-vividRed text-lg">
                                    *
                                </small>
                            </label>
                            <input
                                type="text"
                                id={`patientId`}
                                name="patientId"
                                className="input bg-gray-100"
                                placeholder="Patient ID"
                                value={patientId}
                                onChange={(e) => setPatientId(e.target.value)}
                                readOnly={
                                    isSuccess || formData.verification?.patientId
                                }
                            />
                        </div>
                    </div>

                    <SubmitButton
                        isSubmitting={isLoading}
                        loadingText="Verifying..."
                        onSubmit={verifyIdHandler}
                        submitText="Verify ID"
                        xtraClass="place-self-end"
                        isDisabled={
                            isLoading ||
                            isSuccess ||
                            formData.verification?.patientId
                        }
                    />
                </div>

                {isError && (
                    <div className="text-vividRed font-medium text-center">
                        {error?.message || "Patient ID could not be found!"}
                    </div>
                )}

                {isLoading && (
                    <Spinner
                        secondaryText="Loading..."
                        textClass="font-semibold"
                        borderClass="border-lightGreen"
                    />
                )}

                {(isSuccess || formData?.verification?.patientId) && (
                    <div className="space-y-10">
                        <StaticDivider />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FieldItem
                                label="First Name"
                                value={formData?.verification?.firstName}
                            />
                            <FieldItem
                                label="Middle Name"
                                value={formData?.verification?.middleName}
                            />
                            <FieldItem
                                label="Last Name"
                                value={formData?.verification?.lastName}
                            />
                            <FieldItem
                                label="Date of Birth"
                                value={
                                    formData?.verification?.dob
                                        ? new Date(
                                              formData?.verification?.dob
                                          ).toLocaleDateString()
                                        : ""
                                }
                            />
                            <FieldItem
                                label="Gender"
                                value={formData?.verification?.gender}
                            />
                            <FieldItem
                                label="Phone Number"
                                value={formData?.verification?.phone}
                            />
                            <FieldItem
                                label="Email"
                                value={formData?.verification?.email}
                            />
                            <FieldItem
                                label="Street Address"
                                value={formData?.verification?.address?.streetName}
                            />
                            <FieldItem
                                label="City"
                                value={formData?.verification?.address?.city}
                            />
                            <FieldItem
                                label="State"
                                value={formData?.verification?.address?.state}
                            />
                            <FieldItem
                                label="Zip Code"
                                value={formData?.verification?.address?.zipCode}
                            />
                        </div>
                    </div>
                )}
            </div>
        </form>
    );
};

export default VerificationStep;
