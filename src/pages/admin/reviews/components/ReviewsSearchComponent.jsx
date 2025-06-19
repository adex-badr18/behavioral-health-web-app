import { useState } from "react";
import TextField from "../../../../components/TextField";
import SelectField from "../../../../components/SelectField";
import DateField from "../../../../components/DateField";
import { ratingOptions, statusOptions } from "../data";
import { convertToISO, isFormEmpty } from "../../utils";
import { removeEmptyProps } from "../../../utils";

const ReviewsSearchComponent = ({
    setIsSearchModalOpen,
    onSearch,
    searchData,
    patientId,
}) => {
    const [reqBody, setReqBody] = useState({
        data:
            searchData && Object.keys(searchData).length > 0
                ? searchData
                : {
                      patientId: patientId || "",
                      nickName: "",
                      email: "",
                      rating: "",
                      status: "",
                      createdAt: "",
                  },
    });

    const onReqBodyChange = (section, fieldPath, value) => {
        setReqBody((prev) => {
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
    };

    const searchHandler = async (e) => {
        e.preventDefault();

        onSearch(removeEmptyProps({
            ...reqBody.data,
            createdAt: reqBody.data.createdAt
                ? convertToISO(reqBody.data.createdAt)
                : "",
        }));
        setIsSearchModalOpen(false);
    };

    const clearSearch = (e) => {
        e.preventDefault();

        setReqBody({
            data: {
                patientId: patientId || "",
                nickName: "",
                email: "",
                rating: "",
                status: "",
                createdAt: "",
            },
        });

        onSearch(
            patientId
                ? {
                      patientId: patientId,
                      nickName: "",
                      email: "",
                      rating: "",
                      status: "",
                      createdAt: "",
                  }
                : {}
        );
    };

    return (
        <form className="space-y-5">
            <h3 className="text-xl font-semibold">Search Review(s)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <TextField
                    type="text"
                    label="Display Name"
                    name="nickName"
                    field="nickName"
                    placeholder="Display Name"
                    section="data"
                    value={reqBody.data.nickName ?? ""}
                    handleInputChange={onReqBodyChange}
                />
                <TextField
                    type="text"
                    label="Email"
                    name="email"
                    field="email"
                    placeholder="Email"
                    section="data"
                    value={reqBody.data.email ?? ""}
                    handleInputChange={onReqBodyChange}
                />
                <SelectField
                    label="Rating"
                    name="rating"
                    title="-- Select an option --"
                    data={ratingOptions}
                    value={reqBody.data.rating ?? ""}
                    section="data"
                    field="rating"
                    handleSelectChange={onReqBodyChange}
                />
                <SelectField
                    label="Status"
                    name="status"
                    title="-- Select an option --"
                    data={statusOptions}
                    value={reqBody.data.status ?? ""}
                    section="data"
                    field="status"
                    handleSelectChange={onReqBodyChange}
                />

                <DateField
                    label="Review Date"
                    name="createdAt"
                    field="createdAt"
                    section="data"
                    placeholder="MM/DD/YYYY"
                    handleFormElementChange={onReqBodyChange}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    defaultDate={
                        reqBody.data.createdAt
                            ? new Date(reqBody.data.createdAt)
                            : null
                    }
                />
            </div>

            <div className="flex items-center justify-end gap-4">
                <button
                    onClick={clearSearch}
                    className="py-2 px-4 font-semibold text-center border border-vividRed bg-vividRed rounded-lg text-white hover:text-vividRed hover:bg-transparent transition duration-300"
                >
                    Clear
                </button>

                <button
                    onClick={searchHandler}
                    className={`py-2 px-4 font-semibold text-center border border-lightGreen rounded-lg text-lightGreen hover:text-white hover:bg-lightGreen transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-transparent disabled:hover:text-lightGreen`}
                    disabled={isFormEmpty(reqBody)}
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default ReviewsSearchComponent;
