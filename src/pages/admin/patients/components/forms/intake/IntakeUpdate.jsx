import { useLocation } from "react-router-dom";
import PageTitle from "../../../../components/PageTitle";
import BackButton from "../../../../../../components/BackButton";
import TabPanel from "../../../../components/TabPanel";
import IntroFormUpdate from "./IntroFormUpdate";
import PsychHistoryUpdate from "./PsychHistoryUpdate";
import AlcoholHistoryUpdate from "./AlcoholHistoryUpdate";
import PsychosocialUpdate from "./PsychosocialUpdate";
import OtherHistoryUpdate from "./OtherHistoryUpdate";
import { useState } from "react";

const IntakeUpdate = () => {
    const { state } = useLocation();
    const { intakeFormData } = state;
    const [tabIndex, setTabIndex] = useState(1);
    const [formData, setFormData] = useState(intakeFormData);

    console.log(formData);

    const tabButtons = [
        { id: 1, tabName: "Intro", isDisabled: false },
        { id: 2, tabName: "Psychiatric History", isDisabled: false },
        { id: 3, tabName: "Alcohol/Drug", isDisabled: false },
        { id: 4, tabName: "Psychosocial", isDisabled: false },
        { id: 5, tabName: "Other History", isDisabled: false },
    ];

    // Handle form element change
    function handleFormElementChange(section, fieldPath, value) {
        setFormData((prev) => {
            const keys = fieldPath.split(".");

            const updateNestedField = (obj, keys, value) => {
                if (keys.length === 1) {
                    return {
                        ...obj,
                        [keys[0]]: value,
                    };
                }

                return {
                    ...obj,
                    [keys[0]]: updateNestedField(
                        obj[keys[0]],
                        keys.slice(1),
                        value
                    ),
                };
            };

            return {
                ...prev,
                [section]: updateNestedField(prev[section], keys, value),
            };
        });
    }

    return (
        <section className="p-4 md:p-8">
            <PageTitle title={"Intake Form Update"}>
                <BackButton />
            </PageTitle>

            <TabPanel
                tabButtons={tabButtons}
                tabIndex={tabIndex}
                setTabIndex={setTabIndex}
            />

            <div className="bg-offWhite p-4 md:p-6 rounded-lg">
                {tabIndex === 1 && (
                    <IntroFormUpdate
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                )}

                {tabIndex === 2 && (
                    <PsychHistoryUpdate
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                )}

                {tabIndex === 3 && (
                    <AlcoholHistoryUpdate
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                )}

                {tabIndex === 4 && (
                    <PsychosocialUpdate
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                )}

                {tabIndex === 5 && (
                    <OtherHistoryUpdate
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                )}
            </div>
        </section>
    );
};

export default IntakeUpdate;
