import { useState, useEffect } from "react";
import DateField from "../../../../components/DateField";
import TextField from "../../../../components/TextField";
import SelectField from "../../../../components/SelectField";
import {
    genderOptions,
    maritalStatusOptions,
} from "../../../user/patientForms/data";
import { paymentMethods } from "../../../user/appointment/data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { convertToISO, isFormEmpty } from "../../utils";
import { formatToYYYYMMDD, removeEmptyProps } from "../../../utils";

const AppointmentsSearchComponent = ({
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
                      firstName: "",
                      lastName: "",
                      middleName: "",
                      dob: "",
                      phone: "",
                      email: "",
                      gender: "",
                      maritalStatus: "",
                      city: "",
                      state: "",
                      appointmentDateTime: "",
                      paymentMode: "",
                  },
    });
    const [selectedDateTime, setSelectedDateTime] = useState(
        searchData.appointmentDateTime
            ? new Date(searchData.appointmentDateTime)
            : null
    );

    useEffect(() => {
        if (selectedDateTime) {
            setReqBody((prev) => ({
                ...prev,
                data: { ...prev.data, appointmentDateTime: selectedDateTime },
            }));
        }
    }, [selectedDateTime]);

    const handleDateTimeChange = (date) => {
        setSelectedDateTime(date);
    };

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

        onSearch(
            removeEmptyProps({
                ...reqBody.data,
                dob: reqBody.data.dob ? formatToYYYYMMDD(reqBody.data.dob) : "",
                appointmentDateTime: reqBody.data.appointmentDateTime
                    ? convertToISO(reqBody.data.appointmentDateTime)
                    : "",
            })
        );
        setIsSearchModalOpen(false);
    };

    const clearSearch = (e) => {
        e.preventDefault();

        setReqBody({
            data: {
                patientId: patientId || "",
                firstName: "",
                lastName: "",
                middleName: "",
                dob: "",
                phone: "",
                email: "",
                gender: "",
                maritalStatus: "",
                city: "",
                state: "",
                appointmentDateTime: "",
                paymentMode: "",
            },
        });

        onSearch(
            patientId
                ? {
                      patientId: patientId,
                      firstName: "",
                      lastName: "",
                      middleName: "",
                      dob: "",
                      phone: "",
                      email: "",
                      gender: "",
                      maritalStatus: "",
                      city: "",
                      state: "",
                      appointmentDateTime: "",
                      paymentMode: "",
                  }
                : {}
        );
    };

    return (
        <form className="space-y-5">
            <h3 className="text-xl font-semibold">Search Appointment(s)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {!patientId && (
                    <>
                        <TextField
                            type="text"
                            label="Patient ID"
                            name="patientId"
                            field="patientId"
                            placeholder="Patient ID"
                            section="data"
                            value={reqBody.data.patientId ?? ""}
                            handleInputChange={onReqBodyChange}
                        />
                        <TextField
                            type="text"
                            label="First Name"
                            name="firstName"
                            field="firstName"
                            placeholder="First Name"
                            section="data"
                            value={reqBody.data.firstName ?? ""}
                            handleInputChange={onReqBodyChange}
                        />
                        <TextField
                            type="text"
                            label="Middle Name"
                            name="middleName"
                            field="middleName"
                            placeholder="Middle Name"
                            section="data"
                            value={reqBody.data.middleName ?? ""}
                            handleInputChange={onReqBodyChange}
                        />
                        <TextField
                            type="text"
                            label="Last Name"
                            name="lastName"
                            field="lastName"
                            placeholder="Last Name"
                            section="data"
                            value={reqBody.data.lastName ?? ""}
                            handleInputChange={onReqBodyChange}
                        />
                        <DateField
                            label="Date of Birth"
                            name="dob"
                            field="dob"
                            section="data"
                            placeholder="MM/DD/YYYY"
                            handleFormElementChange={onReqBodyChange}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            defaultDate={
                                reqBody.data.dob
                                    ? new Date(reqBody.data.dob)
                                    : null
                            }
                        />
                        <TextField
                            type="text"
                            label="Phone Number"
                            name="phone"
                            field="phone"
                            placeholder="Phone Number"
                            section="data"
                            value={reqBody.data.phone ?? ""}
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
                            label="Gender"
                            name="gender"
                            title="-- Select an option --"
                            data={genderOptions}
                            value={reqBody.data.gender ?? ""}
                            section="data"
                            field="gender"
                            handleSelectChange={onReqBodyChange}
                        />
                        <SelectField
                            label="Marital Status"
                            name="maritalStatus"
                            title="-- Select an option --"
                            data={maritalStatusOptions}
                            value={reqBody.data.maritalStatus ?? ""}
                            section="data"
                            field="maritalStatus"
                            handleSelectChange={onReqBodyChange}
                        />
                        <TextField
                            type="text"
                            label="City"
                            name="city"
                            field="city"
                            placeholder="City"
                            section="data"
                            value={reqBody.data.city ?? ""}
                            handleInputChange={onReqBodyChange}
                        />
                        <TextField
                            type="text"
                            label="State"
                            name="state"
                            field="state"
                            placeholder="State"
                            section="data"
                            value={reqBody.data.state ?? ""}
                            handleInputChange={onReqBodyChange}
                        />
                    </>
                )}

                <div className="space-y-1">
                    <label
                        htmlFor="appointmentDateTime"
                        className="block text-deepGrey"
                    >
                        Appointment Date & Time
                    </label>
                    <DatePicker
                        id="appointmentDateTime"
                        name="appointmentDateTime"
                        selected={selectedDateTime}
                        onChange={handleDateTimeChange}
                        showTimeSelect
                        showYearDropdown
                        showMonthDropdown
                        dropdownMode="select"
                        timeFormat="HH:mm"
                        timeIntervals={60}
                        dateFormat={`MM/dd/yyyy HH:mm`}
                        placeholderText="MM/dd/yyyy HH:mm"
                        className="input"
                    />
                </div>
                <SelectField
                    label="Payment Options"
                    name="paymentMode"
                    title="-- Select an option --"
                    data={paymentMethods}
                    value={reqBody.data.paymentMode ?? ""}
                    section="data"
                    field="paymentMode"
                    handleSelectChange={onReqBodyChange}
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

export default AppointmentsSearchComponent;
