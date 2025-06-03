import { Document, Page } from "@react-pdf/renderer";
import PdfPreview from "../../../../../components/PdfPreview";
import ClientRight from "../components/ClientRight";
import RightAcknowledgement from "../components/RightAcknowledgement";
import ConsentForServices from "../components/ConsentForServices";
import MedicationAgreement from "../components/MedicationAgreement";
import Hipaa from "../components/Hipaa";
import { PageWrapper } from "../components/pdfFormComponents";
import signature from "../../../../../assets/signature.jpg";
import MarylandNotice from "../components/MarylandNotice";
import BillInsurance from "../components/BillInsurance";
import ReleaseReceive from "../components/ReleaseReceive";
import GrievancePolicy from "../components/GrievancePolicy";
import TelehealthConsent from "../components/TelehealthConsent";
import MessageRemindersConsent from "../components/MessageRemindersConsent";
import CounsellingConfidentialityConsent from "../components/CounsellingConfidentialityConsent";
import CareCoordinationConsent from "../components/CareCoordinationConsent";
import ItpConsent from "../components/ItpConsent";
import ProfessionalConduct from "../components/ProfessionalConduct";
import ClientOrientation from "../components/ClientOrientation";
import Packets from "../components/Packets";

import { getFullAddress, getFullName } from "../../utils";
import { convertIsoDateToReadable, formatToMMDDYYYY } from "../../../../utils";

const OmhcDoc = ({ formData }) => {
    const fullName = getFullName({
        firstName: formData.basicInfo.firstName,
        middleName: formData.basicInfo.middleName,
        lastName: formData.basicInfo.lastName,
    });

    const fullAddress = getFullAddress(formData.basicInfo?.address);

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
                        "Records Release",
                        "Counseling Confidentiality",
                        "Coordination of Care",
                        "ITP Agreement",
                    ]}
                    title="CONSENT FOR SERVICES FORMS"
                />,
                <ClientRight
                    data={{
                        signature: formData?.data?.signature,
                        date:
                            convertIsoDateToReadable(formData?.data?.date) ||
                            "",
                    }}
                />,
                <RightAcknowledgement
                    data={{
                        fullName,
                        signature: formData?.data?.signature,
                        date:
                            convertIsoDateToReadable(formData?.data?.date) ||
                            "",
                    }}
                />,
                <ConsentForServices
                    data={{
                        signature: formData?.data?.signature,
                        date:
                            convertIsoDateToReadable(formData?.data?.date) ||
                            "",
                    }}
                />,
                <MedicationAgreement
                    data={{
                        fullName,
                        whoYouAre: formData.whoYouAre,
                        dob: formatToMMDDYYYY(formData?.basicInfo?.dob) || "",
                        pharmacy: formData.data.pharmacy,
                        prescribedMedications:
                            formData.data.prescribedMedications,
                        signature: formData?.data?.signature,
                        date:
                            convertIsoDateToReadable(formData?.data?.date) ||
                            "",
                    }}
                />,
                <Hipaa
                    data={{
                        signature: formData.data?.signature,
                        date:
                            convertIsoDateToReadable(formData?.data?.date) ||
                            "",
                    }}
                />,
                <MarylandNotice
                    data={{
                        signature: formData?.data?.signature,
                        date:
                            convertIsoDateToReadable(formData?.data?.date) ||
                            "",
                    }}
                />,
                <BillInsurance
                    data={{
                        fullName,
                        clientAddress: fullAddress,
                        insuranceCompany: formData.data.insuranceCompany,
                        signature: formData?.data?.signature,
                        date:
                            convertIsoDateToReadable(formData?.data?.date) ||
                            "",
                    }}
                />,
                <ReleaseReceive
                    data={{
                        fullName,
                        programs: formData.programs,
                        dob: formatToMMDDYYYY(formData?.basicInfo?.dob) || "",
                        permissions: formData.permissions,
                        secondParty: formData.secondParty,
                        itemsCovered: formData.itemsCovered,
                        otherItemsCovered: formData.data.otherItemsCovered,
                        signature: formData?.data?.signature,
                        date:
                            convertIsoDateToReadable(formData?.data?.date) ||
                            "",
                    }}
                />,
                <GrievancePolicy
                    data={{
                        fullName,
                        signature: formData?.data?.signature,
                        date:
                            convertIsoDateToReadable(formData?.data?.date) ||
                            "",
                        otherText:
                            "For questions or assistance with filing a grievance, contact the Client Rights Representative during business hours (9:00 AM - 4:00 PM).",
                    }}
                />,
                <TelehealthConsent
                    data={{
                        signature: formData?.data?.signature,
                        date:
                            convertIsoDateToReadable(formData?.data?.date) ||
                            "",
                    }}
                />,
                <MessageRemindersConsent
                    data={{
                        fullName,
                        phone: formData.basicInfo.phone,
                        signature: formData?.data?.signature,
                        date:
                            convertIsoDateToReadable(formData?.data?.date) ||
                            "",
                    }}
                />,
                <CounsellingConfidentialityConsent
                    data={{
                        fullName,
                        signature: formData?.data?.signature,
                        date:
                            convertIsoDateToReadable(formData?.data?.date) ||
                            "",
                    }}
                />,
                <CareCoordinationConsent
                    data={{
                        fullName,
                        signature: formData?.data?.signature,
                        date:
                            convertIsoDateToReadable(formData?.data?.date) ||
                            "",
                    }}
                />,
                <ItpConsent
                    data={{
                        fullName,
                        dob: formatToMMDDYYYY(formData?.basicInfo?.dob) || "",
                        signature: formData?.data?.signature,
                        date:
                            convertIsoDateToReadable(formData?.data?.date) ||
                            "",
                    }}
                />,
                <ProfessionalConduct
                    data={{
                        fullName,
                        dob: formatToMMDDYYYY(formData?.basicInfo?.dob) || "",
                        initial: formData.data.initial,
                        acceptanceChoices: formData.acceptanceChoices,
                        signature: formData?.data?.signature,
                        date:
                            convertIsoDateToReadable(formData?.data?.date) ||
                            "",
                    }}
                />,
                <ClientOrientation
                    data={{
                        fullName,
                        signature: formData?.data?.signature,
                        date:
                            convertIsoDateToReadable(formData?.data?.date) ||
                            "",
                    }}
                />,
            ].map((consentForm, index) => (
                <PageWrapper key={index}>{consentForm}</PageWrapper>
            ))}
        </Document>
    );
};

export default OmhcDoc;