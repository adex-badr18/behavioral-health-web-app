import CheckboxGroup from "../../../../../components/CheckboxGroup";
import DynamicStringField from "../../../../../components/DynamicStringField";
import FieldItem from "../../../../../components/FieldItem";
import TextField from "../../../../../components/TextField";
import SignaturePad from "../../../../../components/SignaturePad";
import { convertIsoDateToReadable } from "../../../../utils";
import {
    itemsCoveredOptions,
    permissionsOptions,
    programsOptions,
    whoYouAreOptions,
    acceptanceChoiceOptions,
} from "./data";
import SelectField from "../../../../../components/SelectField";
import { insuranceNames } from "../../../appointment/data";
import RadioField from "../../../../../components/RadioField";

const OmhcForm = ({ formData, setFormData, onChange }) => {
    return (
        <form className="">
            <div className="space-y-4 md:space-y-8">
                <div className="space-y-3 text-center">
                    <h3 className="font-semibold text-xl md:text-2xl text-darkBlue">
                        OMHC Consent Forms
                    </h3>

                    <p className="text-originalGreen">
                        Please fill the form below carefuly. Sign the form to
                        confirm your authorization.
                    </p>

                    <p
                        aria-label="All fields marked asterik (*) are required"
                        className="text-sm text-vividRed font-bold text-center"
                    >
                        All fields marked (*) are required.
                    </p>
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-lg text-darkBlue font-medium">
                        Medication Agreement Details
                    </h4>

                    <div className="space-y-8">
                        <RadioField
                            label="You are the:"
                            data={whoYouAreOptions}
                            name="whoYouAre"
                            value={formData.data.who}
                            handleFormElementChange={onChange}
                            section="data"
                            field="who"
                            orientation="horizontal"
                            labelClass="text-deepGrey text-lg font-medium"
                            isRequired={true}
                        />

                        <TextField
                            type="text"
                            label="Last Known Pharmacy"
                            name="pharmacy"
                            placeholder="Last Known Pharmacy"
                            section="data"
                            field="pharmacy"
                            value={formData.data.pharmacy}
                            handleInputChange={onChange}
                            isRequired={true}
                        />

                        <DynamicStringField
                            label="Prescribed Medications"
                            name="prescribedMedications"
                            fieldPath="prescribedMedications"
                            section="data"
                            onChange={onChange}
                            placeholder="Medication"
                            type="text"
                            moreText="medication"
                            value={formData.data.prescribedMedications}
                        />
                    </div>
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-lg text-darkBlue font-medium">
                        Authorization to Bill Insurance
                    </h4>

                    <SelectField
                        label="Insurance Company"
                        name="insuranceCompany"
                        title="-- Select an option --"
                        data={insuranceNames}
                        value={formData.data.insuranceCompany}
                        section="data"
                        field="insuranceCompany"
                        handleSelectChange={onChange}
                        isRequired={true}
                    />
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-lg text-darkBlue font-medium">
                        Authorization to Release/Receive Information
                    </h4>

                    <div className="space-y-8">
                        <CheckboxGroup
                            label="Program"
                            smallLabel=""
                            name="programs"
                            options={programsOptions}
                            formData={formData}
                            setFormData={setFormData}
                            isRequired={true}
                            layout="horizontal"
                        />

                        <CheckboxGroup
                            label="I permit BrightLife Enhancement Services to:"
                            smallLabel="(Check all that apply)"
                            name="permissions"
                            options={permissionsOptions}
                            formData={formData}
                            setFormData={setFormData}
                            isRequired={true}
                            layout="vertical"
                        />

                        <div className="space-y-3 border-y py-6">
                            <h4 className="text-base text-darkBlue font-medium">
                                Second Party
                            </h4>

                            <div className="space-y-5">
                                <TextField
                                    type="text"
                                    label="Individual/Agency"
                                    name="name"
                                    placeholder="Individual/Agency"
                                    section="secondParty"
                                    field="name"
                                    value={formData.secondParty.name}
                                    handleInputChange={onChange}
                                    isRequired={true}
                                />

                                <TextField
                                    type="text"
                                    label="Phone/Fax Number"
                                    name="phone"
                                    placeholder="Phone/Fax Number"
                                    section="secondParty"
                                    field="phone"
                                    value={formData.secondParty.phone}
                                    handleInputChange={onChange}
                                    isRequired={true}
                                />
                            </div>
                        </div>

                        <CheckboxGroup
                            label="Check all items covered by the release:"
                            smallLabel="(Check all that apply)"
                            name="itemsCovered"
                            options={itemsCoveredOptions}
                            formData={formData}
                            setFormData={setFormData}
                            isRequired={true}
                            layout="vertical"
                        />
                    </div>
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-lg text-darkBlue font-medium">
                        Standards of Professional Conduct and Program Overview
                    </h4>

                    <TextField
                        type="text"
                        label="Initial"
                        name="initial"
                        placeholder="Initial"
                        section="data"
                        field="initial"
                        value={formData.data.initial}
                        handleInputChange={onChange}
                        isRequired={true}
                    />

                    <RadioField
                        label="Please select one:"
                        data={acceptanceChoiceOptions}
                        name="acceptanceChoices"
                        value={formData.data.acceptanceChoice}
                        handleFormElementChange={onChange}
                        section="data"
                        field="acceptanceChoice"
                        orientation=""
                        labelClass="text-deepGrey text-lg font-medium"
                        isRequired={true}
                    />
                </div>

                {/* Signatures and consents */}
                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-xl text-darkBlue font-medium">
                        Signature & Date
                    </h4>

                    <SignaturePad
                        handleInputChange={onChange}
                        section="data"
                        fieldPath="signature"
                        dateSection="data"
                        dateFieldPath="date"
                        signature={formData.data.signature}
                    />

                    {formData.data?.date && (
                        <FieldItem
                            label="Date"
                            value={convertIsoDateToReadable(
                                formData.data?.date
                            )}
                            isRequired={true}
                        />
                    )}
                </div>
            </div>
        </form>
    );
};

export default OmhcForm;
