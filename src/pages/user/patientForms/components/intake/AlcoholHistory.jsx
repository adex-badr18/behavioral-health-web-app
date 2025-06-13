import { useState, useEffect } from "react";

import TextField from "../../../../../components/TextField";
import SelectField from "../../../../../components/SelectField";
import { Checkbox } from "../../../../../components/CheckboxGroup";
import DynamicObjectField from "../../../../../components/DynamicObjectField";

import { frequencyOptions, booleanOptions } from "../../data";
import {
    drinkGuiltOptions,
    drugTreatmentObjStructure,
    drugsObjStructure,
} from "./data";

const AlcoholHistory = ({ formData, onChange }) => {
    const [alcoholAssessment, setAlcoholAssessment] = useState([]);

    useEffect(() => {
        if (alcoholAssessment.length > 0) {
            onChange(
                "alcoholDrugHistory",
                "alcohol.drinkGuiltCheck",
                alcoholAssessment.join(" ")
            );
        }
    }, [alcoholAssessment]);

    // console.log(formData.alcoholDrugHistory);

    const handleCheckboxChange = (e) => {
        const { value } = e.target;

        if (alcoholAssessment.includes(value)) {
            setAlcoholAssessment((prev) =>
                prev.filter((option) => option !== value)
            );
        } else {
            setAlcoholAssessment((prev) => [...prev, value]);
        }
    };

    const isOptionExist = (option) =>
        alcoholAssessment.includes(option) ||
        formData?.alcoholDrugHistory?.alcohol?.drinkGuiltCheck?.includes(option);

    return (
        <form className="">
            <div className="space-y-4 md:space-y-8">
                <h3 className="font-semibold text-xl md:text-2xl text-darkBlue">
                    Alcohol and Drug History
                </h3>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-xl text-darkBlue font-medium">
                        Alcohol
                    </h4>

                    <div className="space-y-4 md:space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <SelectField
                                label="Usage Frequency"
                                name="usageFrequency"
                                title="-- Select an option --"
                                data={frequencyOptions}
                                value={
                                    formData.alcoholDrugHistory.alcohol
                                        .usageFrequency
                                }
                                section="alcoholDrugHistory"
                                field="alcohol.usageFrequency"
                                handleSelectChange={onChange}
                            />

                            {formData.alcoholDrugHistory.alcohol
                                .usageFrequency !== "None" && (
                                <TextField
                                    type="text"
                                    label="Your usual alcoholic beverage"
                                    name="brand"
                                    placeholder="Type brand name"
                                    section="alcoholDrugHistory"
                                    field="alcohol.brand"
                                    value={
                                        formData.alcoholDrugHistory.alcohol
                                            .brand
                                    }
                                    handleInputChange={onChange}
                                />
                            )}

                            <TextField
                                type="text"
                                label="When was your last drink?"
                                name="lastUsed"
                                placeholder="e.g. a month ago"
                                section="alcoholDrugHistory"
                                field="alcohol.lastUsed"
                                value={
                                    formData.alcoholDrugHistory.alcohol.lastUsed
                                }
                                handleInputChange={onChange}
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className=" text-grey">
                                Alcohol Drinking Self-Assessment
                            </h3>

                            <div className="space-y-4">
                                {drinkGuiltOptions.map((option) => (
                                    <Checkbox
                                        key={option.id}
                                        label={option.value}
                                        value={option.value}
                                        checked={isOptionExist(option.value)}
                                        onChange={handleCheckboxChange}
                                        checkedClass="border-2 border-darkBlue"
                                        unCheckedClass="border-lightGrey"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 border rounded space-y-5">
                    <div className="space-y-4 md:space-y-8 divide-y">
                        {/* Dynamic Field for Substances usage */}
                        <DynamicObjectField
                            fieldPath="substanceUsages"
                            section="alcoholDrugHistory"
                            onChange={onChange}
                            value={formData.alcoholDrugHistory.substanceUsages}
                            objStructure={drugsObjStructure}
                            title="Drugs & Substances Usage"
                            moreText="drug/substance"
                        />

                        <TextField
                            type="number"
                            label="Average Weekly Spending on Alcohol/Drugs"
                            name="weeklyAverageSpending"
                            placeholder="e.g. a month ago"
                            section="alcoholDrugHistory"
                            field="weeklyAverageSpending"
                            value={
                                formData.alcoholDrugHistory
                                    .weeklyAverageSpending
                            }
                            handleInputChange={onChange}
                            classAttr="pt-4 md:pt-6"
                        />
                    </div>
                </div>

                <div className="p-4 border rounded space-y-5">
                    <h4 className="text-xl text-darkBlue font-medium">
                        Past Treatments
                    </h4>

                    <div className="space-y-4 md:space-y-8 divide-y">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <SelectField
                                label="Past 12-Step Recovery Participant?"
                                name="isPastStepRecoveryParticipant"
                                title="-- Select an option --"
                                data={booleanOptions}
                                value={
                                    formData.alcoholDrugHistory
                                        .isPastStepRecoveryParticipant
                                }
                                section="alcoholDrugHistory"
                                field="isPastStepRecoveryParticipant"
                                handleSelectChange={onChange}
                            />

                            <SelectField
                                label="Current 12-Step Recovery Participant?"
                                name="isCurrentStepRecoveryParticipant"
                                title="-- Select an option --"
                                data={booleanOptions}
                                value={
                                    formData.alcoholDrugHistory
                                        .isCurrentStepRecoveryParticipant
                                }
                                section="alcoholDrugHistory"
                                field="isCurrentStepRecoveryParticipant"
                                handleSelectChange={onChange}
                            />
                        </div>

                        {/* Dynamic Field for past treatments */}
                        <div className="pt-4 md:pt-6">
                            <DynamicObjectField
                                fieldPath="pastTreatmentInfo"
                                section="alcoholDrugHistory"
                                onChange={onChange}
                                value={formData.alcoholDrugHistory.pastTreatmentInfo}
                                objStructure={drugTreatmentObjStructure}
                                title="Substance Care History"
                                moreText="care history"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AlcoholHistory;
