import TextField from "../../../../../components/TextField";
import SelectField from "../../../../../components/SelectField";
import TextAreaField from "../../../../../components/TextAreaField";
import DynamicObjectField from "../../../../../components/DynamicObjectField";

import { booleanOptions, sexPreferenceOptions } from "../../data";
import { marriagesObjStructure } from "./data";

const IntroForm = ({ formData, onChange }) => {
    // console.log(formData);
    return (
        <form className="">
            <div className="space-y-4 md:space-y-8">
                <h3 className="font-semibold text-xl md:text-2xl text-darkBlue">
                    Getting to know you
                </h3>

                <TextAreaField
                    label="Describe the Reason for Seeking Help"
                    name="complaints"
                    placeholder="Write detailed description here"
                    section="intro"
                    field="complaints"
                    value={formData.intro.complaints}
                    handleFormElementChange={onChange}
                    isRequired={true}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <SelectField
                        label="Do you Share Home?"
                        name="doYouShareHome"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.intro.doYouShareHome}
                        section="intro"
                        field="doYouShareHome"
                        handleSelectChange={onChange}
                    />

                    <SelectField
                        label="Sexual Preference"
                        name="sexPreference"
                        title="-- Select an option --"
                        data={sexPreferenceOptions}
                        value={formData.intro.sexPreference}
                        section="intro"
                        field="sexPreference"
                        handleSelectChange={onChange}
                    />

                    <SelectField
                        label="Are you Currently on Probation?"
                        name="onProbation"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.intro.onProbation}
                        section="intro"
                        field="onProbation"
                        handleSelectChange={onChange}
                    />

                    <SelectField
                        label="Are you Currently in a Lawsuit?"
                        name="inLawsuit"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.intro.inLawsuit}
                        section="intro"
                        field="inLawsuit"
                        handleSelectChange={onChange}
                    />

                    <TextField
                        type="number"
                        label="Children Count"
                        name="childrenCount"
                        placeholder="Children Count"
                        section="intro"
                        field="childrenCount"
                        value={formData.intro.childrenCount}
                        handleInputChange={onChange}
                        min={0}
                    />

                    <TextField
                        type="number"
                        label="Marriage Count"
                        name="marriageCount"
                        placeholder="Marriage Count"
                        section="intro"
                        field="marriageCount"
                        value={formData.intro.marriageCount}
                        handleInputChange={onChange}
                        min={0}
                    />

                </div>
                    {/* Dynamic Field for past marriage list */}
                    {formData.intro.marriageCount > 0 && (
                        <div className="p-4 border rounded">
                            <DynamicObjectField
                                fieldPath="pastMarriagesInfo"
                                section="intro"
                                onChange={onChange}
                                value={formData.intro.pastMarriagesInfo}
                                objStructure={marriagesObjStructure}
                                title="Past Marriages"
                                moreText="marriage"
                            />
                        </div>
                    )}
            </div>
        </form>
    );
};

export default IntroForm;
