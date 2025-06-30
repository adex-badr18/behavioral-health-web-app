import TextField from "../../../../../components/TextField";
import SelectField from "../../../../../components/SelectField";
import DateField from "../../../../../components/DateField";

import {
    genderOptions,
    maritalStatusOptions,
    booleanOptions,
    appointmentReminderModeOptions,
    employmentOptions,
    raceOptions,
    ethnicityOptions,
    religionOptions,
    educationOptions,
    langOptions,
    preferredPhoneOptions,
} from "../../data";
import IdField from "./IdField";

const PersonalStep = ({ formData, handleInputChange }) => {
    const newPatientData = {
        firstName: formData.personal.firstName,
        lastName: formData.personal.lastName,
        email: formData.personal.email,
    };

    return (
        <form className="space-y-4 md:space-y-8">
            <div className="space-y-4 md:space-y-8">
                <div className="space-y-2">
                    <h3 className="font-bold text-xl text-darkBlue text-center">
                        Getting to know you
                    </h3>

                    <p
                        aria-label="All fields marked asterik (*) are required"
                        className="text-sm text-vividRed font-bold text-center"
                    >
                        All fields marked (*) are required.
                    </p>
                </div>
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
                        label="Middle Initial"
                        name="middleName"
                        placeholder="Middle Initial"
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

                    <TextField
                        type="text"
                        label="Phone Number"
                        name="cellPhone"
                        field="cellPhone"
                        placeholder="Phone Number"
                        section="personal"
                        value={formData.personal.cellPhone}
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

                    {/* <SelectField
                        label="Gender"
                        name="gender"
                        title="-- Select Gender --"
                        data={genderOptions}
                        value={formData.personal.gender}
                        section="personal"
                        field="gender"
                        handleSelectChange={handleInputChange}
                        isRequired={true}
                    /> */}
                    <SelectField
                        label="Marital Status"
                        name="maritalStatus"
                        title="-- Select an option --"
                        data={maritalStatusOptions}
                        value={formData.personal.maritalStatus}
                        section="personal"
                        field="maritalStatus"
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
                                : null
                        }
                        isRequired={true}
                    />
                    <TextField
                        type="text"
                        label="Social Security Number"
                        name="socialSecurityNumber"
                        field="socialSecurityNumber"
                        placeholder="Social Security Number"
                        section="personal"
                        value={formData.personal.socialSecurityNumber}
                        handleInputChange={handleInputChange}
                    />
                </div>
            </div>

            {/* <IdField
                field="patientId"
                handleFormChange={handleInputChange}
                section="identification"
                isRequired={true}
                formData={formData}
            /> */}

            {/* <div className="space-y-4 md:space-y-8">
                <h3 className="font-bold text-xl text-darkBlue">Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <TextField
                        type="text"
                        label="Cell Phone"
                        name="cellPhone"
                        field="cellPhone"
                        placeholder="Cell Phone"
                        section="personal"
                        value={formData.personal.cellPhone}
                        handleInputChange={handleInputChange}
                        isRequired={true}
                    />
                    <TextField
                        type="text"
                        label="Home Phone"
                        name="homePhone"
                        field="homePhone"
                        placeholder="Home Phone"
                        section="personal"
                        value={formData.personal.homePhone}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="Work Phone"
                        name="workPhone"
                        field="workPhone"
                        placeholder="Work Phone"
                        section="personal"
                        value={formData.personal.workPhone}
                        handleInputChange={handleInputChange}
                    />
                    <SelectField
                        label="Preferred Phone?"
                        name="preferredPhone"
                        title="-- Select an option --"
                        data={preferredPhoneOptions}
                        value={formData.personal.preferredPhone}
                        section="personal"
                        field="preferredPhone"
                        handleSelectChange={handleInputChange}
                    />
                    <SelectField
                        label="Leave message on home phone?"
                        name="sendMsgToHomePhone"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.personal.sendMsgToHomePhone}
                        section="personal"
                        field="sendMsgToHomePhone"
                        handleSelectChange={handleInputChange}
                    />

                    <SelectField
                        label="Leave message with relatives?"
                        name="sendMsgToRelative"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.personal.sendMsgToRelative}
                        section="personal"
                        field="sendMsgToRelative"
                        handleSelectChange={handleInputChange}
                    />

                    <SelectField
                        label="Leave message on work phone?"
                        name="sendMsgToWork"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.personal.sendMsgToWork}
                        section="personal"
                        field="sendMsgToWork"
                        handleSelectChange={handleInputChange}
                    />

                    <SelectField
                        label="Leave message on cell phone?"
                        name="sendMsgToCellPhone"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.personal.sendMsgToCellPhone}
                        section="personal"
                        field="sendMsgToCellPhone"
                        handleSelectChange={handleInputChange}
                    />

                    <SelectField
                        label="Appointment Reminder Mode"
                        name="appointmentReminderMode"
                        title="-- Select a mode --"
                        data={appointmentReminderModeOptions}
                        value={formData.personal.appointmentReminderMode}
                        section="personal"
                        field="appointmentReminderMode"
                        handleSelectChange={handleInputChange}
                    />
                </div>
            </div> */}

            <div className="space-y-4 md:space-y-8">
                <h3 className="font-bold text-xl text-darkBlue">Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <TextField
                        type="text"
                        label="Address (Street)"
                        name="streetName"
                        field="address.streetName"
                        placeholder="Address (Street)"
                        section="personal"
                        value={formData.personal.address.streetName}
                        handleInputChange={handleInputChange}
                        isRequired={false}
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
                        isRequired={false}
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
                        isRequired={false}
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
                        isRequired={false}
                    />
                </div>
            </div>

            {/* <div className="space-y-4 md:space-y-8">
                <h3 className="font-bold text-xl text-darkBlue">Employment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <SelectField
                        label="Highest Level of Education"
                        name="highestEduLevel"
                        title="-- Select an option --"
                        data={educationOptions}
                        value={formData.personal.highestEduLevel}
                        section="personal"
                        field="highestEduLevel"
                        handleSelectChange={handleInputChange}
                    />

                    <SelectField
                        label="Employment Status"
                        name="employmentStatus"
                        title="-- Select a status --"
                        data={employmentOptions}
                        value={formData.personal.employmentStatus}
                        section="personal"
                        field="employmentStatus"
                        handleSelectChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="Employer"
                        name="employer"
                        field="employer"
                        placeholder="Employer"
                        section="personal"
                        value={formData.personal.employer}
                        handleInputChange={handleInputChange}
                    />
                    <TextField
                        type="text"
                        label="Occupation"
                        name="occupation"
                        field="occupation"
                        placeholder="Occupation"
                        section="personal"
                        value={formData.personal.occupation}
                        handleInputChange={handleInputChange}
                    />
                </div>
            </div> */}

            {/* <div className="space-y-4 md:space-y-8">
                <h3 className="font-bold text-xl text-darkBlue">
                    Religion & Cultural Identity
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <SelectField
                        label="Religion"
                        name="religion"
                        title="-- Select religion --"
                        data={religionOptions}
                        value={formData.personal.religion}
                        section="personal"
                        field="religion"
                        handleSelectChange={handleInputChange}
                    />

                    <SelectField
                        label="Race"
                        name="race"
                        title="-- Select race --"
                        data={raceOptions}
                        value={formData.personal.race}
                        section="personal"
                        field="race"
                        handleSelectChange={handleInputChange}
                    />
                    <SelectField
                        label="Ethnicity"
                        name="ethnicity"
                        title="-- Select ethnicity --"
                        data={ethnicityOptions}
                        value={formData.personal.ethnicity}
                        section="personal"
                        field="ethnicity"
                        handleSelectChange={handleInputChange}
                    />
                    <SelectField
                        label="Preferred Language"
                        name="preferredLanguage"
                        title="-- Select language --"
                        data={langOptions}
                        value={formData.personal.preferredLanguage}
                        section="personal"
                        field="preferredLanguage"
                        handleSelectChange={handleInputChange}
                    />
                </div>
            </div> */}
        </form>
    );
};

export default PersonalStep;
