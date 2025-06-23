import { useState } from "react";
import SelectField from "../../../../../components/SelectField";
import { programOptions } from "../../data";
import { useToast } from "../../../../../components/ToastContext";
import { useEnrolProgram } from "../../../../../hooks/usePatients";
import Spinner from "../../../../../components/Spinner";

const NewProgramForm = ({ patientId, setIsModalOpen }) => {
    const [formData, setFormData] = useState({ data: { program: "" } });
    const { showToast } = useToast();
    const { mutate, isPending } = useEnrolProgram();

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

    const handleAddProgram = async (e) => {
        e.preventDefault();

        if (!formData.data.program) {
            showToast({
                message: `Please select a program`,
                type: "error",
                duration: 5000,
            });

            return;
        }

        mutate(
            { patientId, programType: formData.data.program },
            {
                onSuccess: (data) => {
                    const message = data?.message
                        ? `${data.message}. An email has been sent with instructions to proceed with your onboarding.`
                        : `Patient successfully enrolled into ${formData.data.program}. An email has been sent with instructions to proceed with your onboarding.`;

                    showToast({
                        message,
                        type: "success",
                        duration: 5000,
                    });

                    setIsModalOpen(false);
                },
                onError: (error) => {
                    showToast({
                        message:
                            error?.message ||
                            `Something went wrong, please try again.`,
                        type: "error",
                        duration: 5000,
                    });
                },
            }
        );
    };

    return (
        <form className="space-y-5">
            <h3 className="text-xl font-semibold">Add Program</h3>
            <div className="">
                <SelectField
                    label="Select Program"
                    name="program"
                    title="-- Select a program --"
                    data={programOptions}
                    value={formData.data.program}
                    section="data"
                    field="program"
                    handleSelectChange={handleFormElementChange}
                />
            </div>

            <div className="flex items-center justify-end gap-4">
                <button
                    onClick={handleAddProgram}
                    className={`py-2 px-4 font-semibold text-center border border-lightGreen rounded-lg text-lightGreen hover:text-white hover:bg-lightGreen transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-transparent disabled:hover:text-lightGreen`}
                    disabled={!formData.data.program || !patientId}
                >
                    {isPending ? (
                        <Spinner
                            secondaryText="Enrolling..."
                            spinnerSize="w-6 h-6"
                            borderClass="border-originalGreen hover:border-white"
                        />
                    ) : (
                        "Enroll"
                    )}
                </button>
            </div>
        </form>
    );
};

export default NewProgramForm;
