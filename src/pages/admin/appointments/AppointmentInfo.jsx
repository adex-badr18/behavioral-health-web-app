import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import FieldItem from "../../../components/FieldItem";
import TextField from "../../../components/TextField";
import SelectField from "../../../components/SelectField";
import DateField from "../../../components/DateField";
import TextAreaField from "../../../components/TextAreaField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { MdEdit, MdClose } from "react-icons/md";

import { appointmentStatusOptions, appointments } from "./data";
import {
    appointmentTypes,
    insuranceNames,
    paymentMethods,
    services,
} from "../../user/appointment/data";
import { fetchUSHolidays } from "../../user/appointment/api";
import { genderOptions } from "../../user/patientForms/data";

import {
    useFetchBookedAppointments,
    useGetAppointment,
    useUpdateAppointment,
} from "../../../hooks/useAppointments";
import { useParams } from "react-router-dom";
import { useToast } from "../../../components/ToastContext";
import Spinner from "../../../components/Spinner";
import SubmitSuccessModal from "./components/SubmitSuccessModal";
import ConfirmUpdateModal from "./components/ConfirmUpdateModal";
import { formatToYYYYMMDD } from "../../utils";

const AppointmentInfo = () => {
    const navigate = useNavigate();
    // useGetAppointment
    const { showToast } = useToast();
    const { id } = useParams();
    const {
        data: appointment,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAppointment(id || "");
    const {
        refetch,
        isLoading: isBookedLoading,
        isPending: isBookedPending,
        isSuccess: isBookedSuccess,
        isError: isBookedError,
        error: bookedAppointmentsError,
    } = useFetchBookedAppointments();

    const [isAppointmentEditable, setIsAppointmentEditable] = useState(false);

    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    const [selectedDateTime, setSelectedDateTime] = useState(null);
    const [holidays, setHolidays] = useState([]);
    const [excludedTimes, setExcludedTimes] = useState({});
    const [formData, setFormData] = useState({ data: {} });

    console.log("Selected Date Time", selectedDateTime);

    const { mutate: updateAppointment, isPending: isUpdatingAppointment } =
        useUpdateAppointment({
            setIsAppointmentEditable,
            setIsConfirmModalOpen,
        });

    console.log("FormData", formData);
    console.log("Appointment", appointment);
    // console.log(selectedDateTime);

    useEffect(() => {
        if (isError) {
            showToast({
                message:
                    `${error?.message}` ||
                    error ||
                    "An error occurred. Please try again.",
                type: "error",
                duration: 5000,
            });
        }

        if (isSuccess) {
            console.log(appointment);
            setFormData((prev) => ({
                data: { ...prev.data, ...appointment },
            }));

            setSelectedDateTime(new Date(appointment.appointmentDateTime));
        }
    }, [isError, isSuccess, appointment]);

    useEffect(() => {
        fetchBookedSlots();
    }, []);

    useEffect(() => {
        if (selectedDateTime instanceof Date && !isNaN(selectedDateTime)) {
            handleFormElementChange(
                "data",
                "appointmentDateTime",
                selectedDateTime.toISOString()
            );
        }
    }, [selectedDateTime]);

    const handleDateTimeChange = (date) => {
        setSelectedDateTime(date);
    };

    async function fetchBookedSlots() {
        const holidays = await fetchUSHolidays();

        // Fetch booked slots
        const response = await refetch();
        const bookedSlots = response?.data?.data?.slots || [];

        // Create a map of dates to excluded time slots
        const excludedDatesTimesMap = {};

        const processExclusions = (list) => {
            list.forEach((period) => {
                const dateKey = new Date(period.date).toLocaleDateString();
                if (!excludedDatesTimesMap[dateKey])
                    excludedDatesTimesMap[dateKey] = [];
                excludedDatesTimesMap[dateKey].push(...period.times);
            });
        };

        // Map all booked appointment times
        processExclusions(bookedSlots);

        setExcludedTimes(excludedDatesTimesMap);
        setHolidays(holidays);
    }

    const handleBookedSlotsRefetch = async (e) => {
        e.preventDefault();

        await fetchBookedSlots();
    };

    // Function to filter dates
    const isDateExcluded = (date) => {
        // Exclude weekends
        const day = new Date(date).getDay();
        return day !== 0 && day !== 6;
    };

    // Function to filter times
    const isTimeExcluded = (time) => {
        // const selectedDateTime = new Date(
        //     formData.appointment.appointmentDateTime
        // );

        if (!selectedDateTime) return false;

        const dateKey = selectedDateTime.toLocaleDateString();
        const timeString = time.toTimeString().substring(0, 5);

        return !excludedTimes[dateKey]?.includes(timeString);
    };

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

    const handleAppointmentEdit = (e) => {
        setIsAppointmentEditable(!isAppointmentEditable);
    };

    const returnHome = () => {
        setIsSubmitModalOpen(false);
        navigate("/admin/appointments");
    };

    const handleSubmit = async () => {
        const updatePayload = {
            ...formData.data,
            dob: formatToYYYYMMDD(formData.data.dob),
        };

        console.log(updatePayload);

        updateAppointment({
            id: formData.data.id,
            payload: updatePayload,
        });
    };

    const openConfirmModal = (e) => {
        e.preventDefault();

        setIsConfirmModalOpen(true);
    };

    if (isLoading) {
        return (
            <Spinner
                secondaryText={`Loading appointment...`}
                spinnerSize="w-10 h-10"
                textClass="text-lg text-darkBlue font-semibold"
                borderClass="border-originalGreen"
            />
        );
    }

    return (
        <section>
            <PageTitle title={`Appointment Details`}>
                <div className="flex flex-col items-cente gap-1">
                    <button
                        onClick={handleAppointmentEdit}
                        className={`${
                            isAppointmentEditable
                                ? "bg-vividRed hover:bg-red-700"
                                : "bg-lightGreen hover:bg-lighterGreen"
                        } rounded-lg px-4 md:px-6 py-3 flex items-center justify-center gap-2 divide-x-2 divide-white text-white font-poppins font-semibold text-nowrap transition duration-500`}
                    >
                        <span className="">
                            {isAppointmentEditable
                                ? "Cancel"
                                : "Edit Appointment"}
                        </span>
                        {isAppointmentEditable ? (
                            <MdClose className="pl-2 text-3xl" />
                        ) : (
                            <MdEdit className="pl-2 text-3xl" />
                        )}
                    </button>
                    {!appointment.patientId && (
                        <Link
                            to="/forms/patient-registration-form"
                            target="_blank"
                            className="text-s text-orange-700 hover:underline underline-offset-2"
                        >
                            Proceed to registration
                        </Link>
                    )}
                </div>
            </PageTitle>

            {isError && (
                <p className="text-vividRed text-center mb-3">
                    {error.message}
                </p>
            )}

            <div className="flex flex-col gap-6 md:gap-8">
                <div className="p-8 border rounded-lg bg-offWhite space-y-4 shadow-lg">
                    <h4 className="text-xl font-medium text-darkBlue">
                        Personal Information
                    </h4>

                    {isAppointmentEditable ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols- gap-8">
                            <TextField
                                type="text"
                                label="First Name"
                                name="firstName"
                                placeholder="First Name"
                                section="data"
                                field="firstName"
                                value={formData.data.firstName ?? ""}
                                handleInputChange={handleFormElementChange}
                                autoFocus
                            />

                            <TextField
                                type="text"
                                label="Middle Initial"
                                name="middleName"
                                placeholder="Middle Initial"
                                section="data"
                                field="middleName"
                                value={formData.data.middleName ?? ""}
                                handleInputChange={handleFormElementChange}
                            />

                            <TextField
                                type="text"
                                label="Last Name"
                                name="lastName"
                                placeholder="Last Name"
                                section="data"
                                field="lastName"
                                value={formData.data.lastName ?? ""}
                                handleInputChange={handleFormElementChange}
                            />

                            <SelectField
                                label="Gender"
                                name="gender"
                                title="-- Select an option --"
                                data={genderOptions}
                                value={formData.data.gender ?? ""}
                                section="data"
                                field="gender"
                                handleSelectChange={handleFormElementChange}
                            />

                            <DateField
                                label="Date of Birth"
                                name="dob"
                                field="dob"
                                section="data"
                                placeholder="MM/DD/YYYY"
                                handleFormElementChange={
                                    handleFormElementChange
                                }
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                defaultDate={
                                    formData.data.dob
                                        ? new Date(formData.data.dob)
                                        : null
                                }
                            />

                            <TextField
                                type="text"
                                label="Phone"
                                name="phone"
                                placeholder="Phone"
                                section="data"
                                field="phone"
                                value={formData.data.phone ?? ""}
                                handleInputChange={handleFormElementChange}
                            />

                            <TextField
                                type="email"
                                label="Email"
                                name="email"
                                placeholder="Email"
                                section="data"
                                field="email"
                                value={formData.data.email ?? ""}
                                handleInputChange={handleFormElementChange}
                            />

                            <TextField
                                type="text"
                                label="Street Address"
                                name="street"
                                placeholder="Street Address"
                                section="data"
                                field="address.streetName"
                                value={formData.data.address.streetName ?? ""}
                                handleInputChange={handleFormElementChange}
                            />

                            <TextField
                                type="text"
                                label="City"
                                name="city"
                                placeholder="City"
                                section="data"
                                field="address.city"
                                value={formData.data.address.city ?? ""}
                                handleInputChange={handleFormElementChange}
                            />

                            <TextField
                                type="text"
                                label="State"
                                name="state"
                                placeholder="State"
                                section="data"
                                field="address.state"
                                value={formData.data.address.state ?? ""}
                                handleInputChange={handleFormElementChange}
                            />

                            <TextField
                                type="text"
                                label="Zip Code"
                                name="zipCode"
                                placeholder="Zip Code"
                                section="data"
                                field="address.zipCode"
                                value={formData.data.address.zipCode ?? ""}
                                handleInputChange={handleFormElementChange}
                            />
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols- gap-8">
                            <FieldItem
                                label="First Name"
                                value={appointment?.firstName || "N/A"}
                            />
                            <FieldItem
                                label="Middle Name"
                                value={appointment?.middleName || "N/A"}
                            />
                            <FieldItem
                                label="Last Name"
                                value={appointment?.lastName || "N/A"}
                            />
                            <FieldItem
                                label="Gender"
                                value={appointment?.gender || "N/A"}
                            />
                            <FieldItem
                                label="Date of Birth"
                                value={
                                    appointment?.dob
                                        ? new Date(
                                              appointment?.dob
                                          ).toLocaleDateString()
                                        : "N/A"
                                }
                            />
                            <FieldItem
                                label="Email"
                                value={appointment?.email || "N/A"}
                            />
                            <FieldItem
                                label="Phone"
                                value={appointment?.phone || "N/A"}
                            />
                            <FieldItem
                                label="Street Address"
                                value={
                                    appointment?.address?.streetName || "N/A"
                                }
                            />
                            <FieldItem
                                label="City"
                                value={appointment?.address?.city || "N/A"}
                            />
                            <FieldItem
                                label="State"
                                value={appointment?.address?.state || "N/A"}
                            />
                            <FieldItem
                                label="Zip Code"
                                value={appointment?.address?.zipCode || "N/A"}
                            />
                        </div>
                    )}
                </div>

                <div className={`space-y-6 md:space-y-8`}>
                    <div className="p-8 border rounded-lg bg-offWhite space-y-4 w-full shadow-lg">
                        <h4 className="text-xl font-medium text-darkBlue">
                            Appointment
                        </h4>

                        {isAppointmentEditable ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <div className="space-y-1">
                                    <label
                                        htmlFor="appointmentDateTime"
                                        className="block text-deepGrey"
                                    >
                                        Appointment date & time{" "}
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
                                        holidays={holidays}
                                        filterDate={isDateExcluded}
                                        filterTime={isTimeExcluded}
                                        minDate={new Date()}
                                        minTime={new Date(0, 0, 0, 9)}
                                        maxTime={new Date(0, 0, 0, 16)}
                                        disabled={
                                            isBookedLoading || isBookedError
                                        }
                                    />
                                    {isBookedError && (
                                        <div className="flex items-center gap-3">
                                            <p className="text-sm text-vividRed">
                                                {`Could not fetch booked slots: ${bookedAppointmentsError}`}
                                            </p>
                                            <button
                                                onClick={
                                                    handleBookedSlotsRefetch
                                                }
                                                className="flex items-center gap-1 text-sm text-white bg-grey hover:bg-gray-600 px-2 py-1 rounded transition-colors duration-300"
                                                disabled={isBookedLoading}
                                            >
                                                <span className="">Retry</span>{" "}
                                                <MdRefresh />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <SelectField
                                    label="Status"
                                    name="status"
                                    title="-- Select an option --"
                                    data={appointmentStatusOptions}
                                    value={formData.data.status ?? ""}
                                    section="data"
                                    field="status"
                                    handleSelectChange={handleFormElementChange}
                                />

                                <SelectField
                                    label="Type"
                                    name="appointmentType"
                                    title="-- Select an option --"
                                    data={appointmentTypes}
                                    value={formData.data.appointmentType ?? ""}
                                    section="data"
                                    field="appointmentType"
                                    handleSelectChange={handleFormElementChange}
                                />

                                <SelectField
                                    label="Service"
                                    name="service"
                                    title="-- Select an option --"
                                    data={services}
                                    value={formData.data.service ?? ""}
                                    section="data"
                                    field="service"
                                    handleSelectChange={handleFormElementChange}
                                />

                                <TextAreaField
                                    label="Purpose of Visit"
                                    name="purpose"
                                    placeholder="Write detailed description here"
                                    section="data"
                                    field="purpose"
                                    value={formData.data.purpose ?? ""}
                                    handleFormElementChange={
                                        handleFormElementChange
                                    }
                                />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <FieldItem
                                    label="Type"
                                    value={
                                        appointment?.appointmentType || "N/A"
                                    }
                                />
                                <FieldItem
                                    label="Service"
                                    value={appointment?.service || "N/A"}
                                />
                                <FieldItem
                                    label="Date & Time"
                                    value={
                                        appointment?.appointmentDateTime
                                            ? new Date(
                                                  appointment?.appointmentDateTime
                                              ).toLocaleString()
                                            : "N/A"
                                    }
                                />
                                <FieldItem
                                    label="Status"
                                    value={appointment?.status || "N/A"}
                                />
                                <FieldItem
                                    label="Purpose"
                                    value={appointment?.purpose || "N/A"}
                                />
                            </div>
                        )}
                    </div>

                    <div className="p-8 border rounded-lg bg-offWhite space-y-4 w-full shadow-lg">
                        <h4 className="text-xl font-medium text-darkBlue">
                            Payment
                        </h4>

                        {isAppointmentEditable ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <SelectField
                                    label="Payment Method"
                                    name="paymentMethod"
                                    title="-- Select an option --"
                                    data={paymentMethods}
                                    value={formData.data.paymentMethod ?? ""}
                                    section="data"
                                    field="paymentMethod"
                                    handleSelectChange={handleFormElementChange}
                                />

                                <SelectField
                                    label="Insurance Name"
                                    name="insuranceName"
                                    title="-- Select an option --"
                                    data={insuranceNames}
                                    value={formData.data.insuranceName ?? ""}
                                    section="data"
                                    field="insuranceName"
                                    handleSelectChange={handleFormElementChange}
                                />

                                <TextField
                                    type="text"
                                    label="Insurance Number"
                                    name="insuranceNumber"
                                    placeholder="Insurance Number"
                                    section="data"
                                    field="insuranceNumber"
                                    value={formData.data.insuranceNumber ?? ""}
                                    handleInputChange={handleFormElementChange}
                                />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <FieldItem
                                    label="Payment Method"
                                    value={appointment?.paymentMethod || "N/A"}
                                />
                                <FieldItem
                                    label="Insurance Name"
                                    value={appointment?.insuranceName || "N/A"}
                                />
                                <FieldItem
                                    label="Insurance Number"
                                    value={
                                        appointment?.insuranceNumber || "N/A"
                                    }
                                />
                            </div>
                        )}
                    </div>
                </div>

                {isAppointmentEditable && (
                    <button
                        onClick={openConfirmModal}
                        className="self-end w-auto bg-lightGreen hover:bg-lighterGreen px-4 py-2 text-white font-medium rounded-lg"
                    >
                        Update Appointment
                    </button>
                )}
            </div>

            {/* Submission Response */}
            {isSubmitModalOpen && (
                <SubmitSuccessModal
                    isSubmitModalOpen={isSubmitModalOpen}
                    returnHome={returnHome}
                />
            )}

            {/* Confirm */}
            {isConfirmModalOpen && (
                <ConfirmUpdateModal
                    handleSubmit={handleSubmit}
                    isConfirmModalOpen={isConfirmModalOpen}
                    isSubmitting={isUpdatingAppointment}
                    setIsConfirmModalOpen={setIsConfirmModalOpen}
                />
            )}
        </section>
    );
};

export default AppointmentInfo;
