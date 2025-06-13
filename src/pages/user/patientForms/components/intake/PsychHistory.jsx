import DynamicObjectField from "../../../../../components/DynamicObjectField";
import SelectField from "../../../../../components/SelectField";

import { booleanOptions } from "../../data";
import { medicationsObjStructure, providersObjStructure } from "./data";

const PsychHistory = ({ formData, onChange }) => {
    // console.log(formData.psychHistory);
    return (
        <form className="">
            <div className="space-y-4 md:space-y-8">
                <h3 className="font-bold text-xl text-darkBlue">
                    Past Psychiatric History
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <SelectField
                        label="Ever attempted suicide?"
                        name="hasAttemptedSuicide"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.psychHistory.hasAttemptedSuicide}
                        section="psychHistory"
                        field="hasAttemptedSuicide"
                        handleSelectChange={onChange}
                    />

                    <SelectField
                        label="Ever hospitalized for mental health?"
                        name="isPsychHospitalized"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.psychHistory.isPsychHospitalized}
                        section="psychHistory"
                        field="isPsychHospitalized"
                        handleSelectChange={onChange}
                    />
                </div>

                {/* Dynamic field for past providers */}
                <div className="p-4 border rounded">
                    <DynamicObjectField
                        fieldPath="pastProviders"
                        section="psychHistory"
                        onChange={onChange}
                        value={formData.psychHistory.pastProviders}
                        objStructure={providersObjStructure}
                        title="Past Providers"
                        moreText="provider"
                    />
                </div>

                {/* Dynamic field for current medications */}
                <div className="p-4 border rounded">
                    <DynamicObjectField
                        fieldPath="currentMedications"
                        section="psychHistory"
                        onChange={onChange}
                        value={formData.psychHistory.currentMedications}
                        objStructure={medicationsObjStructure}
                        title="Current Medications"
                        moreText="medication"
                    />
                </div>

                {/* Dynamic field for past medications */}
                <div className="p-4 border rounded">
                    <DynamicObjectField
                        fieldPath="pastMedications"
                        section="psychHistory"
                        onChange={onChange}
                        value={formData.psychHistory.pastMedications}
                        objStructure={medicationsObjStructure}
                        title="Past Medications"
                        moreText="medication"
                    />
                </div>
            </div>
        </form>
    );
};

export default PsychHistory;
