import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StepIndicator from "./StepIndicator";
import Modal from "./Modal";
import Spinner from "./Spinner";
import { LuShieldCheck } from "react-icons/lu";

import { useToast } from "./ToastContext";

const MultiStepForm = ({
    formData,
    isStepValid,
    // isFormValid,
    steps,
    stepForms,
    formSize,
    submitHandler,
    isSuccessModalOpen,
    setIsSuccessModalOpen,
    isSubmitting,
    successModalData,
}) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([]);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    // const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    const navigate = useNavigate();

    const { showToast } = useToast();

    let formSizeClass;

    if (formSize.toLowerCase() === "sm") {
        formSizeClass = "w-full max-w-xl mx-auto";
    } else if (formSize.toLowerCase() === "md") {
        formSizeClass = "w-full max-w-3xl mx-auto";
    } else if (formSize.toLowerCase() === "lg") {
        formSizeClass = "w-full max-w-5xl mx-auto";
    }

    // Scroll to top when step changes
    useEffect(() => {
        window.scrollTo({ top: 130, behavior: "smooth" });
    }, [currentStep]);

    const goToNextStep = () => {
        if (!isStepValid(currentStep)) {
            return;
        }

        setCompletedSteps((prev) => [...prev, currentStep]);

        setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    };

    const goToPreviousStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const formatToCamelCase = (str) => {
        return `${str.slice(0, 1).toLowerCase()}${str.slice(1)}`.replace(
            " ",
            ""
        );
    };

    // Step Validation logic
    // const isStepValid = (step = currentStep) => {
    //     // const dataObj = formData[formatToCamelCase(steps[step])];
    //     // // const optionalInsuranceFields = ["insuranceName", "insuranceNumber"];

    //     // for (const key in dataObj) {
    //     //     const value = dataObj[key];

    //     //     if (optionalFields.includes(key)) {
    //     //         continue;
    //     //     }

    //     //     // if (optionalInsuranceFields.includes(key)) {
    //     //     //     if (dataObj["paymentMethod"].toLowerCase() === "self pay") {
    //     //     //         continue;
    //     //     //     }
    //     //     // }

    //     //     if (
    //     //         value === null ||
    //     //         value === undefined ||
    //     //         (typeof value === "string" && value.trim() === "") ||
    //     //         (Array.isArray(value) && value.length === 0)
    //     //     ) {
    //     //         return false;
    //     //     }
    //     // }

    //     return true;
    // };

    // Form validity logic
    const isFormValid = (obj, optionalFields = []) => {
        // Create helper function to check if a property is optional
        const isOptional = (key) => optionalFields.includes(key);

        const checkProperties = (obj, path = []) => {
            // Loop through the object
            for (const key in obj) {
                // Get the value of the current property
                const value = obj[key];

                // Compute nested object paths e.g. personal.address
                const currentPath = [...path, key].join(".");

                if (typeof value === "object" && value !== null) {
                    // If the current property value is an object and is not null,
                    // recursively check the nested object
                    if (!checkProperties(value, [...path, key])) {
                        return false;
                    }
                } else if (!value && !isOptional(currentPath)) {
                    // If value is empty and the key is not optional, return false
                    return false;
                }
            }

            return true;
        };

        return checkProperties(obj);
    };

    const goToStep = (step) => {
        if (currentStep > step) {
            setCurrentStep(step);
            return;
        }

        if (!isStepValid(currentStep)) return;

        setCompletedSteps((prev) => [...prev, currentStep]);
        setCurrentStep(step);
    };

    const reviewHandler = () => {
        setCompletedSteps((prev) => [...prev, currentStep]);
        setIsReviewModalOpen(true);
    };

    const closeReview = () => {
        setIsReviewModalOpen(false);
    };

    const returnHome = () => {
        setIsSuccessModalOpen(false);
        navigate("/");
    };

    return (
        <div className={`flex flex-col gap-6 md:gap-10 ${formSizeClass}`}>
            {/* Step Indicator */}
            <StepIndicator
                steps={steps}
                currentStep={currentStep}
                isStepValid={isStepValid}
                completedSteps={completedSteps}
                goToStep={goToStep}
            />

            {/* Step Form Component */}
            <div className="w-full bg-white rounded-lg shadow-lg p-6">
                {stepForms.map((form) => {
                    if (currentStep === form.id) {
                        return (
                            <div key={form.id} className="space-y-5">
                                <h1 className="lg:hidden text-darkBlue text-2xl text-center font-semibold">
                                    <span className="mr-2">{`${currentStep}.`}</span>
                                    {form.name}
                                    {/* <span className="text-sm text-vividRed bold block mt-2"> All fields marked (*) are required.</span> */}
                                </h1>
                                <div className="">{form.component}</div>
                            </div>
                        );
                    }
                })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center gap-5">
                {currentStep !== 1 && (
                    <button
                        onClick={goToPreviousStep}
                        className="w-full py-2 px-4 font-semibold text-center border border-lightGreen rounded-lg text-lightGreen hover:text-white hover:bg-lightGreen transition duration-300"
                    >
                        Previous
                    </button>
                )}

                {currentStep !== steps.length && (
                    <button
                        onClick={goToNextStep}
                        className={`w-full py-2 px-4 font-semibold text-center border border-lightGreen rounded-lg text-lightGreen hover:text-white hover:bg-lightGreen transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-transparent disabled:hover:text-lightGreen`}
                        disabled={!isStepValid(currentStep)}
                    >
                        Next
                    </button>
                )}

                {currentStep === steps.length && (
                    // <button
                    //     onClick={handleSubmit}
                    //     className="w-full py-2 px-4 font-semibold text-center border border-lightGreen rounded-lg text-lightGreen hover:text-white hover:bg-lightGreen transition duration-300 disabled:hover:text-lightGreen disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-transparent"
                    //     // disabled={isFormValid(formData, [])}
                    // >
                    //     {
                    //         isSubmitting ? <Spinner /> : "Submit"
                    //     }
                    // </button>
                    <button
                        className="w-full bg-lightGreen hover:bg-green-600 px-4 py-2 text-white rounded-lg"
                        onClick={submitHandler}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <Spinner secondaryText="Submitting..." />
                        ) : (
                            "Submit"
                        )}
                    </button>
                )}
            </div>

            {/* Submission Response */}
            <Modal isOpen={isSuccessModalOpen}>
                <div className="w-full max-w-xl p-4 rounded-lg bg-white text-deepGrey relative">
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <LuShieldCheck className="text-5xl text-lightGreen" />

                        <div className="flex flex-col items-center">
                            <h3 className="text-lg text-center font-bold mb-2">
                                Submission Successful!
                            </h3>

                            {successModalData && (
                                <div className="mb-5">
                                    <span className="font-semibold">
                                        {successModalData.message}
                                    </span>
                                </div>
                            )}

                            <div className="space-y-2 text-center text-deepGrey">
                                <p className="">
                                    Thank you for completing the form. Your
                                    information has been successfully submitted.
                                </p>

                                <p className="">
                                    An email has been sent with instructions to
                                    proceed with your onboarding.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-1">
                            <button
                                className="w-full bg-lightGreen hover:bg-green-600 px-4 py-3 text-white font-medium tracking-widest rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={returnHome}
                            >
                                Return Home
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Review Modal */}
            {/* <Modal
                isOpen={isReviewModalOpen}
                onClose={closeReview}
                maxWidth="w-full max-w-5xl"
            >
                <div className="">Review</div>
                <ReviewForm
                    formData={formData}
                    onSubmit={submitHandler}
                    onClose={closeReview}
                    onEdit={closeReview}
                />
            </Modal> */}
        </div>
    );
};

export default MultiStepForm;
