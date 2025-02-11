import { useState, useEffect } from "react";

import SectionHeader from "../../components/SectionHeader";
import StepIndicator from "./components/StepIndicator";
import PersonalInfoForm from "./components/PersonalInfoForm";
import AddressForm from "./components/AddressForm";
import AppointmentForm from "./components/AppointmentForm";
import InsuranceForm from "./components/InsuranceForm";
import Modal from "../../components/Modal";
import ReviewForm from "./components/ReviewForm";
import { isFormValid } from "./utils";

const Appointment = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState([]);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        personal: { name: "", dob: "", phone: "", email: "" },
        address: {
            address1: "",
            address2: "",
            city: "",
            state: "",
            zipCode: "",
        },
        appointment: {
            appointmentType: "",
            service: "",
            appointmentDateTime: "",
        },
        insurance: {
            paymentMethod: "",
            insuranceName: "",
            insuranceNumber: "",
        },
    });

    // console.log(formData);

    // Scroll to top when the step value changes
    useEffect(() => {
        window.scrollTo({ top: 260, behavior: "smooth" });

        isStepValid();
    }, [currentStep]);

    useEffect(() => {
        if (formData.insurance.paymentMethod.toLowerCase() === "self pay") {
            handleFormElementChange("insurance", "insuranceName", "");
            handleFormElementChange("insurance", "insuranceNumber", "");
        }

        if (
            formData.insurance.paymentMethod.toLowerCase() ===
                "insurance card" &&
            (!formData.insurance.insuranceName ||
                !formData.insurance.insuranceNumber)
        ) {
            setCompletedSteps((prev) => prev.filter((step) => step !== 3));
        }

        isStepValid();
    }, [formData.insurance.paymentMethod]);

    const steps = ["Personal", "Address", "Appointment", "Insurance"];

    // Handle form element change
    const handleFormElementChange = (section, field, value) => {
        setFormData((prev) => ({
            ...prev,
            [section]: { ...prev[section], [field]: value },
        }));
    };

    const formatToCamelCase = (str) => {
        return `${str.slice(0, 1).toLowerCase()}${str.slice(1)}`.replace(
            " ",
            ""
        );
    };

    // Step Validation logic
    const isStepValid = (step = currentStep) => {
        const dataObj = formData[formatToCamelCase(steps[step])];
        const nonRequiredProps = ["dob", "address2"];
        const optionalInsuranceFields = ["insuranceName", "insuranceNumber"];

        for (const key in dataObj) {
            const value = dataObj[key];

            if (nonRequiredProps.includes(key)) {
                continue;
            }

            if (optionalInsuranceFields.includes(key)) {
                if (dataObj["paymentMethod"].toLowerCase() === "self pay") {
                    continue;
                }
            }

            if (
                value === null ||
                value === undefined ||
                (typeof value === "string" && value.trim() === "") ||
                (Array.isArray(value) && value.length === 0)
            ) {
                return false;
            }
        }

        return true;
    };

    const goToNextStep = () => {
        if (isStepValid()) {
            setCompletedSteps((prev) => [...prev, currentStep]);

            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
        }
    };

    const goToPreviousStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const submitHandler = () => {
        console.log("Submitted", formData);
    };

    const reviewHandler = () => {
        setCompletedSteps((prev) => [...prev, currentStep]);
        setIsReviewModalOpen(true);
    };

    const closeReview = () => {
        setIsReviewModalOpen(false);
    };

    const goToStep = (step) => {
        if (!isStepValid(step)) return;

        setCurrentStep(step);
    };

    const editHandler = () => {
        setIsReviewModalOpen(false);
    };

    return (
        <section className="pt-8 md:pt-20">
            <SectionHeader
                bgTitle="Schedule"
                primaryTitle="Schedule An Appointment"
                secondaryTitle="Book Now"
                titleAlignment="center"
                bgTitleOnly={false}
            />
            <div className="bg-darkBlue py-8">
                <div className="wrapper px-4 2xl:px-0 space-y-8 md:space-y-12">
                    <div className="flex flex-col gap-5 w-full max-w-xl mx-auto">
                        {/* Step Indicator */}
                        <StepIndicator
                            steps={steps}
                            currentStep={currentStep}
                            isStepValid={isStepValid}
                            completedSteps={completedSteps}
                            goToStep={goToStep}
                        />

                        {/* Panels */}
                        <div className="w-full bg-white rounded-lg shadow-lg p-6">
                            {currentStep === 0 && (
                                <PersonalInfoForm
                                    formData={formData}
                                    handleInputChange={handleFormElementChange}
                                />
                            )}
                            {currentStep === 1 && (
                                <AddressForm
                                    formData={formData}
                                    handleInputChange={handleFormElementChange}
                                />
                            )}
                            {currentStep === 2 && (
                                <AppointmentForm
                                    formData={formData}
                                    handleInputChange={handleFormElementChange}
                                />
                            )}
                            {currentStep === 3 && (
                                <InsuranceForm
                                    formData={formData}
                                    handleInputChange={handleFormElementChange}
                                />
                            )}
                        </div>

                        <div className="flex justify-between items-center gap-5">
                            {currentStep !== 0 && (
                                <button
                                    onClick={goToPreviousStep}
                                    className="w-full py-2 px-4 font-medium text-center border border-lightGreen rounded-lg text-white hover:bg-lightGreen transition duration-300"
                                >
                                    Previous
                                </button>
                            )}

                            {currentStep !== steps.length - 1 && (
                                <button
                                    onClick={goToNextStep}
                                    className={`w-full py-2 px-4 font-medium text-center border border-lightGreen rounded-lg text-white hover:bg-lightGreen transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-transparent`}
                                    disabled={!isStepValid()}
                                >
                                    Next
                                </button>
                            )}

                            {currentStep === steps.length - 1 && (
                                <button
                                    onClick={reviewHandler}
                                    className="w-full py-2 px-4 font-medium text-center border border-lightGreen rounded-lg text-white hover:bg-lightGreen transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-transparent"
                                    disabled={!isFormValid(formData)}
                                >
                                    Review
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isReviewModalOpen}
                onClose={closeReview}
                maxWidth="w-full max-w-5xl"
            >
                {/* <div className="">Placeholder</div> */}
                <ReviewForm
                    formData={formData}
                    onSubmit={submitHandler}
                    onClose={closeReview}
                    onEdit={editHandler}
                />
            </Modal>
        </section>
    );
};

export default Appointment;
