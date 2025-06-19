import {
    useQuery,
    useMutation,
    useQueryClient,
    keepPreviousData,
} from "@tanstack/react-query";
import {
    fetchReviews,
    createReview,
    updateReview,
    searchReviews,
    getReviewById,
    toggleReviewStatus,
    getPublishedReviews,
} from "../api/reviewApi";
import { useToast } from "../components/ToastContext";

// Fetch list of reviews
export const useFetchReviews = (page = 1, searchParams) => {
    return useQuery({
        queryKey: ["reviews", page, searchParams],
        queryFn: () => fetchReviews(page, searchParams),
        placeholderData: keepPreviousData,
        staleTime: 5 * 1000 * 60, // Cache data for 5 minutes
        retry: 2, // retry failed request twice
        enabled: Object.keys(searchParams).length > 0, // // Runs query only when searchTerm exists
    });
};

// Search reviews based on search terms
export const useGetPublishedReviews = ({
    setTestimonialsData,
    fallbackReviews,
}) => {
    return useQuery({
        queryKey: ["publishedReviews"],
        queryFn: getPublishedReviews,
        enabled: true,
        retry: 3,
        onError: () => {
            setTestimonialsData(fallbackReviews);
        },
    });
};

// Fetch a review by ID
export const useGetReview = (reviewId) => {
    return useQuery({
        queryKey: ["review", reviewId],
        queryFn: () => getReviewById(reviewId),
        enabled: !!reviewId, // Ensures the query runs only when id is avaialble
        retry: 1,
    });
};

// Create a new review (Optimistic UI Update)
export const useCreateReview = ({ openModal, showToast }) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createReview,
        onSuccess: async (response) => {
            console.log("OnSuccess:", response?.data);
            openModal(response.data);
            queryClient.invalidateQueries(["reviews"]);
        },
        onError: async (error, variables, context) => {
            showToast({
                message:
                    error?.message ||
                    error ||
                    "An error occurred. Please try again.",
                type: "error",
                duration: 5000,
            });
        },
    });
};

// Toggle Review status
export const useToggleReviewStatus = ({ setIsConfirmModalOpen }) => {
    const queryClient = useQueryClient();
    const { showToast } = useToast();

    return useMutation({
        mutationFn: ({ id, payload, endpoint }) =>
            toggleReviewStatus({ endpoint }),
        // onMutate: async ({ id, payload }) => {
        //     // This callback runs before the server call happens

        //     // cancel any ongoing operation for this review
        //     await queryClient.cancelQueries(["review", id]);

        //     // get hold of the current review, to e used for rollback on request failure
        //     const previousReview = queryClient.getQueryData(["review", id]);

        //     // Set the review in cache to the payload, Optimistically update the UI before the response
        //     // is returned from the server
        //     queryClient.setQueryData(["review", id], (prev) => ({
        //         ...prev,
        //         ...payload,
        //     }));

        //     // The returned object can be used to rollback the data in cases of failure
        //     // This will be available in the context params of onError and onSettled callbacks
        //     return { previousReview };
        // },
        onError: (error, variables, context) => {
            console.log("onError:", error)
            const errorMessage =
                (typeof error === "string" && error) ||
                error?.message ||
                "An unexpected error occurred. Please try again";

            showToast({
                message: errorMessage,
                type: "error",
                duration: 5000,
            });

            // Rollback the data
            if (context?.previousReview) {
                queryClient.setQueryData(
                    ["review", variables.id],
                    context.previousReview
                );
            }
        },
        onSuccess: (updatedReview) => {
            setIsConfirmModalOpen(false);

            showToast({
                message: "Review Status Successfully updated.",
                type: "success",
                duration: 5000,
            });
            queryClient.invalidateQueries(["reviews"]); // Refresh review list
            queryClient.invalidateQueries([
                "review",
                updatedReview.id,
            ]); // Refresh updated appointment
        },
    });
};
