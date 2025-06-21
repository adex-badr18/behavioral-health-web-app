import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useToast } from "../../../components/ToastContext";
import { pdf } from "@react-pdf/renderer";

import { useGetRegInfo, useUpdatePatient } from "../../../hooks/usePatients";
import PageTitle from "../components/PageTitle";
import LinkButton from "../../../components/LinkButton";
import { MdOutlineEdit } from "react-icons/md";
import TabPanel from "../components/TabPanel";
import PersonalUpdateForm from "./components/forms/PersonalUpdateForm";
import GuarantorUpdateForm from "./components/forms/GuarantorUpdateForm";
import ParentUpdateForm from "./components/forms/ParentUpdateForm";
import EmergencyUpdateForm from "./components/forms/EmergencyUpdateForm";
import PaymentInfoUpdateForm from "./components/forms/PaymentInfoUpdateForm";
import ConsentUpdateForm from "./components/forms/ConsentUpdateForm";
import PdfUpload from "./components/forms/PdfUpload";

import { initialPatientRegFormData } from "./data";
import Spinner from "../../../components/Spinner";
import { convertBooleanToText } from "../../utils";
import BackButton from "../../../components/BackButton";
import FetchError from "../../../components/FetchError";

const UpdateRegistration = () => {
    const [tabIndex, setTabIndex] = useState(1);
    const { showToast } = useToast();
    const { id } = useParams();
    const {
        data: patient,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetRegInfo(id || "");

    const [formData, setFormData] = useState(initialPatientRegFormData);

    // console.log(patient);
    // console.log(formData.personal.dob);

    // const [consents, setConsents] = useState({
    //     dataAccuracy: true,
    //     insuranceAuth: true,
    //     finResponsible: true,
    //     infoRelease: true,
    // });

    useEffect(() => {
        if (isSuccess && patient) {
            const insurances = patient.paymentStructure?.insurances || [];

            const primaryInsurance =
                insurances.filter((insurance) => !!insurance.primary) || {};

            const secondaryInsurance =
                insurances.filter((insurance) => !insurance.primary) || {};

            setFormData({
                identification: {
                    id: patient?.id,
                    patientId: patient?.patientId,
                },
                personal: {
                    firstName: patient?.personalInfo?.firstName || "",
                    middleName: patient?.personalInfo?.middleName || "",
                    lastName: patient?.personalInfo?.lastName || "",
                    gender: patient?.personalInfo?.gender || "",
                    dob: patient?.personalInfo?.dob
                        ? new Date(patient.personalInfo.dob)
                        : null,
                    maritalStatus: patient?.personalInfo?.maritalStatus || "",
                    socialSecurityNumber:
                        patient?.personalInfo?.socialSecurityNumber || "",
                    homePhone: patient?.personalInfo?.homePhone || "",
                    cellPhone: patient?.personalInfo?.cellPhone || "",
                    workPhone: patient?.personalInfo?.workPhone || "",
                    preferredPhone: patient?.personalInfo?.preferredPhone || "",
                    appointmentReminderMode:
                        patient?.personalInfo?.appointmentReminderMode || "",
                    email: patient?.personalInfo?.email || "",
                    sendMsgToHomePhone:
                        convertBooleanToText(
                            patient?.personalInfo?.sendMsgToHomePhone
                        ) || "",
                    sendMsgToRelative:
                        convertBooleanToText(
                            patient?.personalInfo?.sendMsgToRelative
                        ) || "",
                    sendMsgToWork:
                        convertBooleanToText(
                            patient?.personalInfo?.sendMsgToWork
                        ) || "",
                    sendMsgToCellPhone:
                        convertBooleanToText(
                            patient?.personalInfo?.sendMsgToCellPhone
                        ) || "",
                    address: {
                        id: patient?.personalInfo?.address?.id || "",
                        streetName:
                            patient?.personalInfo?.address.streetName || "",
                        city: patient?.personalInfo?.address.city || "",
                        state: patient?.personalInfo?.address.state || "",
                        zipCode: patient?.personalInfo?.address.zipCode || "",
                    },
                    highestEduLevel:
                        patient?.personalInfo?.highestEduLevel || "",
                    employmentStatus:
                        patient?.personalInfo?.employmentStatus || "",
                    employer: patient?.personalInfo?.employer || "",
                    occupation: patient?.personalInfo?.occupation || "",
                    religion: patient?.personalInfo?.religion || "",
                    ethnicity: patient?.personalInfo?.ethnicity || "",
                    race: patient?.personalInfo?.race || "",
                    preferredLanguage:
                        patient?.personalInfo?.preferredLanguage || "",
                },
                guarantor: {
                    id: patient?.guarantor?.id || "",
                    firstName: patient?.guarantor?.firstName || "",
                    // middleName: patient?.guarantor?.firstName || "",
                    lastName: patient?.guarantor?.lastName || "",
                    dob: patient?.guarantor?.dob
                        ? new Date(patient.guarantor.dob)
                        : null,
                    relationship: patient?.guarantor?.relationship || "",
                    address: {
                        id: patient?.guarantor?.address?.id || "",
                        streetName:
                            patient?.guarantor?.address?.streetName || "",
                        city: patient?.guarantor?.address?.city || "",
                        state: patient?.guarantor?.address?.state || "",
                        zipCode: patient?.guarantor?.address?.zipCode || "",
                    },
                    phone: patient?.guarantor?.phone || "",
                    email: patient?.guarantor?.email || "",
                    stateIssuedId: patient?.guarantor?.stateIssuedId || "",
                    insuranceCard: patient?.guarantor?.insuranceCard || "",
                },
                parent: {
                    id: patient?.parentGuardian?.id || "",
                    firstName: patient?.parentGuardian?.firstName || "",
                    // middleName: patient?.parentGuardian?.firstName || "",
                    lastName: patient?.parentGuardian?.lastName || "",
                    gender: patient?.parentGuardian?.gender || "",
                    maritalStatus: patient?.parentGuardian?.maritalStatus || "",
                    phone: patient?.parentGuardian?.phone || "",
                    email: patient?.parentGuardian?.email || "",
                    familyRole: patient?.parentGuardian?.familyRole || "",
                    employmentStatus:
                        patient?.parentGuardian?.employmentStatus || "",
                    employer: patient?.parentGuardian?.employer || "",
                    occupation: patient?.parentGuardian?.occupation || "",
                    address: {
                        id: patient?.parentGuardian?.address?.id || "",
                        streetName:
                            patient?.parentGuardian?.address?.streetName || "",
                        city: patient?.parentGuardian?.address?.city || "",
                        state: patient?.parentGuardian?.address?.state || "",
                        zipCode:
                            patient?.parentGuardian?.address?.zipCode || "",
                    },
                },
                emergency: {
                    id: patient?.emergency?.id || "",
                    firstName: patient?.emergency?.firstName || "",
                    // middleName: patient?.emergency?.firstName || "",
                    lastName: patient?.emergency?.lastName || "",
                    relationship: patient?.emergency?.relationship || "",
                    address: {
                        id: patient?.emergency?.address?.id || "",
                        streetName:
                            patient?.emergency?.address?.streetName || "",
                        city: patient?.emergency?.address?.city || "",
                        state: patient?.emergency?.address?.state || "",
                        zipCode: patient?.emergency?.address?.zipCode || "",
                    },
                    homePhone: patient?.emergency?.homePhone || "",
                    cellPhone: patient?.emergency?.cellPhone || "",
                    email: patient?.emergency?.email || "",
                },
                insurance: {
                    paymentMode: patient?.paymentStructure?.paymentMode || "",
                    primaryInsurance: {
                        id: primaryInsurance?.id || "",
                        primary: true,
                        policyHolder: {
                            firstName:
                                primaryInsurance?.policyHolder?.firstName || "",
                            middleName:
                                primaryInsurance?.policyHolder?.middleName ||
                                "",
                            lastName:
                                primaryInsurance?.policyHolder?.lastName || "",
                            relationship:
                                primaryInsurance?.policyHolder?.relationship ||
                                "",
                            phone: primaryInsurance?.policyHolder?.phone || "",
                            dob: primaryInsurance?.policyHolder?.dob
                                ? new Date(primaryInsurance?.policyHolder?.dob)
                                : null,
                        },
                        insuranceProvider: {
                            name:
                                primaryInsurance?.insuranceProvider?.name || "",
                            phone:
                                primaryInsurance?.insuranceProvider?.phone ||
                                "",
                            policyId:
                                primaryInsurance?.insuranceProvider?.policyId ||
                                "",
                            groupNumber:
                                primaryInsurance?.insuranceProvider
                                    ?.groupNumber || "",
                            authorizationId:
                                primaryInsurance?.insuranceProvider
                                    ?.authorizationId || "",
                            coPay:
                                primaryInsurance?.insuranceProvider?.coPay ||
                                "",
                            coverageStartDate: primaryInsurance
                                ?.insuranceProvider?.coverageStartDate
                                ? new Date(
                                      primaryInsurance?.insuranceProvider?.coverageStartDate
                                  )
                                : null,
                            coverageEndDate: primaryInsurance?.insuranceProvider
                                ?.coverageEndDate
                                ? new Date(
                                      primaryInsurance?.insuranceProvider?.coverageEndDate
                                  ).toLocaleDateString()
                                : null,
                            address: {
                                id:
                                    primaryInsurance?.insuranceProvider?.address
                                        ?.id || "",
                                streetName:
                                    primaryInsurance?.insuranceProvider?.address
                                        ?.streetName || "",
                                city:
                                    primaryInsurance?.insuranceProvider?.address
                                        ?.city || "",
                                state:
                                    primaryInsurance?.insuranceProvider?.address
                                        ?.state || "",
                                zipCode:
                                    primaryInsurance?.insuranceProvider?.address
                                        ?.zipCode || "",
                            },
                        },
                    },
                    secondaryInsurance: {
                        id: secondaryInsurance?.id || "",
                        primary: false,
                        policyHolder: {
                            firstName:
                                secondaryInsurance?.policyHolder?.firstName ||
                                "",
                            middleName:
                                secondaryInsurance?.policyHolder?.middleName ||
                                "",
                            lastName:
                                secondaryInsurance?.policyHolder?.lastName ||
                                "",
                            relationship:
                                secondaryInsurance?.policyHolder
                                    ?.relationship || "",
                            phone:
                                secondaryInsurance?.policyHolder?.phone || "",
                            dob: secondaryInsurance?.policyHolder?.dob
                                ? new Date(
                                      secondaryInsurance?.policyHolder?.dob
                                  ).toLocaleDateString()
                                : null,
                        },
                        insuranceProvider: {
                            name:
                                secondaryInsurance?.insuranceProvider?.name ||
                                "",
                            phone:
                                secondaryInsurance?.insuranceProvider?.phone ||
                                "",
                            policyId:
                                secondaryInsurance?.insuranceProvider
                                    ?.policyId || "",
                            groupNumber:
                                secondaryInsurance?.insuranceProvider
                                    ?.groupNumber || "",
                            authorizationId:
                                secondaryInsurance?.insuranceProvider
                                    ?.authorizationId || "",
                            coverageStartDate: secondaryInsurance
                                ?.insuranceProvider?.coverageStartDate
                                ? new Date(
                                      secondaryInsurance?.insuranceProvider?.coverageStartDate
                                  )
                                : null,
                            coverageEndDate: secondaryInsurance
                                ?.insuranceProvider?.coverageEndDate
                                ? new Date(
                                      secondaryInsurance?.insuranceProvider?.coverageEndDate
                                  ).toLocaleDateString()
                                : null,
                            // haveCoordinationBenefits:
                            //     secondaryInsurance?.insuranceProvider?.haveCoordinationBenefits || "",
                            address: {
                                id:
                                    secondaryInsurance?.insuranceProvider
                                        ?.address?.id || "",
                                streetName:
                                    secondaryInsurance?.insuranceProvider
                                        ?.address?.streetName || "",
                                city:
                                    secondaryInsurance?.insuranceProvider
                                        ?.address?.city || "",
                                state:
                                    secondaryInsurance?.insuranceProvider
                                        ?.address?.state || "",
                                zipCode:
                                    secondaryInsurance?.insuranceProvider
                                        ?.address?.zipCode || "",
                            },
                            coPay:
                                secondaryInsurance?.insuranceProvider?.coPay ||
                                "",
                        },
                    },
                },
                consent: {
                    signature: "",
                    date: "",
                },
                upload: { file: "" },
            });
        }
    }, [patient, isSuccess]);

    // const handleTabChange = (index) => {
    //     setTabIndex(index);
    // };

    // const isConsentsFilled = () => {
    //     for (const key in consents) {
    //         const value = consents[key];

    //         if (!value) {
    //             return true;
    //         }
    //     }

    //     if (!formData.consent.signature) {
    //         return true;
    //     }

    //     return false;
    // };

    console.log(formData);

    const tabButtons = [
        { id: 1, tabName: "Personal", isDisabled: false },
        { id: 2, tabName: "Parent/Guardian", isDisabled: false },
        { id: 3, tabName: "Guarantor", isDisabled: false },
        { id: 4, tabName: "Emergency", isDisabled: false },
        { id: 5, tabName: "Payment Info", isDisabled: false },
        // { id: 6, tabName: "Consents", isDisabled: false },
        // { id: 7, tabName: "Upload", isDisabled: false },
    ];

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

    if (isError) {
        return (
            <FetchError homeLink="/admin/patients" />
        );
    }

    if (isLoading) {
        return (
            <Spinner
                secondaryText={`Loading patient's information...`}
                spinnerSize="w-10 h-10"
                textClass="text-lg text-darkBlue font-semibold"
                borderClass="border-lightGreen"
            />
        );
    }

    return (
        <section className="p-4 md:p-8">
            <PageTitle title={"Patient's Registration Update"}>
                <BackButton />
            </PageTitle>

            <TabPanel
                tabButtons={tabButtons}
                tabIndex={tabIndex}
                setTabIndex={setTabIndex}
            />

            <div className="bg-offWhite p-4 md:p-6 rounded-lg">
                {tabIndex === 1 && (
                    <PersonalUpdateForm
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                )}

                {tabIndex === 2 && (
                    <ParentUpdateForm
                        formData={formData}
                        handleInputChange={handleFormElementChange}
                    />
                )}

                {tabIndex === 3 && (
                    <GuarantorUpdateForm
                        formData={formData}
                        handleInputChange={handleFormElementChange}
                    />
                )}

                {tabIndex === 4 && (
                    <EmergencyUpdateForm
                        formData={formData}
                        handleInputChange={handleFormElementChange}
                    />
                )}

                {tabIndex === 5 && (
                    <PaymentInfoUpdateForm
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                )}

                {/* {tabIndex === 6 && (
                    <ConsentUpdateForm
                        formData={formData}
                        onChange={handleFormElementChange}
                        consents={consents}
                        setConsents={setConsents}
                    />
                )} */}

                {/* {tabIndex === 7 && <PdfUpload formData={formData} />} */}
            </div>
        </section>
    );
};

export default UpdateRegistration;
