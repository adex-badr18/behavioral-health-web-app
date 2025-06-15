import medicare from "../../../assets/insurance/medicare-logo.jpg";
import medicaid from "../../../assets/insurance/medicaid-logo.webp";
import carefirst from "../../../assets/insurance/carefirst.jpg";
import optum from "../../../assets/insurance/optum.png";
import optum2 from "../../../assets/insurance/optum2.png";
import maryland from "../../../assets/insurance/maryland.png";
import amerigroup from "../../../assets/insurance/amerigroup.webp";

export const appointmentTypes = [
    { id: 1, text: "In-Person", value: "In-Person" },
    { id: 2, text: "Tele-Health", value: "Tele-Health" },
    { id: 3, text: "Any", value: "Any" },
];

export const services = [
    { id: 1, text: "Med Management", value: "Med Management" },
    { id: 2, text: "Individual Therapy", value: "Individual Therapy" },
    { id: 3, text: "Group Therapy", value: "Group Therapy" },
    { id: 4, text: "Case Management", value: "Case Management" },
    {
        id: 5,
        text: "Psychiatric Rehab.",
        value: "Psychiatric Rehab.",
    },
];

export const paymentMethods = [
    { id: 1, text: "Self Pay", value: "Self Pay" },
    { id: 2, text: "Insurance Card", value: "Insurance Card" },
];

export const insuranceNames = [
    { id: 1, text: "Medicare", value: "Medicare", logo: medicare },
    { id: 2, text: "Main Medicaid", value: "Main Medicaid", logo: medicaid },
    { id: 3, text: "BCBS Carefirst", value: "BCBS Carefirst", logo: carefirst },
    {
        id: 4,
        text: "UHC/Optum/Medicaid",
        value: "UHC/Optum/Medicaid",
        logo: optum,
    },
    {
        id: 5,
        text: "Maryland Physicians Care",
        value: "Maryland Physicians Care",
        logo: maryland,
    },
    { id: 6, text: "Amerigroup", value: "Amerigroup", logo: amerigroup },
];
