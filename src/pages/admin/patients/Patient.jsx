import { useEffect, useState, useMemo } from "react";
import PageTitle from "../components/PageTitle";
import LinkButton from "../../../components/LinkButton";
import GeneralTab from "./components/GeneralTab";
import { MdOutlineHome } from "react-icons/md";
import FormsTab from "./components/FormsTab";
import AppointmentsTab from "./components/AppointmentsTab";
import ReviewsTab from "./components/ReviewsTab";

import { MdOutlineEdit } from "react-icons/md";

import { useGetPatient } from "../../../hooks/usePatients";
import { useParams } from "react-router-dom";
import { useToast } from "../../../components/ToastContext";
import Spinner from "../../../components/Spinner";
import ProgramsTab from "./components/ProgramsTab";

const Patient = () => {
    const [tabIndex, setTabIndex] = useState(1);
    const { showToast } = useToast();
    const { id } = useParams();
    const {
        data: patient,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetPatient(id || "");
    const { forms, appointments, programs, reviews, patientId } =
        useMemo(() => {
            return {
                forms: patient?.forms || {},
                appointments: patient?.appointments || [],
                programs: patient?.programs || [],
                reviews: patient?.reviews || [],
                patientId: patient?.patientId,
            };
        }, [patient]);

    useEffect(() => {
        if (isError) {
            const errorMessage =
                (typeof error === "string" && error) ||
                error.message ||
                "An unexpected error occurred. Please try again.";
            showToast({
                message: errorMessage,
                type: "error",
                duration: 5000,
            });
        }
    }, [isError]);

    console.log(patient);

    const changeTabHandler = (tabIndex) => {
        setTabIndex(tabIndex);
    };

    const tabButtons = [
        { id: 1, tabName: "General" },
        { id: 2, tabName: "Programs" },
        { id: 3, tabName: "Appointments" },
        { id: 4, tabName: "Reviews" },
        { id: 5, tabName: "Patient Forms" },
    ];

    if (isError) {
        return (
            <section className="py-8 md:py-20">
                <div className="flex flex-col items-center justify-center gap-4 font-poppins">
                    <h1 className="capitalize text-vividRed text-3xl font-bold">
                        Error!
                    </h1>
                    <p className="text-grey text-lg font-medium">
                        {error.message}
                    </p>
                    {/* <LinkButton
                        name="Home"
                        to="/"
                        bgColor="green"
                        icon={<MdOutlineHome className="text-xl" />}
                    /> */}
                </div>
            </section>
        );
    }

    if (isLoading) {
        return (
            <Spinner
                secondaryText={`Loading patient...`}
                spinnerSize="w-10 h-10"
                textClass="text-lg text-darkBlue font-semibold"
                borderClass="border-lightGreen"
            />
        );
    }

    return (
        <section className="">
            <PageTitle title={""}>
                <LinkButton
                    name="Update Patient Details"
                    to={`/admin/patients/${patient.patientId}/update`}
                    bgColor="green"
                    icon={<MdOutlineEdit className="text-xl" />}
                />
            </PageTitle>

            <div className="flex items-center justify-between gap-4 mb-4 md:mb-8">
                <div className="flex items-center gap-6">
                    {tabButtons.map((button, index) => (
                        <button
                            key={button.id}
                            className="flex items-center gap-2"
                            onClick={() => changeTabHandler(button.id)}
                        >
                            <span
                                className={`font-lato pb-1 ${
                                    tabIndex === button.id
                                        ? "border-b-4 border-lightGreen text-lightGreen font-medium"
                                        : "text-deepGray"
                                }`}
                            >
                                {button.tabName}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {tabIndex === 1 && (
                <GeneralTab patient={forms.patientRegistrationForm} />
            )}

            {tabIndex === 2 && (
                <ProgramsTab programs={programs} patientId={patientId} />
            )}

            {tabIndex === 3 && (
                <AppointmentsTab
                    appointments={appointments}
                    patientId={patientId}
                />
            )}

            {tabIndex === 4 && (
                <ReviewsTab reviews={reviews} patientId={patientId} />
            )}
            {tabIndex === 5 && <FormsTab forms={forms} />}
        </section>
    );
};

export default Patient;
