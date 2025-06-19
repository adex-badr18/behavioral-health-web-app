import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../../../components/SectionHeader";
import StarsRating from "./components/StarsRating";

import { useToast } from "../../../components/ToastContext";
import { useCreateReview } from "../../../hooks/useReviews";
import { objectToFormData } from "../../utils";
import Spinner from "../../../components/Spinner";
import Modal from "../../../components/Modal";
import { LuShieldCheck } from "react-icons/lu";

const Review = () => {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const { mutate, isPending, error, data } = useCreateReview({
        openModal: openSuccessModal,
        showToast,
    });
    const [successModalData, setSuccessModalData] = useState({});
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [reviewData, setReviewData] = useState({
        id: "",
        nickname: "",
        email: "",
        referralWish: "",
        rating: 0,
        reviewMessage: "",
        status: "draft",
    });

    useEffect(() => {
        setReviewData((prev) => ({ ...prev, rating: rating }));
    }, [rating]);

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        const elementValue = type === "checkbox" ? checked : value;

        setReviewData((prev) => ({ ...prev, [name]: elementValue }));
    };

    // Function to open modal
    function openSuccessModal(data) {
        setSuccessModalData(data);
        setIsSuccessModalOpen(true);
    }

    const isFormValid = () => {
        for (const key in reviewData) {
            const value = reviewData[key];

            if (key === "id") {
                continue;
            }

            if (!value || value === 0 || value === null) {
                return false;
            }
        }

        return true;
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = objectToFormData(reviewData);
        console.log(reviewData)

        mutate(formData);
    };

    const returnHome = () => {
        setIsSuccessModalOpen(false);
        navigate("/");
    };

    return (
        <section className="pt-8 md:pt-20">
            <div className="wrapper">
                <SectionHeader
                    bgTitle="Review"
                    primaryTitle="We Value your Feedback"
                    secondaryTitle="Rate Your Experience"
                />
            </div>

            <div className="bg-lightGray">
                <div className="wrapper py-8">
                    <div className="w-full max-w-xl mx-auto border rounded-lg">
                        <form
                            onSubmit={onSubmit}
                            className="bg-white p-6 rounded-lg space-y-5"
                        >
                            <div className="space-y-1">
                                <label
                                    htmlFor="nickname"
                                    className="text-deepGrey font-medium"
                                >
                                    Nickname
                                </label>
                                <input
                                    type="text"
                                    name="nickname"
                                    id="nickname"
                                    className="input"
                                    placeholder="Your nickname"
                                    value={reviewData.nickname}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="email"
                                    className="text-deepGrey font-medium"
                                >
                                    Email (will not be published)
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="input"
                                    placeholder="youremail@domain.com"
                                    value={reviewData.email}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <div className="space-y-1">
                                <p className="text-deepGrey font-medium">
                                    Would you recommend us to your
                                    family/friends?
                                </p>
                                <div className="flex items-center gap-8">
                                    <label
                                        htmlFor="referralWishYes"
                                        className="text-deepGrey font-medium flex items-center gap-2 cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="referralWish"
                                            id="referralWishYes"
                                            className="hidden peer"
                                            value="Yes"
                                            checked={
                                                reviewData.referralWish ===
                                                "Yes"
                                            }
                                            onChange={handleFormChange}
                                        />
                                        <div className="w-5 h-5 rounded-full border-2 border-gray-500 peer-checked:bg-darkBlue flex items-center justify-center">
                                            <div className="w-3 h-3 rounded-full bg-transparent"></div>
                                        </div>
                                        <span className="">Yes</span>
                                    </label>

                                    <label
                                        htmlFor="referralWishNo"
                                        className="text-deepGrey font-medium flex items-center gap-2 cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="referralWish"
                                            id="referralWishNo"
                                            className="hidden peer"
                                            value="No"
                                            checked={
                                                reviewData.referralWish === "No"
                                            }
                                            onChange={handleFormChange}
                                        />
                                        <div className="w-5 h-5 rounded-full border-2 border-gray-500 peer-checked:bg-darkBlue flex items-center justify-center">
                                            <div className="w-3 h-3 rounded-full bg-transparent"></div>
                                        </div>
                                        <span className="">No</span>
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <p className="text-deepGrey font-medium">
                                    Rate your experience
                                </p>
                                <StarsRating
                                    rating={rating}
                                    setRating={setRating}
                                />
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="reviewMessage"
                                    className="text-deepGrey font-medium"
                                >
                                    Review Message
                                </label>
                                <textarea
                                    name="reviewMessage"
                                    id="reviewMessage"
                                    className="input"
                                    placeholder="Describe your experience"
                                    value={reviewData.reviewMessage}
                                    onChange={handleFormChange}
                                ></textarea>
                            </div>

                            <p className="text-xs font-poppins text-darkBlue">
                                You will be able to receive emails in connection
                                with this review. All emails contain the option
                                to unsubscribe. We can use the text and star
                                rating from your review for marketing purposes.
                            </p>

                            <button
                                // onClick={onSubmit}
                                type="submit"
                                className="bg-darkBlue text-white hover:bg-deepBlue hover:font-medium transition duration-300 p-2 text-center w-full rounded disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={isPending || !isFormValid()}
                            >
                                {isPending ? (
                                    <Spinner secondaryText="Submitting..." />
                                ) : (
                                    "Submit Review"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Submission Response */}
            <Modal isOpen={isSuccessModalOpen}>
                <div className="w-full max-w-xl p-4 rounded-lg bg-white text-deepGrey relative">
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <LuShieldCheck className="text-5xl text-lightGreen" />

                        <div className="flex flex-col items-center">
                            <h3 className="text-lg text-center font-bold mb-3">
                                Submission Successful!
                            </h3>
                            <p className="mb-5 font-semibold">
                                {successModalData.success}
                            </p>

                            <div className="space-y-2 text-center text-deepGrey">
                                <p className="">
                                    Thank you for dropping your feedback. Your
                                    review has been successfully submitted.
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
        </section>
    );
};

export default Review;
