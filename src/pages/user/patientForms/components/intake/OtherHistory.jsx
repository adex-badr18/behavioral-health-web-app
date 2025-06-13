import TextAreaField from "../../../../../components/TextAreaField";
import SelectField from "../../../../../components/SelectField";

import { booleanOptions } from "../../data";
import { relativesObjStructure } from "./data";
import DynamicStringField from "../../../../../components/DynamicStringField";
import DynamicObjectField from "../../../../../components/DynamicObjectField";

const OtherHistory = ({ formData, onChange }) => {
    // console.log(formData.otherHistory);

    return (
        <form className="">
            <div className="space-y-4 md:space-y-8">
                <h3 className="font-semibold text-xl md:text-2xl text-darkBlue">
                    Other History
                </h3>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-xl text-darkBlue font-medium">
                        Past Medical History
                    </h4>

                    <div className="space-y-4 md:space-y-8">
                        <SelectField
                            label="Are you medically disabled?"
                            name="hasMedicalDisability"
                            title="-- Select an option --"
                            data={booleanOptions}
                            value={formData.otherHistory.hasMedicalDisability}
                            section="otherHistory"
                            field="hasMedicalDisability"
                            handleSelectChange={onChange}
                        />

                        {/* Dynamic Field for past medical history */}
                        <div className="space-y-4 md:space-y-8">
                            <DynamicStringField
                                label="Past Medical History"
                                name="pastMedicalHistory"
                                fieldPath="pastMedicalHistory"
                                section="otherHistory"
                                placeholder="Type description here"
                                onChange={onChange}
                                type="textarea"
                                moreText="medical history"
                                value={formData.otherHistory.pastMedicalHistory}
                            />
                        </div>
                    </div>
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-xl text-darkBlue font-medium">
                        Past Surgical History
                    </h4>

                    <div className="space-y-4 md:space-y-8">
                        {/* Dynamic Field for past surgical history */}
                        <DynamicStringField
                            label="Past Surgical History"
                            name="pastSurgicalHistory"
                            fieldPath="pastSurgicalHistory"
                            section="otherHistory"
                            placeholder="Type description here"
                            onChange={onChange}
                            type="textarea"
                            moreText="surgical history"
                            value={formData.otherHistory.pastSurgicalHistory}
                        />
                    </div>
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-xl text-darkBlue font-medium">
                        Family History
                    </h4>

                    <div className="space-y-4 md:space-y-8">
                        {/* Dynamic Field for relatives and illnesses */}
                        <DynamicObjectField
                            fieldPath="relativesWithMentalIllnessOrSuicide"
                            section="otherHistory"
                            onChange={onChange}
                            value={
                                formData.otherHistory
                                    .relativesWithMentalIllnessOrSuicide
                            }
                            objStructure={relativesObjStructure}
                            title="Relatives with Mental illness or Suicide"
                            moreText="more relatives"
                        />
                    </div>
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-xl text-darkBlue font-medium">
                        Allergies
                    </h4>

                    <div className="space-y-4 md:space-y-8">
                        <DynamicStringField
                            label="Allergies"
                            name="allergies"
                            fieldPath="allergies"
                            section="otherHistory"
                            placeholder="Type allergy"
                            onChange={onChange}
                            type="text"
                            moreText="allergy"
                            value={formData.otherHistory.allergies}
                        />
                    </div>
                </div>

                <TextAreaField
                    label="Is there any additional information you'd like to share?"
                    name="otherUsefulInfo"
                    placeholder="Write detailed description here"
                    section="otherHistory"
                    field="otherUsefulInfo"
                    value={formData.otherHistory.otherUsefulInfo}
                    handleFormElementChange={onChange}
                />
            </div>
        </form>
    );
};

export default OtherHistory;
