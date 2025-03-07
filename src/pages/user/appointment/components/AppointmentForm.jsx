import { useEffect, useMemo, useState } from "react";

import Dropdown from "../../../../components/Dropdown";
import TextAreaField from "../../../../components/TextAreaField";
import { appointmentTypes, services } from "../data";
import {
    fetchAdminUnavailablePeriods,
    fetchBookedAppointmentsPeriods,
    fetchUSHolidays,
} from "../api";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectField from "../../../../components/SelectField";

const AppointmentForm = ({ formData, handleInputChange }) => {
    const [selectedDateTime, setSelectedDateTime] = useState(formData.appointment.appointmentDateTime || null);
    const [holidays, setHolidays] = useState([]);
    const [excludedTimes, setExcludedTimes] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const [adminPeriods, bookedPeriods, holidays] = await Promise.all([
                fetchAdminUnavailablePeriods(),
                fetchBookedAppointmentsPeriods(),
                fetchUSHolidays(),
            ]);

            // Create a map of dates to excluded times
            const excludedDatesTimesMap = {};

            const processExclusions = (list) => {
                list.forEach((period) => {
                    const dateKey = new Date(period.date).toLocaleDateString();
                    if (!excludedDatesTimesMap[dateKey])
                        excludedDatesTimesMap[dateKey] = [];
                    excludedDatesTimesMap[dateKey].push(...period.times);
                });
            };

            // Map all admin-set times
            processExclusions(adminPeriods);

            // Map all booked appointment times
            processExclusions(bookedPeriods);

            setExcludedTimes(excludedDatesTimesMap);
            setHolidays(holidays);
        };

        fetchData();
    }, []);

    // Function to filter dates
    const isDateExcluded = (date) => {
        // Exclude weekends
        const day = new Date(date).getDay();
        return day !== 0 && day !== 6;
    };

    // Function to filter times
    const isTimeExcluded = (time) => {
        if (!selectedDateTime) return false;
        const dateKey = selectedDateTime.toLocaleDateString();
        const timeString = time.toTimeString().substring(0, 5);

        return !excludedTimes[dateKey]?.includes(timeString);
    };

    // const getMinTime = useMemo(() => {
    //     const today = new Date();
    //     if (!selectedDateTime) return today;

    //     const selectedDate = new Date(selectedDateTime);

    //     const allTimes = Array.from({ length: 24 }, (_, i) =>
    //         selectedDateTime.setHours(i, 0, 0, 0)
    //     );

    //     const allowedTimes = allTimes
    //         .filter((time) => {
    //             const hour = new Date(time).getHours();
    //             return hour >= 9 && hour <= 16;
    //         })
    //         .map((time) => new Date(time));

    //     console.log(allowedTimes);
    // });

    useEffect(() => {
        handleInputChange(
            "appointment",
            "appointmentDateTime",
            selectedDateTime
        );
    }, [selectedDateTime]);

    const handleDateTimeChange = (date) => {
        setSelectedDateTime(date);
    };

    return (
        <div className="space-y-6">
            <form className="space-y-8 divide-y-2 divide-lightGray">
                <div className="flex flex-col gap-4">
                    <div className="space-y-2">
                        <h3 className="text-lg md:text-xl font-medium text-deepGrey text-center">
                            What are your appointment requirements?
                        </h3>

                        <p
                            aria-label="All fields marked asterik (*) are required"
                            className="text-sm text-vividRed font-bold text-center"
                        >
                            All fields marked (*) are required.
                        </p>
                    </div>

                    <SelectField
                        label="Appointment Type"
                        name="appointmentType"
                        title="-- Select an option --"
                        data={appointmentTypes}
                        value={formData.appointment.appointmentType}
                        section="appointment"
                        field="appointmentType"
                        handleSelectChange={handleInputChange}
                        isRequired={true}
                    />

                    <SelectField
                        label="Service Needed"
                        name="service"
                        title="-- Select an option --"
                        data={services}
                        value={formData.appointment.service}
                        section="appointment"
                        field="service"
                        handleSelectChange={handleInputChange}
                        isRequired={true}
                    />

                    <TextAreaField
                        label="Purpose of Visit"
                        name="purpose"
                        placeholder="Write detailed description here"
                        section="appointment"
                        field="purpose"
                        value={formData.appointment.purpose}
                        handleFormElementChange={handleInputChange}
                        isRequired={true}
                    />

                    <div className="space-y-1">
                        <label
                            htmlFor="appointmentDateTime"
                            className="block text-deepGrey"
                        >
                            Select appointment date & time{" "}
                            <small className="text-vividRed text-lg">*</small>
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
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AppointmentForm;
