import { useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import Table from "./Table";
import GlobalPagination from "./GlobalPagination";
import Spinner from "../../../components/Spinner";
import { usePaginatedList } from "../../../hooks/useGeneral";
import { useToast } from "../../../components/ToastContext";
import { isAllEmptyExceptPatientId } from "../utils";

const PaginatedList = ({
    queryKey,
    endpoint,
    columns,
    payload,
    pageTitle,
    setIsSearchModalOpen,
    reqBody,
    setReqBody,
    patientId,
}) => {
    const { showToast } = useToast();
    const [page, setPage] = useState(1);
    const { data, isLoading, isFetching, isError, error } = usePaginatedList({
        queryKey,
        endpoint,
        page,
        payload,
    });

    // const tableData = queryKey[0] in (data || {}) ? data[queryKey[0]] : [];
    const tableData = (!isError && data && data[queryKey[0]]) || [];

    console.log(reqBody);
    console.log(data);

    // Reset page to 1 when payload changes
    useEffect(() => {
        setPage(1);
    }, [payload]);

    // Show toast error whenever an error occur
    useEffect(() => {
        if (isError) {
            showToast({
                message:
                    error.message ||
                    `Error loading ${queryKey[0]}. Please try again.`,
                type: "error",
                duration: 5000,
            });
        }
    }, [isError]);

    const handleNext = async () => {
        const hasMore = data?.currentPage < data?.totalPages;
        setPage((prev) => (hasMore ? prev + 1 : prev));
    };

    const handlePrevious = async () => {
        setPage((prev) => Math.max(prev - 1, 1));
    };

    if (isLoading) {
        return (
            <Spinner
                secondaryText={`Loading ${queryKey[0]}...`}
                spinnerSize="w-10 h-10"
                textClass="text-lg text-darkBlue font-semibold"
                borderClass="border-lightGreen"
            />
        );
    }

    return (
        <section className="py-8 relative">
            {/* Loading Overlay */}
            {isFetching && !isError && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 rounded shadow-lg px-3 py-1 bg-borderColor text-offWhite">
                    Loading...
                </div>
            )}

            <PageTitle title={pageTitle}>
                {tableData.length > 0 && (
                    <GlobalPagination
                        metaData={{
                            currentPage: data?.currentPage,
                            totalPages: data?.totalPages,
                            page,
                        }}
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                    />
                )}
            </PageTitle>

            {isError && (
                <p className="text-vividRed text-center mb-3">
                    {error.message}
                </p>
            )}

            <Table
                data={tableData}
                columns={columns}
                entity={queryKey[0]}
                isIncludePagination={true}
                isIncludeSearchBox={true}
                isRowClickable={true}
                tableTitle={queryKey[0]}
                columnFilters={[]}
                setIsSearchModalOpen={setIsSearchModalOpen}
                isGlobalSearch={
                    patientId
                        ? isAllEmptyExceptPatientId(reqBody)
                        : Object.keys(reqBody).length < 1
                }
                setGlobalSearch={setReqBody}
                patientId={patientId}
            />
        </section>
    );
};

export default PaginatedList;
