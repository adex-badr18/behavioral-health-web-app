import { useState } from "react";
import TextField from "../../../../../components/TextField";
import SelectField from "../../../../../components/SelectField";
import DateField from "../../../../../components/DateField";
import SecondaryInsurance from "./SecondaryInsurance";

import { TbLibraryMinus, TbLibraryPlus } from "react-icons/tb";

import { paymentMethods, insuranceNames } from "../../../appointment/data";
import { relationshipOptions } from "../../data";

import { clearObjectValues } from "../../utils";

const InsuranceForm = ({ formData, handleInputChange }) => {
    const [showSecondaryInsurance, setShowSecondaryInsurance] = useState(false);

    const secondaryInsuranceHandler = (e) => {
        e.preventDefault();

        if (showSecondaryInsurance) {
            clearObjectValues(formData.insurance.secondaryInsurance);
        }

        setShowSecondaryInsurance(!showSecondaryInsurance);
    };

    // console.log(formData.insurance);

    return (
        <form className="space-y-5">
            <div className="flex flex-col gap-4">
                <h3 className="text-lg md:text-xl font-bold text-deepGrey">
                    How do you plan to pay for our service?
                </h3>

                <SelectField
                    label="Payment Mode"
                    name="paymentMode"
                    title="-- Select a mode --"
                    data={paymentMethods}
                    value={formData.insurance.paymentMode}
                    section="insurance"
                    field="paymentMode"
                    handleSelectChange={handleInputChange}
                />
            </div>

            {/* {formData.insurance.paymentMethod.toLowerCase() ===
                "insurance card" && <StaticDivider />} */}

            {formData.insurance.paymentMode.toLowerCase() ===
                "insurance card" && (
                <div className="space-y-6">
                    <div className="flex items-center justify-center flex-wrap gap-1">
                        {insuranceNames.map((insurance) => (
                            <img
                                key={insurance.id}
                                src={insurance.logo}
                                alt=""
                                className="w-20 h-auto"
                            />
                        ))}
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-lg md:text-xl text-darkBlue">
                            Primary Insurance
                        </h3>

                        <div className="space-y-6">
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
                                        field="primaryInsurance.policyHolder.firstName"
                                        value={
                                            formData.insurance.primaryInsurance
                                                .policyHolder.firstName
                                        }
                                        handleInputChange={handleInputChange}
                                    />
                                    <TextField
                                        type="text"
                                        label="Middle Initial"
                                        name="middleName"
                                        placeholder="Middle Initial"
                                        section="insurance"
                                        field="primaryInsurance.policyHolder.middleName"
                                        value={
                                            formData.insurance.primaryInsurance
                                                .policyHolder.middleName
                                        }
                                        handleInputChange={handleInputChange}
                                    />
                                    <TextField
                                        type="text"
                                        label="Last Name"
                                        name="lastName"
                                        field="primaryInsurance.policyHolder.lastName"
                                        placeholder="Last Name"
                                        section="insurance"
                                        value={
                                            formData.insurance.primaryInsurance
                                                .policyHolder.lastName
                                        }
                                        handleInputChange={handleInputChange}
                                    />
                                    <TextField
                                        type="text"
                                        label="Phone Number"
                                        name="phone"
                                        field="primaryInsurance.policyHolder.phone"
                                        placeholder="Phone Number"
                                        section="insurance"
                                        value={
                                            formData.insurance.primaryInsurance
                                                .policyHolder.phone
                                        }
                                        handleInputChange={handleInputChange}
                                    />
                                    <DateField
                                        label="Date of Birth"
                                        name="dob"
                                        field="primaryInsurance.policyHolder.dob"
                                        section="insurance"
                                        placeholder="MM/DD/YYYY"
                                        handleFormElementChange={
                                            handleInputChange
                                        }
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        defaultDate={
                                            formData.insurance.primaryInsurance
                                                .policyHolder.dob
                                        }
                                    />
                                    <SelectField
                                        label="Relationship to Patient"
                                        name="relationship"
                                        title="-- Select relationship --"
                                        data={relationshipOptions}
                                        value={
                                            formData.insurance.primaryInsurance
                                                .policyHolder.relationship
                                        }
                                        section="insurance"
                                        field="primaryInsurance.policyHolder.relationship"
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
                                            formData.insurance.primaryInsurance
                                                .insuranceProvider.name
                                        }
                                        section="insurance"
                                        field="primaryInsurance.insuranceProvider.name"
                                        handleSelectChange={handleInputChange}
                                    />                                
                                    <TextField
                                        type="text"
                                        label="Contact Phone"
                                        name="phone"
                                        field="primaryInsurance.insuranceProvider.phone"
                                        placeholder="Contact Phone"
                                        section="insurance"
                                        value={
                                            formData.insurance.primaryInsurance
                                                .insuranceProvider.phone
                                        }
                                        handleInputChange={handleInputChange}
                                    />
                                    <TextField
                                        type="text"
                                        label="Policy/Member ID"
                                        name="policyId"
                                        field="primaryInsurance.insuranceProvider.policyId"
                                        placeholder="Policy/Member ID"
                                        section="insurance"
                                        value={
                                            formData.insurance.primaryInsurance
                                                .insuranceProvider.policyId
                                        }
                                        handleInputChange={handleInputChange}
                                    />
                                    <TextField
                                        type="text"
                                        label="Group Number"
                                        name="groupNumber"
                                        field="primaryInsurance.insuranceProvider.groupNumber"
                                        placeholder="Group Number"
                                        section="insurance"
                                        value={
                                            formData.insurance.primaryInsurance
                                                .insuranceProvider.groupNumber
                                        }
                                        handleInputChange={handleInputChange}
                                    />
                                    <TextField
                                        type="text"
                                        label="Authorization/Pre-Approval Number"
                                        name="authorizationId"
                                        field="primaryInsurance.insuranceProvider.authorizationId"
                                        placeholder="Authorization/Pre-Approval Number"
                                        section="insurance"
                                        value={
                                            formData.insurance.primaryInsurance
                                                .insuranceProvider
                                                .authorizationId
                                        }
                                        handleInputChange={handleInputChange}
                                    />
                                    <TextField
                                        type="text"
                                        label="Co-pay Amount"
                                        name="coPay"
                                        field="primaryInsurance.insuranceProvider.coPay"
                                        placeholder="Co-pay Amount"
                                        section="insurance"
                                        value={
                                            formData.insurance.primaryInsurance
                                                .insuranceProvider.coPay
                                        }
                                        handleInputChange={handleInputChange}
                                    />
                                    <DateField
                                        label="Coverage Start Date"
                                        name="coverageStartDate"
                                        field="primaryInsurance.insuranceProvider.coverageStartDate"
                                        section="insurance"
                                        placeholder="MM/DD/YYYY"
                                        handleFormElementChange={
                                            handleInputChange
                                        }
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        defaultDate={
                                            formData.insurance.primaryInsurance
                                                .insuranceProvider
                                                .coverageStartDate
                                        }
                                    />
                                    <DateField
                                        label="Coverage End Date"
                                        name="coverageEndDate"
                                        field="primaryInsurance.insuranceProvider.coverageEndDate"
                                        section="insurance"
                                        placeholder="MM/DD/YYYY"
                                        handleFormElementChange={
                                            handleInputChange
                                        }
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        defaultDate={
                                            formData.insurance.primaryInsurance
                                                .insuranceProvider
                                                .coverageEndDate
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
                                            field="primaryInsurance.insuranceProvider.address.streetName"
                                            placeholder="Street Name"
                                            section="insurance"
                                            value={
                                                formData.insurance
                                                    .primaryInsurance
                                                    .insuranceProvider.address
                                                    .streetName
                                            }
                                            handleInputChange={
                                                handleInputChange
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="City"
                                            name="city"
                                            field="primaryInsurance.insuranceProvider.address.city"
                                            placeholder="City"
                                            section="insurance"
                                            value={
                                                formData.insurance
                                                    .primaryInsurance
                                                    .insuranceProvider.address
                                                    .city
                                            }
                                            handleInputChange={
                                                handleInputChange
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="State"
                                            name="state"
                                            field="primaryInsurance.insuranceProvider.address.state"
                                            placeholder="State"
                                            section="insurance"
                                            value={
                                                formData.insurance
                                                    .primaryInsurance
                                                    .insuranceProvider.address
                                                    .state
                                            }
                                            handleInputChange={
                                                handleInputChange
                                            }
                                        />
                                        <TextField
                                            type="text"
                                            label="Zip Code"
                                            name="zipCode"
                                            field="primaryInsurance.insuranceProvider.address.zipCode"
                                            placeholder="Zip Code"
                                            section="insurance"
                                            value={
                                                formData.insurance
                                                    .primaryInsurance
                                                    .insuranceProvider.address
                                                    .zipCode
                                            }
                                            handleInputChange={
                                                handleInputChange
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <button
                            onClick={secondaryInsuranceHandler}
                            className={`${
                                showSecondaryInsurance
                                    ? "text-vividRed"
                                    : "text-darkBlue"
                            } flex items-center gap-2`}
                        >
                            {showSecondaryInsurance ? (
                                <TbLibraryMinus />
                            ) : (
                                <TbLibraryPlus />
                            )}
                            <span className="underline">
                                {showSecondaryInsurance
                                    ? "Remove Secondary Insurance"
                                    : "Add Secondary Insurance"}
                            </span>
                        </button>
                    </div>

                    {/* Secondary Insurance */}
                    {showSecondaryInsurance && (
                        <SecondaryInsurance
                            formData={formData}
                            handleInputChange={handleInputChange}
                        />
                    )}
                </div>
            )}
        </form>
    );
};

export default InsuranceForm;
