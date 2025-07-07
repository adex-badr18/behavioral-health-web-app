import FieldItem from "../../../../components/FieldItem";
import Section from "./Section";
import { convertToUSDateTime } from "../../utils";
import { convertBooleanToText } from "../../../utils";
import { useMemo } from "react";

const GeneralTab = ({ patient }) => {
    if (!patient) {
        return <div className="text-center">No patient information</div>;
    }

    // console.log(patient);
    const { primaryInsurance, secondaryInsurance } = useMemo(() => {
        return {
            primaryInsurance:
                patient?.paymentStructure?.insurances?.filter(
                    (insurance) => !!insurance.primary
                )[0] || {},
            secondaryInsurance:
                patient?.paymentStructure?.insurances?.filter(
                    (insurance) => !insurance.primary
                )[0] || {},
        };
    }, [patient]);

    // const primaryInsurance = patient?.paymentStructure?.insurances[0]

    // console.log(patient);
    // console.log(primaryInsurance);
    // console.log(secondaryInsurance);

    return (
        <div className="">
            <Section title="Personal Information">
                <FieldItem label="Patient ID" value={patient.patientId} />

                <FieldItem
                    label="First Name"
                    value={patient.personalInfo.firstName}
                />
                <FieldItem
                    label="Middle Initial"
                    value={patient.personalInfo.middleName}
                />
                <FieldItem
                    label="Last Name"
                    value={patient.personalInfo.lastName}
                />
                <FieldItem
                    label="Date of Birth"
                    value={patient.personalInfo.dob}
                />
                <FieldItem
                    label="Marital Status"
                    value={patient.personalInfo.maritalStatus}
                />
                <FieldItem
                    label="Cell Phone"
                    value={patient.personalInfo.cellPhone}
                />
                <FieldItem label="Email" value={patient.personalInfo.email} />
                <FieldItem
                    label="Social Security Number"
                    value={patient.personalInfo.socialSecurityNumber}
                />
                <FieldItem
                    label="Address"
                    value={patient.personalInfo.address.streetName}
                />
                <FieldItem
                    label="City"
                    value={patient.personalInfo.address.city}
                />
                <FieldItem
                    label="State"
                    value={patient.personalInfo.address.state}
                />
                <FieldItem
                    label="Zip Code"
                    value={patient.personalInfo.address.zipCode}
                />
                <FieldItem label="Gender" value={patient.personalInfo.gender} />
                <FieldItem
                    label="Home Phone"
                    value={patient.personalInfo.homePhone}
                />
                <FieldItem
                    label="Work Phone"
                    value={patient.personalInfo.workPhone}
                />
                <FieldItem
                    label="Preferred Phone"
                    value={patient.personalInfo.preferredPhone}
                />
                <FieldItem
                    label="Leave message on home phone?"
                    value={convertBooleanToText(
                        patient.personalInfo.sendMsgToHomePhone
                    )}
                />
                <FieldItem
                    label="Leave message with relatives?"
                    value={convertBooleanToText(
                        patient.personalInfo.sendMsgToRelative
                    )}
                />
                <FieldItem
                    label="Leave message on work phone?"
                    value={convertBooleanToText(
                        patient.personalInfo.sendMsgToWork
                    )}
                />
                <FieldItem
                    label="Leave message on cell phone?"
                    value={convertBooleanToText(
                        patient.personalInfo.sendMsgToCellPhone
                    )}
                />
                <FieldItem
                    label="Appointment Reminder Mode"
                    value={patient.personalInfo.appointmentReminderMode}
                />
                <FieldItem
                    label="Highest Level of Education"
                    value={patient.personalInfo.highestEduLevel}
                />
                <FieldItem
                    label="Employment Status"
                    value={patient.personalInfo.employmentStatus}
                />
                <FieldItem
                    label="Employer"
                    value={patient.personalInfo.employer}
                />
                <FieldItem
                    label="Occupation"
                    value={patient.personalInfo.occupation}
                />
                <FieldItem
                    label="Religion"
                    value={patient.personalInfo.religion}
                />
                <FieldItem
                    label="Ethnicity"
                    value={patient.personalInfo.ethnicity}
                />
                <FieldItem label="Race" value={patient.personalInfo.race} />
                <FieldItem
                    label="Preferred Language"
                    value={patient.personalInfo.preferredLanguage}
                />
            </Section>

            <Section title="Guarantor">
                <FieldItem
                    label="First Name"
                    value={patient.guarantor.firstName}
                />
                <FieldItem
                    label="Last Name"
                    value={patient.guarantor.lastName}
                />
                <FieldItem
                    label="Date of Birth"
                    value={patient.guarantor.dob}
                />
                <FieldItem
                    label="Relationship"
                    value={patient.guarantor.relationship}
                />
                <FieldItem
                    label="Phone Number"
                    value={patient.guarantor.phone}
                />
                <FieldItem label="Email" value={patient.guarantor.email} />
                <FieldItem
                    label="Address"
                    value={patient.guarantor.address.streetName}
                />
                <FieldItem
                    label="City"
                    value={patient.guarantor.address.city}
                />
                <FieldItem
                    label="State"
                    value={patient.guarantor.address.state}
                />
                <FieldItem
                    label="Zip Code"
                    value={patient.guarantor.address.zipCode}
                />
                <FieldItem
                    label="State Issued ID"
                    src={patient.guarantor.stateIssuedId}
                />
                <FieldItem
                    label="Insurance Card"
                    src={patient.guarantor.insuranceCard}
                />
            </Section>

            <Section title="Parent/Guardian">
                <FieldItem
                    label="First Name"
                    value={patient.parentGuardian.firstName}
                />
                <FieldItem
                    label="Last Name"
                    value={patient.parentGuardian.lastName}
                />
                <FieldItem
                    label="Gender"
                    value={patient.parentGuardian.gender}
                />
                <FieldItem
                    label="Marital Status"
                    value={patient.parentGuardian.maritalStatus}
                />
                <FieldItem
                    label="Phone Number"
                    value={patient.parentGuardian.phone}
                />
                <FieldItem label="Email" value={patient.parentGuardian.email} />
                <FieldItem
                    label="Family Role"
                    value={patient.parentGuardian.familyRole}
                />
                <FieldItem
                    label="Employment Status"
                    value={patient.parentGuardian.employmentStatus}
                />
                <FieldItem
                    label="Employer"
                    value={patient.parentGuardian.employer}
                />
                <FieldItem
                    label="Occupation"
                    value={patient.parentGuardian.occupation}
                />
                <FieldItem
                    label="Address"
                    value={patient.parentGuardian.address.streetName}
                />
                <FieldItem
                    label="City"
                    value={patient.parentGuardian.address.city}
                />
                <FieldItem
                    label="State"
                    value={patient.parentGuardian.address.state}
                />
                <FieldItem
                    label="Zip Code"
                    value={patient.parentGuardian.address.zipCode}
                />
            </Section>

            <Section title="Emergency">
                <FieldItem
                    label="First Name"
                    value={patient.emergency.firstName}
                />
                <FieldItem
                    label="Last Name"
                    value={patient.emergency.lastName}
                />
                <FieldItem
                    label="Home Phone"
                    value={patient.emergency.homePhone}
                />
                <FieldItem
                    label="Cell Phone"
                    value={patient.emergency.cellPhone}
                />
                <FieldItem label="Email" value={patient.emergency.email} />
                <FieldItem
                    label="Relationship"
                    value={patient.emergency.relationship}
                />
                <FieldItem
                    label="Address"
                    value={patient.emergency.address.streetName}
                />
                <FieldItem
                    label="City"
                    value={patient.emergency.address.city}
                />
                <FieldItem
                    label="State"
                    value={patient.emergency.address.state}
                />
                <FieldItem
                    label="Zip Code"
                    value={patient.emergency.address.zipCode}
                />
            </Section>

            <div className="bg-offWhite p-4 rounded-lg shadow-md mb-6 space-y-4">
                <h2 className="text-lg font-semibold mb-2">Insurance</h2>
                <FieldItem
                    label="Payment Method"
                    value={patient?.paymentStructure?.paymentMode}
                />

                {!patient?.paymentStructure?.insurances ? (
                    <p className="text-deepGrey">
                        Insurance information is not available
                    </p>
                ) : (
                    <div>
                        {Object.keys(primaryInsurance).length !== 0 ? (
                            <div>
                                <h2 className="text-lg font-semibold mt-4 md:mt-8 mb-2">
                                    Primary Insurance
                                </h2>
                                <div className="">
                                    <h3 className="text-base font-medium mb-2">
                                        Policy Holder
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        <FieldItem
                                            label="First Name"
                                            value={
                                                primaryInsurance?.policyHolder
                                                    ?.firstName
                                            }
                                        />
                                        <FieldItem
                                            label="Middle Name"
                                            value={
                                                primaryInsurance?.policyHolder
                                                    ?.middleName
                                            }
                                        />
                                        <FieldItem
                                            label="Last Name"
                                            value={
                                                primaryInsurance?.policyHolder
                                                    ?.lastName
                                            }
                                        />
                                        <FieldItem
                                            label="Relationship"
                                            value={
                                                primaryInsurance?.policyHolder
                                                    ?.relationship
                                            }
                                        />
                                        <FieldItem
                                            label="Phone Number"
                                            value={
                                                primaryInsurance?.policyHolder
                                                    ?.phone
                                            }
                                        />
                                        <FieldItem
                                            label="Date of Birth"
                                            value={
                                                primaryInsurance?.policyHolder
                                                    ?.dob
                                            }
                                        />
                                    </div>

                                    <h3 className="text-base font-medium mt-4 md:mt-8 mb-2">
                                        Insurance Provider
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FieldItem
                                            label="Name"
                                            value={
                                                primaryInsurance
                                                    ?.insuranceProvider?.name
                                            }
                                        />
                                        <FieldItem
                                            label="Phone Number"
                                            value={
                                                primaryInsurance
                                                    ?.insuranceProvider?.phone
                                            }
                                        />
                                        <FieldItem
                                            label="Policy ID"
                                            value={
                                                primaryInsurance
                                                    ?.insuranceProvider
                                                    ?.policyId
                                            }
                                        />
                                        <FieldItem
                                            label="Group Number"
                                            value={
                                                primaryInsurance
                                                    ?.insuranceProvider
                                                    ?.lastName
                                            }
                                        />
                                        <FieldItem
                                            label="Authorization ID"
                                            value={
                                                primaryInsurance
                                                    ?.insuranceProvider
                                                    ?.authorizationId
                                            }
                                        />
                                        <FieldItem
                                            label="Co-Pay"
                                            value={
                                                primaryInsurance
                                                    ?.insuranceProvider?.coPay
                                            }
                                        />
                                        <FieldItem
                                            label="Coverage Start Date"
                                            value={
                                                primaryInsurance
                                                    ?.insuranceProvider
                                                    ?.coverageStartDate
                                            }
                                        />
                                        <FieldItem
                                            label="Coverage End Date"
                                            value={
                                                primaryInsurance
                                                    ?.insuranceProvider
                                                    ?.coverageEndDate
                                            }
                                        />
                                        <FieldItem
                                            label="Address"
                                            value={
                                                primaryInsurance
                                                    ?.insuranceProvider?.address
                                                    ?.streetName
                                            }
                                        />
                                        <FieldItem
                                            label="City"
                                            value={
                                                primaryInsurance
                                                    ?.insuranceProvider?.address
                                                    ?.city
                                            }
                                        />
                                        <FieldItem
                                            label="State"
                                            value={
                                                primaryInsurance
                                                    ?.insuranceProvider?.address
                                                    ?.state
                                            }
                                        />
                                        <FieldItem
                                            label="Zip Code"
                                            value={
                                                primaryInsurance
                                                    ?.insuranceProvider?.address
                                                    ?.zipCode
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p>Primary insurance is not available</p>
                        )}

                        {Object.keys(primaryInsurance).length !== 0 ? (
                            <div className="bg-offWhite p-4 rounded-lg shadow-md mb-6">
                                <h2 className="text-lg font-semibold mb-2">
                                    Secondary Insurance
                                </h2>
                                <div className="">
                                    <h3 className="text-base font-medium mb-2">
                                        Policy Holder
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        <FieldItem
                                            label="First Name"
                                            value={
                                                secondaryInsurance?.policyHolder
                                                    ?.firstName
                                            }
                                        />
                                        <FieldItem
                                            label="Middle Name"
                                            value={
                                                secondaryInsurance?.policyHolder
                                                    ?.middleName
                                            }
                                        />
                                        <FieldItem
                                            label="Last Name"
                                            value={
                                                secondaryInsurance?.policyHolder
                                                    ?.lastName
                                            }
                                        />
                                        <FieldItem
                                            label="Relationship"
                                            value={
                                                secondaryInsurance?.policyHolder
                                                    ?.relationship
                                            }
                                        />
                                        <FieldItem
                                            label="Phone Number"
                                            value={
                                                secondaryInsurance?.policyHolder
                                                    ?.phone
                                            }
                                        />
                                        <FieldItem
                                            label="Date of Birth"
                                            value={
                                                secondaryInsurance?.policyHolder
                                                    ?.dob
                                            }
                                        />
                                    </div>

                                    <h3 className="text-base font-medium mb-2">
                                        Insurance Provider
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        <FieldItem
                                            label="Name"
                                            value={
                                                secondaryInsurance
                                                    ?.insuranceProvider?.name
                                            }
                                        />
                                        <FieldItem
                                            label="Phone Number"
                                            value={
                                                secondaryInsurance
                                                    ?.insuranceProvider?.phone
                                            }
                                        />
                                        <FieldItem
                                            label="Policy ID"
                                            value={
                                                secondaryInsurance
                                                    ?.insuranceProvider
                                                    ?.policyId
                                            }
                                        />
                                        <FieldItem
                                            label="Group Number"
                                            value={
                                                secondaryInsurance
                                                    ?.insuranceProvider
                                                    ?.lastName
                                            }
                                        />
                                        <FieldItem
                                            label="Authorization ID"
                                            value={
                                                secondaryInsurance
                                                    ?.insuranceProvider
                                                    ?.authorizationId
                                            }
                                        />
                                        <FieldItem
                                            label="Co-Pay"
                                            value={
                                                secondaryInsurance
                                                    ?.insuranceProvider?.coPay
                                            }
                                        />
                                        <FieldItem
                                            label="Coverage Start Date"
                                            value={
                                                secondaryInsurance
                                                    ?.insuranceProvider
                                                    ?.coverageStartDate
                                            }
                                        />
                                        <FieldItem
                                            label="Coverage End Date"
                                            value={
                                                secondaryInsurance
                                                    ?.insuranceProvider
                                                    ?.coverageEndDate
                                            }
                                        />
                                        {/* <FieldItem
                                label="Have Coordination of Benefits?"
                                value={
                                    secondaryInsurance.insuranceProvider
                                        .haveCoordinationBenefits
                                }
                            /> */}
                                        <FieldItem
                                            label="Address"
                                            value={
                                                secondaryInsurance
                                                    ?.insuranceProvider?.address
                                                    ?.streetName
                                            }
                                        />
                                        <FieldItem
                                            label="City"
                                            value={
                                                secondaryInsurance
                                                    ?.insuranceProvider?.address
                                                    ?.city
                                            }
                                        />
                                        <FieldItem
                                            label="State"
                                            value={
                                                secondaryInsurance
                                                    ?.insuranceProvider?.address
                                                    ?.state
                                            }
                                        />
                                        <FieldItem
                                            label="Zip Code"
                                            value={
                                                secondaryInsurance
                                                    ?.insuranceProvider?.address
                                                    ?.zipCode
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p>Secondary insurance is not available</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GeneralTab;
