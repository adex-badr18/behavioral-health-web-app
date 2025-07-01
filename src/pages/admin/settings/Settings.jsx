import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import GeneralTab from "./components/GeneralTab";
import AppointmentTab from "./components/AppointmentTab";
import SecurityTab from "./components/SecurityTab";
import LinkButton from "../../../components/LinkButton";
import TabPanel from "../components/TabPanel";
import PageTitle from "../components/PageTitle";

import { MdOutlineHome } from "react-icons/md";

import { adminData } from "./data";

import { useGetAdminProfile } from "../../../hooks/useGeneral";
import Spinner from "../../../components/Spinner";

export const settingsLoader = async () => {
    return adminData
        ? { status: "success", profile: adminData }
        : {
              status: "error",
              message:
                  "Error fetching your information. Please refresh the page.",
          };
};

const Settings = () => {
    const admin = useLoaderData();
    const [tabIndex, setTabIndex] = useState(1);
    const { data, isLoading, isSuccess, isError, error } =
        useGetAdminProfile("1");
    const [formData, setFormData] = useState({
        profile: {
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
        },
        login: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    });

    useEffect(() => {
        if (data) {
            setFormData((prev) => ({
                ...prev,
                profile: {
                    firstName: data?.firstName,
                    middleName: data?.middleName,
                    lastName: data?.lastName,
                    email: data?.email,
                },
            }));
        }
    }, [isSuccess, data]);

    // Handle form element change
    const handleFormElementChange = (section, field, value) => {
        setFormData((prev) => ({
            ...prev,
            [section]: { ...prev[section], [field]: value },
        }));
    };

    const tabButtons = [
        { id: 1, tabName: "General", isDisabled: false },
        { id: 2, tabName: "Security", isDisabled: false },
    ];

    if (isError) {
        return (
            <section className="py-8 md:py-20">
                <div className="flex flex-col items-center justify-center gap-4 font-poppins">
                    <h1 className="capitalize text-vividRed text-3xl font-bold">
                        Error!
                    </h1>
                    <p className="text-grey text-lg font-medium">
                        {error.message || "Could not fetch admin profile."}
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
                secondaryText="Loading..."
                borderClass="border-originalGreen"
                spinnerSize="w-10 h-10"
            />
        );
    }

    return (
        <section className="p-4">
            <PageTitle title={`Settings`} />

            <TabPanel
                tabButtons={tabButtons}
                tabIndex={tabIndex}
                setTabIndex={setTabIndex}
            />

            {tabIndex === 1 && (
                <GeneralTab
                    formData={formData}
                    onChange={handleFormElementChange}
                />
            )}

            {tabIndex === 2 && (
                <SecurityTab
                    formData={formData}
                    onChange={handleFormElementChange}
                />
            )}
        </section>
    );
};

export default Settings;
