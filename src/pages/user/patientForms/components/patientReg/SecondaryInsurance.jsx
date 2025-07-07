import TextField from "../../../../../components/TextField";
import SelectField from "../../../../../components/SelectField";
import DateField from "../../../../../components/DateField";
import RadioField from "../../../../../components/RadioField";

import { relationshipOptions } from "../../data";
import { booleanOptions } from "./data";
import { insuranceNames } from "../../../appointment/data";
import { useRef } from "react";

const SecondaryInsurance = ({ formData, handleInputChange }) => {
    const fileUploadRef = useRef(null);

    // Handle image upload
    const handleFileUpload = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            handleInputChange(
                "insurance",
                "secondaryInsurance.insuranceFile",
                imageDataUrl
            );
        }
    };

    return (
        <div className="space-y-2">
            <h3 className="font-bold text-lg md:text-xl text-darkBlue">
                Secondary Insurance
            </h3>

            <div className="space-y-3">
                {/* Policy Holder */}
                <div className="space-y-2 p-4 border rounded-lg">
                    <h4 className="text-base md:text-lg font-semibold text-darkBlue">
                        Policy Holder
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <TextField
                            type="text"
                            label="First Name"
                            name="firstName"
                            placeholder="First Name"
                            section="insurance"
                            field="secondaryInsurance.policyHolder.firstName"
                            value={
                                formData.insurance.secondaryInsurance
                                    .policyHolder.firstName
                            }
                            handleInputChange={handleInputChange}
                        />
                        <TextField
                            type="text"
                            label="Middle Name"
                            name="middleName"
                            placeholder="Middle Name"
                            section="insurance"
                            field="secondaryInsurance.policyHolder.middleName"
                            value={
                                formData.insurance.secondaryInsurance
                                    .policyHolder.middleName
                            }
                            handleInputChange={handleInputChange}
                        />
                        <TextField
                            type="text"
                            label="Last Name"
                            name="lastName"
                            field="secondaryInsurance.policyHolder.lastName"
                            placeholder="Last Name"
                            section="insurance"
                            value={
                                formData.insurance.secondaryInsurance
                                    .policyHolder.lastName
                            }
                            handleInputChange={handleInputChange}
                        />
                        <TextField
                            type="text"
                            label="Phone Number"
                            name="phone"
                            field="secondaryInsurance.policyHolder.phone"
                            placeholder="Phone Number"
                            section="insurance"
                            value={
                                formData.insurance.secondaryInsurance
                                    .policyHolder.phone
                            }
                            handleInputChange={handleInputChange}
                        />
                        <DateField
                            label="Date of Birth"
                            name="dob"
                            field="secondaryInsurance.policyHolder.dob"
                            section="insurance"
                            placeholder="MM/DD/YYYY"
                            handleFormElementChange={handleInputChange}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            defaultDate={
                                formData.insurance.secondaryInsurance
                                    .policyHolder.dob
                                    ? new Date(
                                          formData.insurance.secondaryInsurance.policyHolder.dob
                                      )
                                    : null
                            }
                        />
                        <SelectField
                            label="Relationship to Patient"
                            name="relationship"
                            title="-- Select relationship --"
                            data={relationshipOptions}
                            value={
                                formData.insurance.secondaryInsurance
                                    .policyHolder.relationship
                            }
                            section="insurance"
                            field="secondaryInsurance.policyHolder.relationship"
                            handleSelectChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Insurance Provider */}
                <div className="space-y-6 p-4 border rounded-lg">
                    <h4 className="text-base md:text-lg font-semibold text-darkBlue">
                        Insurance Provider
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <SelectField
                            label="Provider Name"
                            name="name"
                            title="-- Select insurance provider --"
                            data={insuranceNames}
                            value={
                                formData.insurance.secondaryInsurance
                                    .insuranceProvider.name
                            }
                            section="insurance"
                            field="secondaryInsurance.insuranceProvider.name"
                            handleSelectChange={handleInputChange}
                        />
                        <TextField
                            type="text"
                            label="Contact Phone"
                            name="phone"
                            field="secondaryInsurance.insuranceProvider.phone"
                            placeholder="Contact Phone"
                            section="insurance"
                            value={
                                formData.insurance.secondaryInsurance
                                    .insuranceProvider.phone
                            }
                            handleInputChange={handleInputChange}
                        />
                        <TextField
                            type="text"
                            label="Policy/Member ID"
                            name="policyId"
                            field="secondaryInsurance.insuranceProvider.policyId"
                            placeholder="Policy/Member ID"
                            section="insurance"
                            value={
                                formData.insurance.secondaryInsurance
                                    .insuranceProvider.policyId
                            }
                            handleInputChange={handleInputChange}
                        />
                        <TextField
                            type="text"
                            label="Group Number"
                            name="groupNumber"
                            field="secondaryInsurance.insuranceProvider.groupNumber"
                            placeholder="Group Number"
                            section="insurance"
                            value={
                                formData.insurance.secondaryInsurance
                                    .insuranceProvider.groupNumber
                            }
                            handleInputChange={handleInputChange}
                        />
                        <TextField
                            type="text"
                            label="Authorization/Pre-Approval Number"
                            name="authorizationId"
                            field="secondaryInsurance.insuranceProvider.authorizationId"
                            placeholder="Authorization/Pre-Approval Number"
                            section="insurance"
                            value={
                                formData.insurance.secondaryInsurance
                                    .insuranceProvider.authorizationId
                            }
                            handleInputChange={handleInputChange}
                        />
                        {/* <RadioField
                            label="Do you have Coordination of Benefits"
                            name="haveCoordinationBenefits"
                            value={
                                formData.insurance.secondaryInsurance
                                    .insuranceProvider.haveCoordinationBenefits
                            }
                            section="insurance"
                            field="secondaryInsurance.insuranceProvider.haveCoordinationBenefits"
                            handleFormElementChange={handleInputChange}
                            data={booleanOptions}
                            orientation="horizontal"
                            labelClass="text-grey"
                        /> */}
                        <TextField
                            type="text"
                            label="Co-pay Amount"
                            name="coPay"
                            field="secondaryInsurance.insuranceProvider.coPay"
                            placeholder="Co-pay Amount"
                            section="insurance"
                            value={
                                formData.insurance.secondaryInsurance
                                    .insuranceProvider.coPay
                            }
                            handleInputChange={handleInputChange}
                        />
                        <DateField
                            label="Coverage Start Date"
                            name="coverageStartDate"
                            field="secondaryInsurance.policyHolder.coverageStartDate"
                            section="insurance"
                            placeholder="MM/DD/YYYY"
                            handleFormElementChange={handleInputChange}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            defaultDate={
                                formData.insurance.secondaryInsurance
                                    .policyHolder.coverageStartDate
                                    ? new Date(
                                          formData.insurance.secondaryInsurance.policyHolder.coverageStartDate
                                      )
                                    : null
                            }
                        />
                        <DateField
                            label="Coverage End Date"
                            name="coverageEndDate"
                            field="secondaryInsurance.policyHolder.coverageEndDate"
                            section="insurance"
                            placeholder="MM/DD/YYYY"
                            handleFormElementChange={handleInputChange}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            defaultDate={
                                formData.insurance.secondaryInsurance
                                    .policyHolder.coverageEndDate
                                    ? new Date(
                                          formData.insurance.secondaryInsurance.policyHolder.coverageEndDate
                                      )
                                    : null
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <h4 className="text-sm md:text-base font-semibold text-darkBlue">
                            Address
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <TextField
                                type="text"
                                label="Street Name"
                                name="streetName"
                                field="secondaryInsurance.insuranceProvider.address.streetName"
                                placeholder="Street Name"
                                section="insurance"
                                value={
                                    formData.insurance.secondaryInsurance
                                        .insuranceProvider.address.streetName
                                }
                                handleInputChange={handleInputChange}
                            />
                            <TextField
                                type="text"
                                label="City"
                                name="city"
                                field="secondaryInsurance.insuranceProvider.address.city"
                                placeholder="City"
                                section="insurance"
                                value={
                                    formData.insurance.secondaryInsurance
                                        .insuranceProvider.address.city
                                }
                                handleInputChange={handleInputChange}
                            />
                            <TextField
                                type="text"
                                label="State"
                                name="state"
                                field="secondaryInsurance.insuranceProvider.address.state"
                                placeholder="State"
                                section="insurance"
                                value={
                                    formData.insurance.secondaryInsurance
                                        .insuranceProvider.address.state
                                }
                                handleInputChange={handleInputChange}
                            />
                            <TextField
                                type="text"
                                label="Zip Code"
                                name="zipCode"
                                field="secondaryInsurance.insuranceProvider.address.zipCode"
                                placeholder="Zip Code"
                                section="insurance"
                                value={
                                    formData.insurance.secondaryInsurance
                                        .insuranceProvider.address.zipCode
                                }
                                handleInputChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="" className="text-deepGrey">
                            Upload Insurance Card
                        </label>

                        <input
                            type="file"
                            name="insuranceFile"
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="block text-deepGrey border rounded-md w-full p-3"
                            ref={fileUploadRef}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondaryInsurance;
