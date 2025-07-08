import { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import StaticDivider from "../../../../components/StaticDivider";
import SelectField from "../../../../components/SelectField";
import TextField from "../../../../components/TextField";
import DateField from "../../../../components/DateField";
import FieldItem from "../../../../components/FieldItem";
import Spinner from "../../../../components/Spinner";
import { booleanOptions, genderOptions } from "../../patientForms/data";
import { useFetchBasicPatient } from "../../../../hooks/usePatients";
import { useToast } from "../../../../components/ToastContext";
import SubmitButton from "../../../../components/SubmitButton";
import IdField from "../../patientForms/components/patientReg/IdField";

const PersonalInfoForm = ({ formData, handleInputChange, setFormData }) => {
    const { showToast } = useToast();
    const [patientId, setPatientId] = useState(
        formData.personal?.patientId || ""
    );
    const { refetch, isLoading, isSuccess, isError, error, data } =
        useFetchBasicPatient(patientId);

    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            personal: { ...prev.personal, ...data },
        }));
    }, [data]);

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

            if (response?.data) {
                showToast({
                    message: `Verification successful!`,
                    type: "success",
                    duration: 5000,
                });
                setFormData((prev) => ({
                    ...prev,
                    personal: {
                        ...formData.personal,
                        ...response.data,
                        verificationStatus: "success",
                    },
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
        <div className="space-y-6">
            <div className="space-y-2 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-darkBlue">
                    Welcome to BrightLife
                </h3>
                <p className=" text-deepGrey">
                    Let us help you take the first step toward healing and
                    renewed purpose.
                </p>

                <p
                    aria-label="All fields marked asterik (*) are required"
                    className="text-sm text-vividRed font-bold text-center"
                >
                    All fields marked (*) are required.
                </p>
            </div>

            <div className="space-y-4 md:space-y-8">
                {(!formData.personal.patientId || !isSuccess) && (
                    <SelectField
                        label="Are you a new patient?"
                        name="isNew"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.personal.isNew}
                        section="personal"
                        field="isNew"
                        handleSelectChange={handleInputChange}
                        isRequired={true}
                    />
                )}

                {formData.personal.isNew.toLowerCase() === "no" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        <div className="col-span-2 space-y-1">
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
                                id="patientId"
                                name="patientId"
                                className="input bg-gray-100"
                                placeholder="Patient ID"
                                value={patientId}
                                onChange={(e) => setPatientId(e.target.value)}
                                readOnly={
                                    isSuccess || formData.personal.patientId
                                }
                            />
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
                                formData.personal.patientId
                            }
                        />
                    </div>
                )}

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

                {(isSuccess || formData.personal.patientId) && (
                    <div className="space-y-10">
                        <StaticDivider />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FieldItem
                                label="First Name"
                                value={formData.personal.firstName}
                                isRequired={true}
                            />
                            <FieldItem
                                label="Middle Name"
                                value={formData.personal.middleName}
                                isRequired={true}
                            />
                            <FieldItem
                                label="Last Name"
                                value={formData.personal.lastName}
                                isRequired={true}
                            />
                            <FieldItem
                                label="Date of Birth"
                                value={
                                    formData.personal.dob
                                        ? new Date(
                                              formData.personal.dob
                                          ).toLocaleDateString()
                                        : "N/A"
                                }
                                isRequired={true}
                            />
                            {/* <FieldItem
                                label="Gender"
                                value={formData.personal.gender}
                                isRequired={true}
                            /> */}
                            <FieldItem
                                label="Phone Number"
                                value={formData.personal.phone}
                                isRequired={true}
                            />
                            <FieldItem
                                label="Email"
                                value={formData.personal.email}
                                isRequired={true}
                            />
                            <FieldItem
                                label="Street Address"
                                value={formData.personal.address.streetName}
                                isRequired={true}
                            />
                            <FieldItem
                                label="City"
                                value={formData.personal.address.city}
                                isRequired={true}
                            />
                            <FieldItem
                                label="State"
                                value={formData.personal.address.state}
                                isRequired={true}
                            />
                            <FieldItem
                                label="Zip Code"
                                value={formData.personal.address.zipCode}
                                isRequired={true}
                            />
                        </div>
                    </div>
                )}
            </div>

            {formData.personal.isNew.toLowerCase() === "yes" && (
                <form className="space-y-10">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg md:text-xl font-medium text-deepGrey">
                            Tell us a little about you
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <TextField
                                type="text"
                                label="First Name"
                                name="firstName"
                                placeholder="First Name"
                                section="personal"
                                field="firstName"
                                value={formData.personal.firstName}
                                handleInputChange={handleInputChange}
                                isRequired={true}
                            />
                            <TextField
                                type="text"
                                label="Middle Name"
                                name="middleName"
                                placeholder="Middle Name"
                                section="personal"
                                field="middleName"
                                value={formData.personal.middleName}
                                handleInputChange={handleInputChange}
                            />
                            <TextField
                                type="text"
                                label="Last Name"
                                name="lastName"
                                field="lastName"
                                placeholder="Last Name"
                                section="personal"
                                value={formData.personal.lastName}
                                handleInputChange={handleInputChange}
                                isRequired={true}
                            />

                            <SelectField
                                label="Gender"
                                name="gender"
                                title="-- Select Gender --"
                                data={genderOptions}
                                value={formData.personal.gender}
                                section="personal"
                                field="gender"
                                handleSelectChange={handleInputChange}
                                isRequired={true}
                            />
                            <DateField
                                label="Date of Birth"
                                name="dob"
                                field="dob"
                                section="personal"
                                placeholder="MM/DD/YYYY"
                                handleFormElementChange={handleInputChange}
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                defaultDate={
                                    formData.personal.dob
                                        ? new Date(formData.personal.dob)
                                        : ""
                                }
                                isRequired={true}
                            />
                        </div>
                    </div>

                    <StaticDivider />

                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg md:text-xl font-medium text-deepGrey">
                            Your contact Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <TextField
                                type="text"
                                label="Phone Number"
                                name="phone"
                                field="phone"
                                placeholder="Phone Number"
                                section="personal"
                                value={formData.personal.phone}
                                handleInputChange={handleInputChange}
                                isRequired={true}
                            />
                            <TextField
                                type="email"
                                label="Email Address"
                                name="email"
                                field="email"
                                placeholder="Email Address"
                                section="personal"
                                value={formData.personal.email}
                                handleInputChange={handleInputChange}
                                isRequired={true}
                            />

                            {/* <div className="col-span-2">
                                <IdField
                                    field="patientId"
                                    handleFormChange={handleInputChange}
                                    section="personal"
                                    isRequired={true}
                                    formData={formData}
                                />
                            </div> */}

                            <TextField
                                type="text"
                                label="Street Address"
                                name="street"
                                field="address.streetName"
                                placeholder="Street Address"
                                section="personal"
                                value={formData.personal.address.streetName}
                                handleInputChange={handleInputChange}
                            />
                            <TextField
                                type="text"
                                label="City"
                                name="city"
                                field="address.city"
                                placeholder="City"
                                section="personal"
                                value={formData.personal.address.city}
                                handleInputChange={handleInputChange}
                            />
                            <TextField
                                type="text"
                                label="State"
                                name="state"
                                field="address.state"
                                placeholder="State"
                                section="personal"
                                value={formData.personal.address.state}
                                handleInputChange={handleInputChange}
                            />
                            <TextField
                                type="text"
                                label="Zip Code"
                                name="zipCode"
                                field="address.zipCode"
                                placeholder="Zip Code"
                                section="personal"
                                value={formData.personal.address.zipCode}
                                handleInputChange={handleInputChange}
                            />
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default PersonalInfoForm;
