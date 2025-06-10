import { Document } from "@react-pdf/renderer";
import PdfPreview from "../../../../../components/PdfPreview";
import ClientRight from "../components/ClientRight";
import RightAcknowledgement from "../components/RightAcknowledgement";
import ConsentForServices from "../components/ConsentForServices";
import { PageWrapper } from "../components/pdfFormComponents";
import signature from "../../../../../assets/signature.jpg";
import BillInsurance from "../components/BillInsurance";
import GrievancePolicy from "../components/GrievancePolicy";
import TelehealthConsent from "../components/TelehealthConsent";
import MessageRemindersConsent from "../components/MessageRemindersConsent";
import ClientOrientation from "../components/ClientOrientation";
import Packets from "../components/Packets";
import EarlyInterventionConsent from "../components/EarlyInterventionConsent";

import { getFullAddress, getFullName } from "../../utils";
import { convertIsoDateToReadable, formatToMMDDYYYY } from "../../../../utils";

const EarlyInterventionDoc = ({ formData }) => {
    const fullName = getFullName({
        firstName: formData?.basicInfo?.firstName || "",
        middleName: formData?.basicInfo?.middleName || "",
        lastName: formData?.basicInfo?.lastName || "",
    });

    const fullAddress = getFullAddress(formData?.basicInfo?.address || "");

    return (
        <Document>
            {[
                <Packets
                    list={[
                        "Copy of Photo ID -Send or Bring in during first visit",
                        "Copy of Insurance Card- Send or Bring in during first visit",
                        "Client’s Rights Acknowledgement",
                        "Consent for the Services",
                        "HIPAA Authorization Form",
                        "Notice of Policies and Practices to Protect the Privacy of Your Health Information.",
                        "Grievance Policy",
                    ]}
                    title="Early Intervention (ASAM Level 0.5) Packet"
                />,
                <ClientRight
                    data={{
                        signature: formData?.data?.signature || "",
                        date: convertIsoDateToReadable(
                            formData?.data?.date || ""
                        ),
                    }}
                />,
                <RightAcknowledgement
                    data={{
                        fullName,
                        signature: formData?.data?.signature || "",
                        date: convertIsoDateToReadable(
                            formData?.data?.date || ""
                        ),
                    }}
                />,
                <ConsentForServices
                    data={{
                        signature: formData?.data?.signature || "",
                        date: convertIsoDateToReadable(
                            formData?.data?.date || ""
                        ),
                    }}
                />,
                <EarlyInterventionConsent
                    data={{
                        fullName,
                        signature: formData?.data?.signature || "",
                        date: convertIsoDateToReadable(
                            formData?.data?.date || ""
                        ),
                    }}
                />,
                <BillInsurance
                    data={{
                        fullName,
                        clientAddress: fullAddress,
                        insuranceCompany:
                            formData?.data?.insuranceCompany || "",
                        signature: formData?.data?.signature || "",
                        date: convertIsoDateToReadable(
                            formData?.data?.date || ""
                        ),
                    }}
                />,
                <GrievancePolicy
                    data={{
                        fullName,
                        signature: formData?.data?.signature || "",
                        date: convertIsoDateToReadable(
                            formData?.data?.date || ""
                        ),
                        otherText:
                            "For questions or assistance with filing a grievance, contact the Client Rights Representative during business hours (9:00 AM - 4:00 PM).",
                    }}
                />,
                <TelehealthConsent
                    data={{
                        signature: formData?.data?.signature || "",
                        date: convertIsoDateToReadable(
                            formData?.data?.date || ""
                        ),
                    }}
                />,
                <MessageRemindersConsent
                    data={{
                        fullName,
                        phone: formData?.basicInfo?.phone || "",
                        signature: formData?.data?.signature || "",
                        date: convertIsoDateToReadable(
                            formData?.data?.date || ""
                        ),
                    }}
                />,
                <ClientOrientation
                    data={{
                        fullName,
                        signature: formData?.data?.signature || "",
                        date: convertIsoDateToReadable(
                            formData?.data?.date || ""
                        ),
                    }}
                />,
            ].map((consentForm, index) => (
                <PageWrapper key={index}>{consentForm}</PageWrapper>
            ))}
        </Document>
    );
};

export default EarlyInterventionDoc;
